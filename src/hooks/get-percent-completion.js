import useTodo from './use-todo';

const getPercentCompletion = (todoData) => {
  let count = 0;
  for (const item in todoData) {
    if (item.status === 'completed') count++;
  }
  return count / Object.keys(todoData).length;
};

export default getPercentCompletion;
