import React, { useState, useEffect } from 'react';
import { SESSION_REMINDERS } from '@/utils/constants';
import styles from '@/styles/lra.module.scss';
import getNextIncompleteExperience from '@/hooks/get-next-todo';

const NextItemCard = ({ todoData }) => {
  const [nextSession, setNextSession] = useState('');

  useEffect(() => {
    let nextExperience = getNextIncompleteExperience(todoData);
    setNextSession(nextExperience);
  }, [todoData]);
  return (
    <div className={styles.nextItemCard}>
      <div className={styles.nextItemCardHeadline}>{nextSession}</div>
      <div className={styles.nextItemSessionPlan}>
        <p>Session Plan</p>
        <button className={styles.sessionPlanButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 12H12M12 12H19M12 12V5M12 12V19"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className={styles.nextItemCardRemindersHeadlineContainer}>
        <p className={styles.nextItemCardRemindersHeadline}>Important Reminders</p>
      </div>
      <div className={styles.rightSideRemindersListContainer}>
        {SESSION_REMINDERS.map((reminder, index) => (
          <div key={index}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3.5"
                height="3.5"
                fill="currentColor"
                className="bi bi-circle-fill"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </span>
            <span> {reminder}</span>
          </div>
        ))}
      </div>
      <button className={styles.nextItemCardScheduleButton}>Schedule now</button>
    </div>
  );
};

export default NextItemCard;
