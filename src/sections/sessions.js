import TodoCard from '@/components/stateful/todo-cards/todo-card';
import React, { useEffect } from 'react';
import { useUserToken, useProducts, useCurrentProduct } from '@/context/userContext';
import { todoConfig } from '@/utils/constants/todo-config';
import { repeatCustomer, globalTodos } from '@/utils/constants/todo-config';
import { SESSION_STATUS } from '@/utils/constants/constant';

const Sessions = () => {
  const token = useUserToken();
  const todoItems = todoConfig(token);

  const productsData = useProducts();
  const { currentProduct } = useCurrentProduct();
  const [product_id, setProductId] = React.useState(null);
  const [returnUser, setReturnUser] = React.useState(null);

  useEffect(() => {
    if (productsData && currentProduct) {
      setProductId(productsData[currentProduct].product_id_old);
      setReturnUser(productsData[currentProduct].is_first_pack ? false : true);
    }
  }, [productsData, currentProduct]);

  return (
    <>
      {!returnUser && todoItems.sessions
        ? todoItems.sessions.slice(1).map((item, index) => {
            if (item.product.includes(product_id)) {
              return (
                <TodoCard
                  key={index}
                  todoItem={item.todoItem}
                  heading={item.heading}
                  route={item.route}
                  description={
                    returnUser && item.repeatDescription ? item.repeatDescription : item.description
                  }
                  isExpanded={
                    productsData[currentProduct].steps_dict[item.todoItem]?.status ===
                      SESSION_STATUS.SCHEDULED ||
                    productsData[currentProduct].steps_dict[item.todoItem]?.status ===
                      SESSION_STATUS.RE_SCHEDULED
                  }
                />
              );
            }
          })
        : repeatCustomer.map((item, index) => {
            if (item.product.includes(product_id)) {
              return (
                <TodoCard
                  key={index}
                  todoItem={item.todoItem}
                  heading={item.heading}
                  route={item.route}
                  description={
                    returnUser && item.repeatDescription ? item.repeatDescription : item.description
                  }
                  isExpanded={
                    productsData[currentProduct].steps_dict[item.todoItem]?.status ===
                      SESSION_STATUS.SCHEDULED ||
                    productsData[currentProduct].steps_dict[item.todoItem]?.status ===
                      SESSION_STATUS.RE_SCHEDULED
                  }
                />
              );
            }
          })}

      {globalTodos.map((item, index) => {
        return (
          <TodoCard
            key={index}
            todoItem={item.todoItem}
            heading={item.heading}
            route={item.route}
            description={
              returnUser && item.repeatDescription ? item.repeatDescription : item.description
            }
            isExpanded={
              productsData[currentProduct].steps_dict[item.todoItem]?.status ===
                SESSION_STATUS.SCHEDULED ||
              productsData[currentProduct].steps_dict[item.todoItem]?.status ===
                SESSION_STATUS.RE_SCHEDULED
            }
          />
        );
      })}
    </>
  );
};
export default Sessions;
