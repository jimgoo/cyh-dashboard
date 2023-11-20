'use client';
import React, { useState, useEffect, useContext, use } from 'react';
import userService from '@/services/user.service';
import todoService from '@/services/todo.service';
import tokenService from '@/services/token.service';
import { useSearchParams } from 'next/navigation';

const UserContext = React.createContext(undefined);
const TokenContext = React.createContext(undefined);
const TodoContext = React.createContext(undefined);
const LoaderContext = React.createContext(undefined);
const ProductContext = React.createContext(undefined);
const ProductsContext = React.createContext(undefined);

export const useUserTodo = () => {
  return useContext(TodoContext);
};
export const useUser = () => {
  return useContext(UserContext);
};
export const useUserToken = () => {
  return useContext(TokenContext);
};
export const useLoadingState = () => {
  return useContext(LoaderContext);
};
export const useCurrentProduct = () => {
  return useContext(ProductContext);
};
export const useProducts = () => {
  return useContext(ProductsContext);
};

const UserProvider = ({ children } = {}) => {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  if (token) {
    tokenService.saveLocalAccessToken(token);
  }
  const accessToken = tokenService.getLocalAccessToken('token');
  const { useFetchUser } = userService();
  const { useFetchTodo } = todoService();

  const {
    data: userData,
    isLoading: isUserLoading,
    isError: isUserError,
  } = useFetchUser(accessToken);

  const {
    data: todoData,
    isLoading: isTodoLoading,
    isError: isTodoError,
  } = useFetchTodo(accessToken);

  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentProductTodos, setCurrentProductTodos] = useState(null);

  // set the current product ID
  useEffect(() => {
    if (todoData && !currentProduct) {
      // find the product where is_current_pack is true
      const currentProduct = Object.keys(todoData).find((key) => todoData[key].is_current_pack);
      setCurrentProduct(currentProduct);
      console.log('setting current product', currentProduct);
    }
  }, [todoData, currentProduct]);

  // set the current todos
  useEffect(() => {
    if (currentProduct && !isTodoLoading) {
      console.log('setting current product todos');
      setCurrentProductTodos(todoData[currentProduct].steps_dict);
    }
  }, [currentProduct, todoData, isTodoLoading]);

  const updateCurrentProduct = (updatedData) => {
    // called from outside to update the current product ID
    setCurrentProduct(updatedData);
  };

  const loadingState = {
    user: {
      isLoading: isUserLoading,
      isError: isUserError,
    },
    todo: {
      isLoading: isTodoLoading,
      isError: isTodoError,
    },
  };

  return (
    <LoaderContext.Provider value={loadingState}>
      <UserContext.Provider value={userData}>
        <TokenContext.Provider value={accessToken}>
          <ProductsContext.Provider value={todoData}>
            <ProductContext.Provider value={{ currentProduct, updateCurrentProduct }}>
              <TodoContext.Provider value={currentProductTodos}>{children}</TodoContext.Provider>
            </ProductContext.Provider>
          </ProductsContext.Provider>
        </TokenContext.Provider>
      </UserContext.Provider>
    </LoaderContext.Provider>
  );
};

export default UserProvider;
