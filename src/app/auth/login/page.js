'use client';
import React from 'react';
import '@/styles/login-form.scss';
import logo from '@/assets/logo.webp';
import Image from 'next/image';
import { Button, Card, Divider, Form, Input } from 'antd';
import AuthService from '@/services/auth.service';
import { useRouter } from 'next/navigation';
import { WELCOME_MESSAGE, WELCOME_MESSAGE_DESCRIPTION } from '@/utils/constants/constant';
import {useUserToken} from "@/context/userContext";

const Login = () => {
  const { useHandleLoginInService } = AuthService();
  const { mutate: handleLogin } = useHandleLoginInService();
  const token=useUserToken();
  const onFinish = (values) => {
    console.log('Success:', values);
    handleLogin(values);
    router.push('/auth/invite');
  };
  const router = useRouter();
  if (token) {
    router.push('/home');
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
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
              style={{
                margin: 'auto',
                width: '300px',
                objectFit: 'contain',
              }}
              src={logo}
              alt="Landscape picture"
            />
          </div>

          <Card
            style={{
              padding: '0',
              boxShadow: '0 7px 21px rgba(0,0,0,.1)',
            }}
            className="flex justify-center items-center loginCard padding-none"
          >
            <div>
              <h4
                className={'font-weight-700 heading-22 center-text'}
                style={{
                  lineHeight: '2px',
                }}
              >
                {WELCOME_MESSAGE}
              </h4>
              <p className="center-text secondary-title font-weight-500">
                {WELCOME_MESSAGE_DESCRIPTION}
              </p>
              <Divider />
            </div>

            <Form
              name="basic"
              // style={{ maxWidth: 600 }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <label className="secondary-title font-weight-700">Email Address:</label>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your email!',
                  },
                ]}
              >
                <Input
                  style={{
                    padding: '12px',
                    width: '100%',
                    marginTop: '20px',
                  }}
                  placeholder="you@example.com"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="submit"
                  htmlType="submit"
                  style={{
                    borderRadius: 'none',
                  }}
                  className="bg-primary-color loginButton heading-18 font-weight-700 white-color width-100"
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Login;
