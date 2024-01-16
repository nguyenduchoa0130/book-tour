import {
  CalendarOutlined,
  CompassOutlined,
  HomeOutlined,
  PlusOutlined,
  TableOutlined,
  UserAddOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './styles.module.css';

const menuItems = [
  {
    label: <NavLink to=''>Trang chủ</NavLink>,
    icon: <HomeOutlined />,
    key: '/admin',
  },
  {
    label: 'Quản lý người dùng',
    icon: <UserOutlined />,
    key: '/admin/nguoi-dung',
    children: [
      {
        label: <NavLink to='nguoi-dung/danh-sach'>Danh sách người dùng</NavLink>,
        key: '/admin/nguoi-dung/danh-sach',
        icon: <TableOutlined />,
      },
      {
        label: <NavLink to='nguoi-dung/tao-moi'>Tạo tài khoản</NavLink>,
        key: '/admin/nguoi-dung/tao-moi',
        icon: <UserAddOutlined />,
      },
    ],
  },
  {
    label: 'Quản lý tour',
    icon: <CompassOutlined />,
    key: '/admin/tours',
    children: [
      {
        label: <NavLink to='tours/danh-sach'>Danh sách tour</NavLink>,
        key: '/admin/tours/danh-sach',
        icon: <TableOutlined />,
      },
      {
        label: <NavLink to='tours/tao-moi'>Tạo tour</NavLink>,
        key: '/admin/tours/tao-moi',
        icon: <PlusOutlined />,
      },
    ],
  },
  {
    label: <NavLink to='quan-li-dat-tour'>Quản lý đặt tour</NavLink>,
    icon: <CalendarOutlined />,
    key: '/admin/quan-li-dat-tour',
  },
];

const Admin = () => {
  return (
    <>
      <div className='row w-100'>
        <div className='col-3'>
          <Menu
            mode='inline'
            items={menuItems}
            className={styles['admin-menu']}
            defaultSelectedKeys={['']}
          />
        </div>
        <div className='col-9'>
          <div className={styles['admin-content']}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
