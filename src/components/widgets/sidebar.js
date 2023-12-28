'use client';
import { Avatar, Button, Card, Grid, Layout } from 'antd';
import React, { useMemo, Fragment, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import {
  useCurrentProduct,
  useProducts,
  useUser,
  useUserTodo,
  useUserToken,
} from '@/context/userContext';

import useSessionContent from '@/hooks/use-session-content';
import { todoConfig } from '@/utils/constants/todo-config';
import { SESSION_STATUS } from '@/utils/constants/constant';
import SessionContent from '../presentational/session-content';

const { Sider } = Layout;

const Sidebar = () => {
  const token = useUserToken();
  const userData = useUser();
  const todoItems = todoConfig(token);
  const todoData = useUserTodo();
  const productsData = useProducts();
  const { currentProduct } = useCurrentProduct();
  const productId = productsData ? productsData[currentProduct]?.product_id_old : null;

  const [isUserExpanded, setIsUserExpanded] = useState(false);
  const [isSessionPlanExpanded, setIsSessionPlanExpanded] = useState(false);

  const currentSession = useMemo(() => {
    const remainingSessions = todoItems.sessions?.filter((session) =>
      session.product.includes(productId),
    );
    return remainingSessions.length > 0 ? remainingSessions[0] : null;
  }, [todoItems.sessions, productId]);

  const [_, singleService] = useSessionContent();
  const sessionData = currentSession ? singleService(currentSession.todoItem) : null;

  return (
    <Sider
      width={400}
      style={{
        backgroundColor: '#EEF3FA',
        height: '100vh',
      }}
      trigger={null}
    >
      <div
        style={{
          backgroundColor: '#1F2F44',
          height: '100%',
          borderTopLeftRadius: '8px',
          borderBottomLeftRadius: '8px',
        }}
      >
        <div
          style={{
            backgroundImage: `url('/woman-in-space.png')`,
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
            height: '100%',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {userData?.firstname ? (
            <div
              style={{
                display: 'flex',
                gap: '0.5em',
                alignItems: 'center',
                justifyContent: 'flex-end',
                cursor: 'pointer',
              }}
              className="margin-bottom-large"
              onClick={() => setIsUserExpanded(!isUserExpanded)}
            >
              <Avatar style={{ backgroundColor: '#EB6A6A', color: '#721B1B' }}>
                {userData.firstname[0].toUpperCase()}
              </Avatar>
              <div className="white-color">{userData.firstname}</div>
              {isUserExpanded ? (
                <ExpandLessIcon className="white-color" />
              ) : (
                <ExpandMoreIcon className="white-color" />
              )}
            </div>
          ) : null}

          <div className="font-medium font-weight-900 white-color font-white margin-bottom">
            What's the plan for today?
          </div>
          <Card style={{ overflowY: 'auto' }}>
            {sessionData ? (
              <>
                <div className="font-medium font-weight-900 margin-bottom">{sessionData.title}</div>

                <hr className="margin-top margin-bottom" style={{ backgroundColor: '#D3D3D3' }} />

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}
                  className={`${isSessionPlanExpanded ? 'margin-bottom' : ''}`}
                  onClick={() => setIsSessionPlanExpanded(!isSessionPlanExpanded)}
                >
                  <div className="font-small">Session Plan</div>
                  {isSessionPlanExpanded ? <RemoveIcon /> : <AddIcon />}
                </div>

                {isSessionPlanExpanded ? (
                  <>
                    {sessionData.repeatCustomerParagraph ? (
                      <div className="margin-bottom">{sessionData.repeatCustomerParagraph}</div>
                    ) : null}

                    {sessionData.paragraphText && sessionData.paragraphText.length > 0 ? (
                      <>
                        <div className="margin-bottom">
                          {sessionData.paragraphText.map((text) => (
                            <div key={text} className="margin-bottom-small">
                              {text}
                            </div>
                          ))}
                        </div>
                      </>
                    ) : null}

                    {sessionData.footerText && sessionData.footerText.length > 0 ? (
                      <>
                        <div className="margin-bottom">
                          {sessionData.footerText.map((text) => (
                            <div key={text} className="margin-bottom-small">
                              {text}
                            </div>
                          ))}
                        </div>
                      </>
                    ) : null}
                  </>
                ) : null}

                <hr className="margin-top margin-bottom" style={{ backgroundColor: '#D3D3D3' }} />

                {sessionData.list && sessionData.list.length > 0 ? (
                  <>
                    <div>
                      {sessionData.list.map((listItem) => {
                        return (
                          <Fragment key={listItem.heading}>
                            <div className="font-weight-900 margin-bottom">{listItem.heading}</div>
                            <div>{listItem.description}</div>
                            {listItem.items.length > 0 ? (
                              <ul>
                                {listItem.items.map((item) => {
                                  return <li key={item}>{item}</li>;
                                })}
                              </ul>
                            ) : null}
                          </Fragment>
                        );
                      })}
                    </div>
                  </>
                ) : null}

                {currentSession.route ? (
                  <Button
                    type="text"
                    className="bg-primary-color white-color primary-title button-small"
                    onClick={() => navigation.push(currentSession.route)}
                  >
                    {todoData &&
                    todoData[currentSession.todoItem]?.status === SESSION_STATUS.INCOMPLETE &&
                    !(currentSession.todoItem === 'telemedicine_paperwork')
                      ? 'Schedule Now'
                      : 'View'}
                  </Button>
                ) : null}
              </>
            ) : null}
          </Card>
        </div>
      </div>
    </Sider>
  );
};

export default Sidebar;
