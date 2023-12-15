'use client';
import Image from 'next/image';
import ChooseLife from '@/assets/svgs/logo-blue.svg';
import { Menu, Grid, Layout, Card, Button } from 'antd';
import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

// New icon imports
import HomeIcon from '../icons/HomeIcon';
import PersonIcon from '../icons/PersonIcon';
import PeopleIcon from '../icons/PeopleIcon';
import BillingIcon from '../icons/BillingIcon';
import HelpIcon from '../icons/HelpIcon';
import ContactSupportIcon from '../icons/ContactSupportIcon';
import LogoutIcon from '../icons/LogoutIcon';

// import { useUserToken } from '@/context/userContext';
import tokenService from '@/services/token.service';
import { toast } from 'react-toastify';

const { useBreakpoint } = Grid;

const { Sider } = Layout;

const Navigation = () => {
  const router = useRouter();
  const screens = useBreakpoint();
  // const token = useUserToken();
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
      label: 'Group Circles',
      path: '/group-circles',
    },
    {
      key: 4,
      icon: <BillingIcon />,
      label: 'Billing',
      path: '/billing',
    },
    {
      key: 5,
      icon: <HelpIcon />,
      label: 'FAQs',
      path: '/faq',
    },
    {
      key: 6,
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

  // Add custom styles for selected item
  const styledMenuItems = menuItems.map((item) => {
    const isSelected = item.key === selectedKey;

    const iconProps = isSelected
      ? { fill: 'black', stroke: 'black' }
      : { fill: '#949494', stroke: '#949494' };

    const additionalStyles = {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
    };

    return {
      ...item,
      className: 'custom-menu-item', // Apply the custom class
      style: {
        ...additionalStyles,
        ...(isSelected ? { color: '#000000', fontWeight: 'bold' } : {}),
      },
      icon: React.cloneElement(item.icon, iconProps),
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
        <Sider
          style={{
            background: '#FFFFFF',
            minHeight: '100vh',
            maxHeight: 'fit-content',
          }}
          trigger={null}
        >
          <div className="flex justify-center">
            <Image
              priority={true}
              alt={'logo'}
              src={ChooseLife}
              style={{ margin: 25, width: 155, height: 'auto' }}
            />
          </div>
          <div>
            <Menu
              style={{
                background: '#ffffff',
                fontSize: '16px',
                fontWeight: '700',
                color: '#949494',
              }}
              onChange={(a) => {
                console.log('onChange for menu', a);
              }}
              mode="inline"
              selectedKeys={[selectedKey.toString()]}
              items={styledMenuItems}
            />
            <Button
              type="text"
              className="black-color font-weight-700"
              onClick={() => {
                tokenService.deleteLocalAccessToken();
                router.push('/auth/login');
                toast.success('Logout Successfully!');
              }}
              style={{
                margin: 'auto',
                position: 'absolute',
                bottom: '20px',
                left: '20%',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '16px',
              }}
            >
              <LogoutIcon />
              Logout
            </Button>
          </div>
        </Sider>
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
