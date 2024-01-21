import { DeleteOutlined, EditOutlined, InfoOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table, Tabs, Tooltip, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userServices } from '../../../common/services';
import { GlobalActions } from '../../../common/store/actions';
import AlertUtil from '../../../common/utils/alert.util';
import { RolesEnum } from '../../../common/enums';
import { NavLink } from 'react-router-dom';

const ListUsers = () => {
  const [tabs, setTabs] = useState();
  const [users, setUsers] = useState([]);
  const [displayUsers, setDisplayUsers] = useState([]);
  const [defaultTab, setDefaultTab] = useState();
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
      title: 'Email',
      dataIndex: 'Email',
      key: 'email',
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
          {record.VaiTro === RolesEnum.KhachHang && (
            <Tooltip title='Xem lịch sử đặt tour'>
              <NavLink to={`/admin/nguoi-dung/lich-su-dat-tour/${record.id}`}>
                <Button icon={<InfoOutlined />} shape='circle' className='flex-row-center' />
              </NavLink>
            </Tooltip>
          )}
          <Tooltip title='Sửa'>
            <Button
              icon={<EditOutlined />}
              shape='circle'
              type='primary'
              className='flex-row-center'
            />
          </Tooltip>
          <Tooltip title='Xoá'>
            <Button
              icon={<DeleteOutlined />}
              shape='circle'
              type='primary'
              danger
              className='flex-row-center'
            />
          </Tooltip>
        </Space>
      ),
    },
  ];
  const [keyword, setKeyword] = useState('');

  const handleTabChange = (tab) => {
    setDefaultTab(tab);
    setKeyword('');
  };

  useEffect(() => {
    if (users.length) {
      const cloneUser = JSON.parse(JSON.stringify(users));
      const buildDisplayUsers = cloneUser.map((item) => {
        if (item.role === defaultTab) {
          item.users = item.users.filter((u) => {
            const fullName = u.HoVaTen.toLowerCase();
            const username = u.TenTaiKhoan.toLowerCase();
            const keywordLowercase = keyword.toLowerCase();
            return (
              !keyword.trim() ||
              fullName.includes(keywordLowercase) ||
              username.includes(keywordLowercase)
            );
          });
        }
        return item;
      });
      setDisplayUsers(buildDisplayUsers);
    }
  }, [users, keyword, defaultTab]);

  useEffect(() => {
    const getData = async () => {
      try {
        dispatch(GlobalActions.showLoading());
        const data = await userServices.getUsers();
        setUsers(data);
      } catch (error) {
        AlertUtil.showError(error?.response?.data?.message || error.message);
      } finally {
        dispatch(GlobalActions.hideLoading());
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (displayUsers.length) {
      const items = displayUsers.map((item, idx) => {
        return {
          key: item.role,
          label: item.role,
          children: <Table columns={colConfigs} dataSource={item.users} rowKey='id' />,
        };
      });
      setTabs(items);
    }
  }, [displayUsers]);

  return (
    <>
      <Typography.Title className='text-uppercase'>Danh sách người dùng</Typography.Title>
      <hr />
      <div className='py-2'>
        <Input
          prefix={<SearchOutlined />}
          size='large'
          placeholder='Tìm kiếm'
          allowClear
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
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
