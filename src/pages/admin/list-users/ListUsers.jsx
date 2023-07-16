import { SearchOutlined } from '@ant-design/icons';
import { Input, Table } from 'antd';
import React from 'react';

const colConfigs = [
  {
    title: '#',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Họ và tên',
    dataIndex: 'HoVaTen',
    key: 'ho-va-ten',
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'Sdt',
  },
];

const ListUsers = () => {
  return (
    <>
      <h2>Danh sách người dùng</h2>
      <hr />
      <div className='py-2'>
        <Input prefix={<SearchOutlined />} size='large' placeholder='Tìm kiếm' />
      </div>
      <Table bordered columns={colConfigs} dataSource={[]} />
    </>
  );
};

export default ListUsers;
