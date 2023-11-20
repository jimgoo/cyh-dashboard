'use client';
import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import Iframe from '@/components/common/Iframe';
import ThirdPartyLinks from '@/utils/constants/thirdparty-links';
import { useUser } from '@/context/userContext';

const SessionModal = ({ title, sessionId, open, setOpen }) => {
  const [endpoint, setEndPoint] = useState('');
  const userData = useUser();

  useEffect(() => {
    if (userData) {
      console.log('SessionModal | userData', userData);
      const url = ThirdPartyLinks(
        userData.email,
        userData.firstname,
        userData.lastname,
        userData.phonenumber,
        userData.token,
        userData.formToken,
        sessionId,
      );
      setEndPoint(url);
    }
  }, [userData]);

  const handleOk = () => {
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        width={'100%'}
        bodyStyle={{ height: '90%' }}
        style={{ transform: 'translateY(-100px)' }}
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        title={title}
        footer={[]}
      >
        <div style={{ width: '100%' }}>
          <Iframe url={endpoint} />
        </div>
      </Modal>
    </div>
  );
};
export default SessionModal;
