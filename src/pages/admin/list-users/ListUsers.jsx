import { DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AdminActions } from '../../../common/store/actions';
import { AdminSelectors } from '../../../common/store/selectors';

const ListUsers = () => {
  const [tabs, setTabs] = useState();
  const [defaultTab, setDefaultTab] = useState();
  const users = useSelector(AdminSelectors.selectUsers);
  const dispatch = useDispatch();
  const colConfigs = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Tài khoản',
      dataIndex: 'TenTaiKhoan',
      key: 'TenTaiKhoan',
    },
    {
      title: 'Họ và tên',
      dataIndex: 'HoVaTen',
      key: 'ho-va-ten',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'Sdt',
      key: 'sdt',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'DiaChi',
      key: 'DiaChi',
    },
    {
      title: '',
      key: 'action',
      render: (_, record) => (
        <Space size='middle'>
          <Button
            icon={<EditOutlined />}
            shape='circle'
            type='primary'
            size='large'
            className='flex-row-center'
          />
          <Button
            icon={<DeleteOutlined />}
            shape='circle'
            type='primary'
            danger
            size='large'
            className='flex-row-center'
          />
        </Space>
      ),
    },
  ];

  const handleTabChange = (e) => {
    setDefaultTab(e.key);
  };

  useEffect(() => {
    dispatch(AdminActions.getUsers());
  }, []);

  useEffect(() => {
    const items = users.map((item, idx) => {
      if (!idx) {
        setDefaultTab(item.role);
      }
      return {
        key: item.role,
        label: item.role,
        children: <Table columns={colConfigs} dataSource={item.users} />,
      };
    });
    setTabs(items);
  }, [users]);

  return (
    <>
      <h2>Danh sách người dùng</h2>
      <hr />
      <div className='py-2'>
        <Input prefix={<SearchOutlined />} size='large' placeholder='Tìm kiếm' />
      </div>
      <Tabs
        defaultActiveKey={defaultTab}
        items={tabs}
        size='middle'
        centered
        onChange={handleTabChange}
      />
    </>
  );
};

export default ListUsers;
