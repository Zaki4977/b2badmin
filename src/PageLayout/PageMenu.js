import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined,DashboardOutlined ,ProductOutlined} from '@ant-design/icons';
import { Menu } from 'antd';

const items = [
 
  {
    key: '1',
    icon: <DashboardOutlined />,
    label: (<a href="/dashboard">Dashboard</a>),
  },
  {
    key: '2',
    icon: <DashboardOutlined />,
    label: 'Management',
    children: [
      {
        key: 'clientmanagement',
        icon: <ProductOutlined />,
        label: (<a href="/clientmanagement" style={{ fontFamily: 'Roboto Flex, serif', fontWeight: '600' }}>Client</a>),
      },
      {
        key: 'subclient',
        icon: <SettingOutlined />,
        label: (<a href="/subclient" style={{ fontFamily: 'Roboto Flex, serif', fontWeight: '600' }}>SubClient</a>),
      },
      {
        key: 'contractmanagement',
        icon: <SettingOutlined />,
        label: (<a href="/contractmanagement" style={{ fontFamily: 'Roboto Flex, serif', fontWeight: '600' }}>Contract</a>),
      },
      {
        key: 'ordermanagement',
        icon: <SettingOutlined />,
        label: (<a href="/ordermanagement" style={{ fontFamily: 'Roboto Flex, serif', fontWeight: '600' }}>Order</a>),
      },
      {
        key: 'tenentmanage',
        icon: <SettingOutlined />,
        label: (<a href="/tenentmanage" style={{ fontFamily: 'Roboto Flex, serif', fontWeight: '600' }}>Tenant</a>),
      },
      {
        key: 'subscriptionmanage',
        icon: <SettingOutlined />,
        label: (<a href="/subscriptionmanage" style={{ fontFamily: 'Roboto Flex, serif', fontWeight: '600' }}>Subscription</a>),
      },
      {
        key: 'userlist',
        icon: <DashboardOutlined />,
        label: (<a href="/userlist" style={{ fontFamily: 'Roboto Flex, serif', fontWeight: '600' }}>User</a>),
      },
      {
        key: 'offermanagement',
        icon: <DashboardOutlined />,
        label: (<a href="/offermanagement" style={{ fontFamily: 'Roboto Flex, serif', fontWeight: '600' }}>Offer</a>),
      },
      {
        key: 'rolemanagement',
        icon: <DashboardOutlined />,
        label: (<a href="/rolemanagement" style={{ fontFamily: 'Roboto Flex, serif', fontWeight: '600' }}>Role</a>),
      },
      {
        key: 'enquerymanagement',
        icon: <DashboardOutlined />,
        label: (<a href="/enquerymanagement" style={{ fontFamily: 'Roboto Flex, serif', fontWeight: '600' }}>Enquery</a>),
      },
      {
        key: 'abandonedCard',
        icon: <DashboardOutlined />,
        label: (<a href="/abandonedCard" style={{ fontFamily: 'Roboto Flex, serif', fontWeight: '600' }}>Abandoned Card</a>),
      },
      {
        key: 'loginstats',
        icon: <DashboardOutlined />,
        label: (<a href="/loginstats" style={{ fontFamily: 'Roboto Flex, serif', fontWeight: '600' }}>Login Summary</a>),
      },
    ],
  },
  {
    key: '3',
    icon: <DashboardOutlined />,
    label: 'Products',
    children: [
      {
        key: 'productcategory',
        icon: <DashboardOutlined />,
        label: (<a href="/productcategory" style={{ fontFamily: 'Roboto Flex, serif', fontWeight: '600' }}>Product Category</a>),
      },
      {
        key: 'products',
        icon: <ProductOutlined />,
        label: (<a href="/products" style={{ fontFamily: 'Roboto Flex, serif', fontWeight: '600' }}>Products</a>),
      },
      {
        key: 'productprice',
        icon: <ProductOutlined />,
        label: (<a href="/productprices" style={{ fontFamily: 'Roboto Flex, serif', fontWeight: '600' }}>Product Prices</a>),
      },
      //  {
      //   key: 'productconfig',
      //   icon: <ProductOutlined />,
      //   label: (<a href="/productconfig" style={{ fontFamily: 'Roboto Flex, serif', fontWeight: '600' }}>Product Configuration</a>),
      // },
    ],
  },
];


const getLevelKeys = (menuItems) => {
  const keyLevelMap = {};
  const traverseMenu = (items, level = 1) => {
    items.forEach((item) => {
      if (item.key) keyLevelMap[item.key] = level;
      if (item.children) traverseMenu(item.children, level + 1);
    });
  };
  traverseMenu(menuItems);
  return keyLevelMap;
};

const levelKeys = getLevelKeys(items);

const App = () => {
  const [stateOpenKeys, setStateOpenKeys] = useState(['2', '23']);

  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find((key) => !stateOpenKeys.includes(key));

    if (currentOpenKey) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);

      setStateOpenKeys(
        openKeys
          .filter((_, index) => index !== repeatIndex)
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]),
      );
    } else {
      setStateOpenKeys(openKeys);
    }
  };

  return (
    <Menu
      mode="inline"
      theme='dark'
      defaultSelectedKeys={['231']}
      openKeys={stateOpenKeys}
      onOpenChange={onOpenChange}
      style={{
        width: 245,
         
      }}
      className='aligned-menu'
      items={items}
    />
  );
};

export default App;
