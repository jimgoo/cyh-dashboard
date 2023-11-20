'use client';
import { useEffect, useState } from 'react';
import { todoConfig } from '@/utils/constants/todo-config';

const COMPLETE_STATUS = 'completed';

const useTodo = (todoItem, token, userData, todoData) => {
  const [completedExperiences, setCompletedExperiences] = useState(0);
  useEffect(() => {
    if (todoData) {
      getCompletedSessions();
    }
  }, [todoData, userData, token, todoItem]);

  const status = todoData && todoData[todoItem] && todoData[todoItem]['status'] === COMPLETE_STATUS;

  const getCompletedSessions = () => {
    let count = 0;
    const todo = todoConfig(token);
    todo.sessions.map((item) => {
      if (
        item.product.includes(userData?.product_id) &&
        todoData[item.todoItem] &&
        todoData[item.todoItem]['status'] === COMPLETE_STATUS
      ) {
        count++;
      }
    });
    setCompletedExperiences(count);
  };

  return {
    status,
    completedExperiences,
  };
};

export default useTodo;
