'use client';
import React, { useState, useEffect } from 'react';
import Sessions from '@/sections/sessions';
import InitialSteps from '@/sections/initial-steps';
import getSessions from '@/utils/constants/get-sessions';
import {
  useUser,
  useUserTodo,
  useUserToken,
  useCurrentProduct,
  useProducts,
} from '@/context/userContext';
import SkeletonLoader from '@/components/loaders/skeleton-loader';
import { HOME_DESCRIPTION, SESSION_STATUS, USER_STATUS } from '@/utils/constants/constant';
import useTodo from '@/hooks/use-todo';
import Conditional from '@/components/stateful/conditional';
import UserStatusCards from '@/components/stateful/user-status-cards';
import { useLoadingState } from '@/context/userContext';
import { Alert, Card, Progress, Tag, Typography } from 'antd';
import { formatDateDayOnly } from '@/utils/helpers';
import todoService from '@/services/todo.service';

const HomeSection = () => {
  const productsData = useProducts();
  const todoData = useUserTodo();
  const userData = useUser();
  const token = useUserToken();
  const loadingState = useLoadingState();
  const { completedExperiences } = useTodo(null, token, userData, todoData);
  const { currentProduct, updateCurrentProduct } = useCurrentProduct();
  const [returnUser, setReturnUser] = React.useState(null);

  const [showSelect, setShowSelect] = useState(false);

  const { useFetchTodo } = todoService();
  const { refetch: refetchTodos } = useFetchTodo(token);

  useEffect(() => {
    // Parse the query string for 'showPacks'
    const queryParams = new URLSearchParams(location.search);

    // Check if 'showPacks' parameter is present and set showSelect accordingly
    setShowSelect(queryParams.has('showPacks'));

    // when someone clicks back on an item, the todos should refresh since the status may have changed
    refetchTodos();
  }, []);

  const rejectedStatus =
    userData?.user_status === USER_STATUS.REJECTED ||
    userData?.user_status === USER_STATUS.ONHOLD ||
    userData?.user_status === USER_STATUS.CANCELED;

  // State to store the options for the dropdown select
  const [productOptions, setProductOptions] = useState([]);

  // State to store the selected product
  const [selectedProduct, setSelectedProduct] = useState('');

  // Populate the dropdown options and set the default selection when todoData is loaded
  useEffect(() => {
    if (productsData) {
      // Convert productsData keys into array and set it to productOptions
      const options = Object.keys(productsData).map((key) => ({
        id: key,
        product_id: `${productsData[key].product_id.replace(
          'Pack',
          'session plan',
        )} purchased ${formatDateDayOnly(productsData[key].purchase_date)} (${
          productsData[key].is_current_pack ? 'current, ' : ''
        }${productsData[key].is_pack_complete ? 'complete' : 'incomplete'})`,
      }));

      setProductOptions(options);

      // Find and set the default selection
      const defaultProduct = options.find((opt) => productsData[opt.id].is_current_pack);
      if (defaultProduct) {
        setSelectedProduct(defaultProduct.id);
        updateCurrentProduct(defaultProduct.id);
      } else if (options[0]) {
        // default to first if a current pack is not set
        setSelectedProduct(options[0].id);
        updateCurrentProduct(options[0].id);
      } else {
        setSelectedProduct(null);
        updateCurrentProduct(null);
      }
    }
  }, [productsData]);

  // Handler for when a dropdown option is selected
  const handleProductChange = (e) => {
    setSelectedProduct(e.target.value);
    const newProduct = productOptions.find((opt) => opt.id === e.target.value);
    if (newProduct) {
      updateCurrentProduct(newProduct.id);
    }
  };

  const [product_id, setProductId] = React.useState(null);

  useEffect(() => {
    if (productsData && currentProduct) {
      setProductId(productsData[currentProduct].product_id_old);
      setReturnUser(productsData[currentProduct].is_first_pack ? false : true);
    }
  }, [productsData, currentProduct]);

  if (loadingState.user.isLoading || loadingState.todo.isLoading) {
    return (
      <section style={{ width: '100%', minHeight: '100vh', overflowX: 'none' }}>
        <div>
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
        </div>
      </section>
    );
  }
  if ((!loadingState.user.isLoading && !userData) || (!loadingState.todo.isLoading && !todoData)) {
    return (
      <div className={'homeContainer'}>
        <Alert
          style={{ width: '80%', margin: 'auto', marginTop: 20 }}
          message={<div style={{ fontWeight: 'bold' }}>Error</div>}
          description="We had a problem fetching your purchase data. Please make sure you have made a purchase from https://chooseketamine.com and try again. If the problem persists, please contact support."
          type="error"
        />
      </div>
    );
  }
  const sessionStatus = userData.user_status === USER_STATUS.APPROVED || returnUser === true;

  const greeting = userData.firstname ? `Hi ${userData.firstname}!` : 'Hello!';
  const sessionCount = getSessions(product_id);
  const percentComplete = completedExperiences / sessionCount;

  if (userData && todoData) {
    return (
      <section
        style={{
          backgroundColor: '#EEF3FA',
          overflowX: 'none',
          paddingBottom: '4em',
          paddingTop: '2em',
        }}
        className="homeContainer"
      >
        <div style={{ width: '80%', margin: 'auto', overflowY: 'none' }}>
          <div className="font-large font-weight-900 margin-bottom">
            {`${greeting} We're so happy to see you here!`}
          </div>
          <Card
            style={{ width: '215px' }}
            bodyStyle={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}
            className="margin-bottom-large"
          >
            <Progress
              type="circle"
              percent={percentComplete}
              strokeColor="rgba(67, 136, 240, 0.33)"
              strokeWidth={10}
            />
            <div className="font-medium">Completion</div>
            <div>
              <Tag
                color="rgba(67, 136, 240, 0.33)"
                style={{ borderRadius: '16px', padding: '0 12px' }}
              >
                <Typography.Text strong>{`${sessionCount} session plan`}</Typography.Text>
              </Tag>
            </div>
          </Card>
          <div>
            <div className="font-medium font-weight-900 margin-bottom-small">Future sessions</div>
            <div>
              View the details of your future sessions including the session plan, important
              reminders, or requirements for the specific session.
            </div>
          </div>
          {showSelect && productsData && Object.keys(productsData).length > 1 && (
            <div>
              <select
                value={selectedProduct}
                onChange={handleProductChange}
                style={{ padding: '10px' }}
                className={'font-weight-400 font-medium'}
              >
                {productOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.product_id}
                  </option>
                ))}
              </select>
            </div>
          )}
          <Conditional showWhen={!sessionStatus || rejectedStatus}>
            <UserStatusCards status={userData.user_status} token={token} />
          </Conditional>
          <Conditional showWhen={!rejectedStatus}>
            <div>{sessionStatus ? <Sessions /> : <InitialSteps />}</div>
          </Conditional>
        </div>
      </section>
    );
  }
};

export default HomeSection;
