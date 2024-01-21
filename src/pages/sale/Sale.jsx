import {
  CompassOutlined,
  HomeOutlined,
  TableOutlined,
  UserOutlined,
  UserAddOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './styles.module.css';

const menuItems = [
  {
    label: <NavLink to=''>Trang chủ</NavLink>,
    icon: <HomeOutlined />,
    key: '/sale',
  },
  {
    label: 'Quản lý người dùng',
    icon: <UserOutlined />,
    key: '/sale/nguoi-dung',
    children: [
      {
        label: <NavLink to='nguoi-dung/danh-sach'>Danh sách người dùng</NavLink>,
        key: '/sale/nguoi-dung/danh-sach',
        icon: <TableOutlined />,
      },
      {
        label: <NavLink to='nguoi-dung/tao-moi'>Tạo tài khoản</NavLink>,
        key: '/sale/nguoi-dung/tao-moi',
        icon: <UserAddOutlined />,
      },
    ],
  },
  {
    label: 'Quản lý tour',
    icon: <CompassOutlined />,
    key: '/sale/tours',
    children: [
      {
        label: <NavLink to='tours/danh-sach'>Danh sách tour</NavLink>,
        key: '/sale/tours/danh-sach',
        icon: <TableOutlined />,
      },
    ],
  },
];

const Sale = () => {
  return (
    <>
      <div className='row w-100'>
        <div className='col-3'>
          <Menu
            mode='inline'
            items={menuItems}
            className={styles['sale-menu']}
            defaultSelectedKeys={['']}
          />
        </div>
        <div className='col-9'>
          <div className={styles['sale-content']}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sale;
