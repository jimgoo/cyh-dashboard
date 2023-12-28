'use client';
import Image from 'next/image';
import ChooseLife from '@/assets/logo.webp';
import { Grid, Layout, Card, Button } from 'antd';
import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import HelpIcon from '@mui/icons-material/Help';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import PeopleIcon from '@mui/icons-material/People';

import { useUserToken } from '@/context/userContext';
import tokenService from '@/services/token.service';
import { toast } from 'react-toastify';

import Menu from '@/components/widgets/menu';

const { useBreakpoint } = Grid;

const { Sider } = Layout;

const Navigation = ({ collapsed }) => {
  const router = useRouter();
  const screens = useBreakpoint();
  const token = useUserToken();
  const path = usePathname();

  const [selectedKey, setSelectedKey] = useState(1);

  const menuItems = [
    {
      key: 1,
      icon: <HomeIcon />,
      label: 'Home',
      path: '/home',
    },
    {
      key: 2,
      icon: <PersonIcon />,
      label: 'Integration',
      path: '/integration',
    },
    {
      key: 3,
      icon: <PeopleIcon />,
      label: 'Group Integration',
      path: '/group-integration',
    },
    {
      key: 4,
      icon: <HelpIcon />,
      label: 'FAQs',
      path: '/faq',
    },
    {
      key: 5,
      icon: <ContactSupportIcon />,
      label: 'Contact',
      path: '/contact',
    },
  ];

  // Add path to menu items
  menuItems.forEach((item) => {
    item.onClick = () => {
      router.push(item.path);
      setSelectedKey(item.key);
    };
  });

  useEffect(() => {
    // Set the initial state based on the current pathname
    const item = menuItems.find((item) => item.path === path);
    if (item) {
      console.log(`Setting selected key to ${item.key}`);
      setSelectedKey(item.key);
    }
  }, []);

  return (
    <>
      {!screens.xs ? (
        <Menu />
      ) : (
        <Card
          style={{
            position: 'fixed',
            width: '100%',
            bottom: '1px',
            zIndex: '10',
            background: 'white',
            alignItems: 'center',
          }}
          size={'small'}
        >
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            {menuItems.map((e, index) => {
              return (
                <div
                  onClick={() => e.onClick()}
                  key={index}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                  <span>{e.icon}</span>
                  <span style={{ color: selectedKey === index + 1 ? '#4261EF' : '#9E9E9E' }}>
                    {e.label}
                  </span>
                </div>
              );
            })}
          </div>
        </Card>
      )}
    </>
  );
};

export default Navigation;
