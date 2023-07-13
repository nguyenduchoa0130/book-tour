import React from 'react';
import './style.css'
import { Space, Table, Button, Input } from 'antd';

const ManageUser = () => {
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Họ và tên',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Loại người dùng',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button>Sửa</Button>
          <Button danger>Xóa</Button>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      id: '1',
      name: "Nguyễn",
      phone: '123456',
      role: 'Khách hàng',
    },
    {
      key: '2',
      id: '2',
      name: "Đức",
      phone: '09876',
      role: 'Hướng dẫn viên',
    },
    {
      key: '3',
      id: '3',
      name: "Hòa",
      phone: '23456',
      role: 'Quản lý',
    },
  ];
  return (
    <div className='manage'>
      <div className='title-manage'>Quản lý người dùng</div>
      <div>Tìm kiếm người dùng: <Input placeholder="Nhập tên người dùng muốn tìm kiếm" style={{ width: '500px', marginLeft: '20px' }} /></div>
      <div style={{ width: '1300px', marginTop: '30px' }}>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default ManageUser;
