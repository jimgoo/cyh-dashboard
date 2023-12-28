import React, { useEffect } from 'react';
import TodoCard from '@/components/stateful/todo-cards/todo-card';
import UserStatusCards from '@/components/stateful/user-status-cards';
import {
  useUser,
  useUserTodo,
  useUserToken,
  useProducts,
  useCurrentProduct,
} from '@/context/userContext';
import { todoConfig } from '@/utils/constants/todo-config';
import TodoCardsDisabled from '@/components/stateful/todo-cards/todo-card-disabled';
import { SESSION_STATUS } from '@/utils/constants/constant';

const InitialSteps = () => {
  const token = useUserToken();
  const todoItems = todoConfig(token);
  const todoData = useUserTodo();

  // true if we let user schedule a consultation
  const consultationStatus =
    todoData.file_upload_id.status === SESSION_STATUS.COMPLETED &&
    todoData.telemedicine_paperwork.status === SESSION_STATUS.COMPLETED;

  const productsData = useProducts();
  const { currentProduct } = useCurrentProduct();
  const [returnUser, setReturnUser] = React.useState(null);
  const [itemsCount, setItemsCount] = React.useState(0);

  useEffect(() => {
    if (productsData && currentProduct) {
      setReturnUser(productsData[currentProduct].is_first_pack ? false : true);

      const items = ['telemedicine_paperwork', 'video_consultation', 'file_upload_id'];
      let count = 0;
      items.map((e) => {
        if (
          todoData &&
          [SESSION_STATUS.INCOMPLETE, SESSION_STATUS.CANCELED].includes(todoData[e]?.status)
        ) {
          count++;
        }
      });
      setItemsCount(count);
    }
  }, [productsData, currentProduct]);

  return (
    <>
      {!returnUser && (
        <div style={{ marginTop: '20px' }}>
          <span className={'primary-color'}>Items to be Completed ({itemsCount})</span>
        </div>
      )}
      {todoItems.initialSteps.map((item, index) => {
        return (
          <div key={index}>
            {item.todoItem === 'video_consultation' && !consultationStatus ? (
              <TodoCardsDisabled
                todoItem={item.todoItem}
                heading={item.heading}
                route={item.route}
                description={item.description}
              />
            ) : (
              <TodoCard
                todoItem={item.todoItem}
                heading={item.heading}
                route={item.route}
                description={item.description}
              />
            )}
          </div>
        );
      })}
    </>
  );
};
export default InitialSteps;
