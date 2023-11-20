import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import { useUser } from '@/context/userContext';
import Conditional from '@/components/stateful/conditional';
import SmallCard from '@/components/common/cards/small-cards';
import { getUserStatusDetails, USER_STATUS } from '@/utils/constants/constant';
const UserStatusCards = () => {
  const userData = useUser();
  const [showApprovedCard, setShowApprovedCard] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowApprovedCard(false);
    }, 20000);

    return () => clearTimeout(timeout);
  }, []);

  const approvedStatus = showApprovedCard && userData?.user_status === USER_STATUS.APPROVED;
  const userSessionStatus = getUserStatusDetails(userData?.user_status);
  return (
    <div>
      <Conditional showWhen={approvedStatus}>
        <Card size="small" style={{ background: '#DDEAE7', border: '1px solid #87D6C6' }}>
          <h4 style={{ paddingLeft: '6px' }} className="font-small">
            You are approved
          </h4>
        </Card>
      </Conditional>
      {userSessionStatus != null && (
        <SmallCard
          heading={userSessionStatus.heading}
          description={userSessionStatus.description}
        />
      )}
    </div>
  );
};

export default UserStatusCards;
