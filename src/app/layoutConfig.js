'use client';

import { ToastContainer } from 'react-toastify';
import { ConfigProvider } from 'antd';
import UserProvider from '@/context/userContext';
import MainLayout from '@/layouts/main-layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
import { MulishFont } from '@/utils/fonts/fonts';

const LayoutConfig = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ConfigProvider
        theme={{ token: { colorPrimary: '#4261EF', fontFamily: MulishFont.style.fontFamily } }}
      >
        <UserProvider>
          <MainLayout>{children}</MainLayout>
        </UserProvider>
      </ConfigProvider>
    </QueryClientProvider>
  );
};

export default LayoutConfig;
