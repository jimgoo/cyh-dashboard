'use client';
import React, { useEffect, useState } from 'react';
import { Layout, theme } from 'antd';
import { useUser, useUserToken } from '@/context/userContext';
import { usePathname, useRouter } from 'next/navigation';
import { PUBLIC_ENDPOINTS } from '@/utils/constants/constant';
import dynamic from 'next/dynamic';
const { Content } = Layout;
import Script from 'next/script';
const Navigation = dynamic(() => import('@/components/widgets/navigation'), { ssr: false });

const MainLayout = ({ children }) => {
  const {
    token: {},
  } = theme.useToken();
  const [isPublic, setIsPublic] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const token = useUserToken();
  const user = useUser();
  useEffect(() => {
    if (!token) {
      let status = false;
      PUBLIC_ENDPOINTS.map((path) => {
        if (pathname.includes(path)) {
          status = true;
        }
      });
      if (status === false) {
        setIsPublic(false);
        router.push('/auth/login');
      }
    }
    if (token && pathname === '/') {
      router.push('/home');
    }
  }, [token]);

  return (
    <>
      {token || isPublic ? (
        <Layout>
          <Navigation />
          <Layout>
            <Content
              style={{
                minHeight: 280,
                background: '#EEF3FA',
              }}
            >
              {children}
            </Content>
          </Layout>
          {user && (
            <>
              <Script>
                {`
    window.intercomSettings = {
      api_base: "https://api-iam.intercom.io",
      app_id: "jpy7r4cw",
      user_id: "${user?.id}", // User ID
      user_hash: "${user?.interComHash}",
      email: "${user?.email}",
      name:"${user?.firstname} ${user?.lastname}",
      phone:"${user?.phonenumber}",
      lead_category:"${user?.is_customer === false ? 'Lead' : 'User'}",
      customer_dashboard:"https://admin.chooseketamine.com/dashboard/customers/${user?.id}"
    };
  `}
              </Script>

              <Script>
                {`
    (function() {
      var w = window;
      var ic = w.Intercom;
      if (typeof ic === "function") {
        ic('reattach_activator');
        ic('update', w.intercomSettings);
      } else {
        var d = document;
        var i = function() { i.c(arguments); };
        i.q = [];
        i.c = function(args) { i.q.push(args); };
        w.Intercom = i;
        var l = function() {
          var s = d.createElement('script');
          s.type = 'text/javascript';
          s.async = true;
          s.src = 'https://widget.intercom.io/widget/jpy7r4cw';
          var x = d.getElementsByTagName('script')[0];
          x.parentNode.insertBefore(s, x);
        };
        if (document.readyState === 'complete') {
          l();
        } else if (w.attachEvent) {
          w.attachEvent('onload', l);
        } else {
          w.addEventListener('load', l, false);
        }
      }
    })();
  `}
              </Script>
            </>
          )}
        </Layout>
      ) : (
        <Layout>
          <Layout>
            <Content
              style={{
                minHeight: 280,
                background: 'white',
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      )}
      <></>
    </>
  );
};

export default MainLayout;
