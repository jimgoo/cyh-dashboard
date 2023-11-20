'use client';

import React from 'react';
import '@/styles/login-form.scss';
import logo from '@/assets/logo.webp';
import Image from 'next/image';
import { Card } from 'antd';
import { WELCOME_MESSAGE, WELCOME_MESSAGE_DESCRIPTION } from '@/utils/constants/constant';

const Invite = () => {
  return (
    <>
      <div className={'loginContainer'} style={{ background: '#faf8f4' }}>
        <div className={'loginWrapper'}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              style={{ margin: 'auto', width: '300px', objectFit: 'contain' }}
              src={logo}
              alt="Landscape picture"
            />
          </div>
          <Card className="flex justify-center items-center loginCard">
            <div style={{ width: '90%', margin: 'auto' }}>
              <h4
                className={'font-weight-900 font-medium '}
                style={{ textAlign: 'center', lineHeight: '2px' }}
              >
                {WELCOME_MESSAGE}
              </h4>
              <p style={{ textAlign: 'center' }}>{WELCOME_MESSAGE_DESCRIPTION}</p>
            </div>

            <div
              style={{
                background: '#faf8f4',
                textAlign: 'center',
                padding: '10px',
              }}
            >
              {/* <h2>Please Check Your Email</h2> */}
              <h3 style={{ color: '#2a2d3f' }}>We have sent you a login link to your email.</h3>
              <div style={{ maxWidth: 600, color: '#aaa' }}>
                <p>
                  Don't see the email? Please check your promotional or spam folder! If you still
                  don't see it, please contact us at hello@chooseketamine.com.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Invite;
