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
import ManageTour from './ManageTour/ManageTour';
import ManageTourer from './ManageTourer/ManageTourer';
import AddUser from './AddUser/AddUser';
import AddTour from './AddTour/AddTour';
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
    getItem('Quản lý danh sách đặt tour', 'quan-ly-danh-sach-dat-tour', <HomeOutlined />),
  ]),
  getItem('Tạo mới', 'sub2', <AppstoreOutlined />, [
    getItem('Tạo mới người dùng', 'them-nguoi-dung', <UserAddOutlined />),
    getItem('Tạo mới tour', 'them-tours', <TwitterOutlined />),
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
        <Route path="/quan-ly-danh-sach-dat-tour" element={<ManageTourer />} />
        <Route path="/quan-ly-nguoi-dung" element={<ManageUser />} />
        <Route path="/quan-ly-tours" element={<ManageTour />} />
        <Route path="/them-nguoi-dung" element={<AddUser />} />
        <Route path="/them-tours" element={<AddTour />} />
      </Routes>
    </div>
  </div>;
};

export default Admin;
