import React, { useState, useEffect } from 'react';
import womanInSpace from '@/assets/womanInSpace.png';
import Image from 'next/image';
import { useUser, useUserTodo } from '@/context/userContext';
import NextItemCard from '../stateful/next-item-card';
import styles from '@/styles/lra.module.scss';
import sessionOneReminders from '@/utils/dummy-data/reminders';

const RightSideHomePage = ({ todoData, user }) => {
  return (
    <div className={styles.indigoContainer}>
      <div className="padding-around-2">
        <div className="flex flex-column">
          <div className={styles.indigoUserInfo}>
            <div className={styles.userIcon}>{user?.firstname[0]}</div>
            <p className={styles.rightSideNameDisplay}>{user?.firstname}</p>
            <div className="flex flex-column items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
              >
                <path
                  d="M1 1L7 7L13 1"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className={styles.rightSideMessageDisplay}>
            <p className={styles.rightSideMessage}>What's the plan for today?</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          {todoData && <NextItemCard todoData={todoData} />}
        </div>
      </div>
      <div className={styles.rightSideImageContainer}>
        <Image className={styles.rightSideImage} priority={true} alt={'logo'} src={womanInSpace} />
      </div>
    </div>
  );
};

export default RightSideHomePage;
