import React, { useState } from "react";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  DashboardOutlined,
  NodeCollapseOutlined,
  NotificationOutlined,
  ProductOutlined,
  SettingOutlined,
  ShopOutlined,
  SmileOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import "../App.css";

import { Layout, Menu, theme, Image, Badge, Avatar, notification, Dropdown, Table } from "antd";
import PageMenu from "./PageMenu";
const { Header, Content, Footer, Sider } = Layout;

const PageSider = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const siderStyle = {
    overflow: "auto",
    height: "100vh",
    position: "fixed",
    left: 0,
    top: 0,
    bottom: 0,
    // backgroundColor: "white",
    transition: "all 0.3s ease",
    zIndex: 1000,
  };

  

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const dropdownItems = [
    {
      key: "1",
      label: (
        <a rel='noopener noreferrer' href='/myProfile'>
          My Profile
        </a>
      ),
      icon: <SmileOutlined/>,
    },
    {
      key: "2",
      label: (
        <a rel='noopener noreferrer' href='/login'>
          Logout
        </a>
      ),
      // disabled: true,
    },
    // {
    //   key: "3",
    //   label: <a rel='noopener noreferrer'>Logout</a>,
    //   // disabled: true,
    // },
  ];

  return (
    <Layout hasSider>
      <Sider style={siderStyle} width={250} collapsedWidth={100} collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <img src='/admin-logo.png' style={{ width: "200px", height: "70px",marginTop:'10px' }} />
        <div className='demo-logo-vertical' />
        <PageMenu/>
      </Sider>
      <Layout
        style={{
          marginLeft: collapsed ? 80 : 250,
          // transition: "all 0.3s ease",
          // height:"100vh"
        }}
      >
        <div>
        <Header
          style={{
            position: "fixed",
            top: 0,
            width: `calc(100% - ${collapsed ? 80 : 250}px)`,
            zIndex: 1000,
            backgroundColor: "lightblue",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingInline: 20,
          }}
        >
          <div style={{ paddingRight: "5%" }}>
            <Badge count={10}>
              <Avatar icon={<NotificationOutlined />} />
            </Badge>
            <span style={{ paddingLeft: "20px" }}>
              <Dropdown menu={{ items: dropdownItems }}  trigger={["hover"]}   overlayStyle={{ width: 200 }} // Set the dropdown width
              >
                <Avatar icon={<UserOutlined />} />
              </Dropdown>
            </span>
            <span style={{ paddingLeft: "10px" }}>Admin Name</span>
          </div>
        </Header>
        </div>
        <div>
        <Content
          style={{
            margin: "100px 30px 0", 
            padding: 16,
            background: "#fff",
            overflow: "auto",
            borderRadius:'10px', 
            boxShadow:'inherit',
            // backgroundColor:'#f5f5f5;'
          }}
        >
          {children}
        </Content>
        </div>
      </Layout>
    </Layout>
  );
};

export default PageSider;
