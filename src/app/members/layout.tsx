'use client';

import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';

const { Header, Sider, Content } = Layout;

export default function MemberLayout({ children }: { readonly children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: '100vh', overflow: 'hidden' }}>
      {/* Sidebar */}
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="custom-sider"
      >
        <div className="demo-logo-vertical" />

        {/* เมนูด้านบน */}
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            { key: '1', icon: <UserOutlined />, label: 'nav 1' },
            { key: '2', icon: <VideoCameraOutlined />, label: 'nav 2' },
            { key: '3', icon: <UploadOutlined />, label: 'nav 3' },
          ]}
        />

        {/* เมนูด้านล่าง */}
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          items={[
            { key: '4', icon: <UserOutlined />, label: 'nav 4' },
            { key: '5', icon: <VideoCameraOutlined />, label: 'nav 5' },
            { key: '6', icon: <UploadOutlined />, label: 'nav 6' },
            { key: '7', icon: <UploadOutlined />, label: 'nav 6' },
            { key: '8', icon: <UploadOutlined />, label: 'nav 6' },
            { key: '9', icon: <UploadOutlined />, label: 'nav 6' },
            { key: '10', icon: <UploadOutlined />, label: 'nav 6' },
          ]}
          className="bottom-menu"
        />
      </Sider>



      {/* Main Layout */}
      <Layout style={{ height: '100vh', overflow: 'hidden' }}>
        {/* Header */}
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: '16px', width: 64, height: 64 }}
          />
        </Header>

        {/* Content */}
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            flex: 1, // ให้ content ขยายเต็มพื้นที่
            minHeight: 0, // ป้องกันการขยายเกิน
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflow: 'auto', // ให้มี scroll เฉพาะถ้าจำเป็น
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
