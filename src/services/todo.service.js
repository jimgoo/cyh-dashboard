import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import createAxiosInstance from '@/utils/config/axios-instance';

const TodoService = () => {
  const useFetchTodo = (token) => {
    function fetchTodo() {
      console.log('fetching todos');
      return createAxiosInstance(token)
        .get(`/users/todos?version=3`)
        .then((res) => res.data);
    }

    return useQuery({
      queryFn: fetchTodo,
      queryKey: [`todos`],
      cacheTime: Infinity,
      staleTime: Infinity,
      retry: 0,
    });
  };
  const useHandleUpdateTodo = (token) => {
    function handleUpdateTodo(data) {
      return createAxiosInstance(token)
        .put(`/users/todos`, data)
        .then((res) => res.data);
    }

    const onSuccess = (response) => {
      toast.success('Session Booked Successfully! We Will Contact You Soon');
    };
    const onError = (error) => {
      toast.error(viewError(error.response.data.message));
    };

    return useMutation({
      mutationFn: handleUpdateTodo,
      onError,
      onSuccess,
      retry: 0,
    });
  };

  return {
    useFetchTodo,
    useHandleUpdateTodo,
  };
};

export default TodoService;
