import React, { useState } from 'react';
import { Button, Menu } from 'antd';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {
  AppstoreOutlined,
  UserAddOutlined,
  TwitterOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import ManageUser from './ManageUser/ManageUser';
import ManageHotel from './ManageHotel/ManageHotel';
import ManageTour from './ManageTour/ManageTour';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Quản lý', 'sub1', <SettingOutlined />, [
    getItem('Quản lý người dùng', 'quan-ly-nguoi-dung', <UserOutlined />),
    getItem('Quản lý tour', 'quan-ly-tours', <TwitterOutlined />),
    getItem('Quản lý khách sạn', 'quan-ly-khach-san', <HomeOutlined />),
  ]),
  getItem('Tạo mới', 'sub2', <AppstoreOutlined />, [
    getItem('Tạo mới người dùng', '9', <UserAddOutlined />),
    getItem('Tạo mới tour', '10', <TwitterOutlined />),
    getItem('Tạo mới khách sạn', '11', <HomeOutlined />),
  ]),
];

const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const onNavigate = (e) => {
    navigate(e.key);
  };
  return <div
    style={{
      display: 'flex'
    }}>
    <div
      style={{
        marginTop: '-43px',
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: '11px',
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
        style={{ minHeight: '80vh' }}
        onClick={onNavigate}
      />
    </div>
    <div>
      <Routes>
        <Route path="/quan-ly-khach-san" element={<ManageHotel />} />
        <Route path="/quan-ly-nguoi-dung" element={<ManageUser />} />
        <Route path="/quan-ly-tours" element={<ManageTour />} />
      </Routes>
    </div>
  </div>;
};

export default Admin;
