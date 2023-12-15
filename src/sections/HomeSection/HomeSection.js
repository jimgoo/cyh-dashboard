'use client';
import React, { useState, useEffect } from 'react';
import Sessions from '@/sections/sessions';
import InitialSteps from '@/sections/initial-steps';
import {
  useUser,
  useUserTodo,
  useUserToken,
  useCurrentProduct,
  useProducts,
} from '@/context/userContext';
import SkeletonLoader from '@/components/loaders/skeleton-loader';
import { USER_STATUS } from '@/utils/constants/constant';
// import useTodo from '@/hooks/use-todo';
import Conditional from '@/components/stateful/conditional';
import UserStatusCards from '@/components/stateful/user-status-cards';
import { useLoadingState } from '@/context/userContext';
import { Alert } from 'antd';
import { formatDateDayOnly } from '@/utils/helpers';
import todoService from '@/services/todo.service';
import TodayPlan from './TodayPlan';
import useCapitalize from '@/hooks/use-capitalize';

const HomeSection = () => {
  const capitalize = useCapitalize();
  const productsData = useProducts();
  const todoData = useUserTodo();
  const userData = useUser();
  const token = useUserToken();
  const loadingState = useLoadingState();
  // const { completedExperiences } = useTodo(null, token, userData, todoData);
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
  console.log(product_id);

  useEffect(() => {
    if (productsData && currentProduct) {
      setProductId(productsData[currentProduct].product_id_old);
      setReturnUser(productsData[currentProduct].is_first_pack ? false : true);
    }
  }, [productsData, currentProduct]);

  if (loadingState.user.isLoading || loadingState.todo.isLoading) {
    return (
      <section
        style={{ width: '100%', minHeight: '100vh', overflowX: 'none' }}
        className={'primary-bg'}
      >
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
      <div className={'primary-bg homeContainer'}>
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
  if (userData && todoData) {
    return (
      <section
        style={{ width: '100%', overflowX: 'none', height: '100%' }}
        className={'primary-bg homeContainer'}
      >
        <div
          style={{
            display: 'flex',
            width: '100%',
            paddingLeft: '40px',
            gap: '40px',
            height: '100%',
          }}
        >
          <div
            style={{ width: '80%', overflowY: 'none', marginBottom: '100px', paddingTop: '67px' }}
          >
            <h1 style={{ fontSize: '30px', fontWeight: 'bold', margin: 0 }}>
              {`Hi ${capitalize(userData.firstname)}! We're so happy to see you here!`}
            </h1>
            <div style={{ display: 'flex', width: '100%', gap: '25px', marginTop: '22px' }}>
              {/* COMPLETION CARD */}
              <div className="card" style={{ width: '215px' }}>
                <div className="progress-ring" style={{ marginBottom: '15px' }}>
                  0%
                </div>
                <span style={{ fontSize: '27px', fontWeight: 500, marginBottom: '8px' }}>
                  Completion
                </span>
                <div className="plan-count-pill">4 Session Plan</div>
              </div>
              {/* EMPTY CARD */}
              <div className="card" style={{ flexGrow: 1 }}></div>
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
            {/* <div>
            {!rejectedStatus && <p className="font-small font-weight-400">{HOME_DESCRIPTION}</p>}
          </div> */}
            <Conditional showWhen={!sessionStatus || rejectedStatus}>
              <UserStatusCards status={userData.user_status} token={token} />
            </Conditional>
            <Conditional showWhen={!rejectedStatus}>
              <div>{sessionStatus ? <Sessions /> : <InitialSteps />}</div>
            </Conditional>
          </div>
          <TodayPlan userData={userData} />
        </div>
      </section>
    );
  }
};

export default HomeSection;
