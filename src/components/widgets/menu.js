'use client';
import Image from 'next/image';
import ChooseLife from '@/assets/logo.webp';
import { Grid, Layout, Button } from 'antd';
import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

import HomeIcon from '@mui/icons-material/HomeOutlined';
import PersonIcon from '@mui/icons-material/PersonOutlined';
import HelpIcon from '@mui/icons-material/HelpOutlined';
import MessageIcon from '@mui/icons-material/MessageOutlined';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToAppOutlined';

import { useUserToken } from '@/context/userContext';
import tokenService from '@/services/token.service';
import { toast } from 'react-toastify';
import MenuItem from '@/components/widgets/menu-item';

const { useBreakpoint } = Grid;

const { Sider } = Layout;

const Menu = () => {
  const router = useRouter();
  const screens = useBreakpoint();
  const token = useUserToken();
  const path = usePathname();

  const [selectedKey, setSelectedKey] = useState(1);

  const menuItems = [
    {
      key: 1,
      icon: <HomeIcon style={{ display: 'flex' }} />,
      label: 'Home',
      path: '/home',
    },
    {
      key: 2,
      icon: <PersonIcon style={{ display: 'flex' }} />,
      label: 'Integration',
      path: '/integration',
    },
    {
      key: 3,
      icon: <PeopleIcon style={{ display: 'flex' }} />,
      label: 'Group Circles',
      path: '/group-integration',
    },
    {
      key: 4,
      icon: <HelpIcon style={{ display: 'flex' }} />,
      label: 'FAQs',
      path: '/faq',
    },
    {
      key: 5,
      icon: <MessageIcon style={{ display: 'flex' }} />,
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
    <Sider
      style={{
        backgroundColor: '#FFFFFF',
        height: '100vh',
      }}
      trigger={null}
    >
      <div className="flex justify-center">
        <Image
          priority={true}
          alt={'logo'}
          src={ChooseLife}
          style={{ margin: 25, width: 90, height: 'auto' }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '1em' }}>
        {menuItems.map((item) => (
          <MenuItem key={item.key} item={item} selectedKey={selectedKey} />
        ))}

        <div style={{ flexGrow: 1, display: 'flex', alignItems: 'flex-end', padding: '2em 0' }}>
          <MenuItem
            item={{
              key: -1,
              icon: <ExitToAppIcon style={{ display: 'flex' }} />,
              label: 'Logout',
              onClick: () => {
                tokenService.deleteLocalAccessToken();
                router.push('/auth/login');
                toast.success('Logout Successfully!');
              },
            }}
            isAlwaysBold
          />
        </div>
      </div>
    </Sider>
  );
};

export default Menu;
