import React from 'react';
import getPercentCompletion from '@/hooks/get-percent-completion';
import styles from '@/styles/lra.module.scss';
import { progress } from 'framer-motion';

const ProgressCard = ({ todoData }) => {
  const percentCompletion = getPercentCompletion(todoData);

  return (
    <div className={styles.progressCard}>
      <div className={styles.doughnut}>{percentCompletion}%</div>
      <div className={styles.progressLargeText}>Completion</div>
      <div className={styles.progressCardButton}>4 Session Plan</div>
    </div>
  );
};

export default ProgressCard;
