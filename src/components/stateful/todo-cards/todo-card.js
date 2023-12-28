import useTodo from '@/hooks/use-todo';
import { Button, Card, Collapse } from 'antd';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser, useUserTodo, useUserToken } from '@/context/userContext';
import { SESSION_STATUS } from '@/utils/constants/constant';
import { formatDate } from '@/utils/helpers';
import IdUpload from '@/components/stateful/id-upload';

const TodoCard = ({ todoItem, description, route, heading, isExpanded = false }) => {
  const userData = useUser();
  const todoData = useUserTodo();
  const token = useUserToken();
  const { status } = useTodo(todoItem, token, userData, todoData);
  const navigation = useRouter();
  const textStyles = {
    fontSize: '15px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    color: '#3F3F3F',
  };
  const headingChange = () => {
    if (collapsed) {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
  };
  const [collapsed, setCollapsed] = useState(true);
  return (
    <>
      {/* status == true means that the item is completed and this card will be disabled */}
      {!status ? (
        <Collapse
          onChange={headingChange}
          size="large"
          style={{
            background: 'white',
            marginTop: '20px',
            border: 'none',
            lineHeight: '.5px',
          }}
          className={'font-weight-700 font-large'}
          expandIconPosition={'end'}
          bordered={false}
          defaultActiveKey={isExpanded ? ['1'] : []}
          items={[
            {
              key: '1',
              label: `${heading}`,
              children: (
                <div>
                  <p style={textStyles}>
                    {todoData[todoItem]?.status === SESSION_STATUS.SCHEDULED ||
                    todoData[todoItem]?.status === SESSION_STATUS.RE_SCHEDULED
                      ? `Scheduled for ${formatDate(todoData[todoItem].datetime)}`
                      : description}
                  </p>
                  <div className="flex justify-end">
                    {route && (
                      <Button
                        type="text"
                        className="bg-primary-color white-color primary-title button-small"
                        onClick={() => navigation.push(route)}
                      >
                        {todoData[todoItem]?.status === SESSION_STATUS.INCOMPLETE &&
                        !(todoItem === 'telemedicine_paperwork')
                          ? 'Schedule'
                          : 'View'}
                      </Button>
                    )}
                  </div>
                  {!route && <IdUpload />}
                </div>
              ),
            },
          ]}
        />
      ) : (
        <Collapse
          size="large"
          style={{
            background: 'white',
            marginTop: '20px',
            border: 'none',
            lineHeight: '.5px',
            color: 'black',
          }}
          className={'font-weight-700 font-large'}
          expandIconPosition={'end'}
          collapsible={'disabled'}
          expandIcon={(panelprops) => (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0C5.375 0 0 5.375 0 12C0 18.625 5.375 24 12 24C18.625 24 24 18.625 24 12C24 5.375 18.625 0 12 0ZM18.175 9.1L11.125 16.175C10.9 16.4 10.575 16.55 10.25 16.55C9.925 16.55 9.6 16.425 9.375 16.175L5.825 12.625C5.325 12.125 5.325 11.35 5.825 10.85C6.325 10.35 7.1 10.35 7.6 10.85L10.25 13.5L16.425 7.325C16.925 6.825 17.7 6.825 18.2 7.325C18.675 7.825 18.675 8.6 18.175 9.1Z"
                fill="#87D6C6"
              />
            </svg>
          )}
          bordered={false}
          // this needs to always be collapsed since it's a disabled card for a completed todo item
          // defaultActiveKey={isExpanded ? ['1'] : []}
          items={[
            {
              key: '1',
              label: `${heading}`,
              children: (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    lineHeight: '2px',
                  }}
                >
                  <h1 className="font-md color-secondary">{heading}</h1>
                </div>
              ),
            },
          ]}
        />
      )}
    </>
  );
};

export default TodoCard;
