import { DeleteOutlined, EditOutlined, InfoOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, Space, Table, Tooltip, Typography } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { userServices } from '../../../common/services';
import { GlobalActions } from '../../../common/store/actions';
import AlertUtil from '../../../common/utils/alert.util';

const SaleListUsers = () => {
  const [users, setUsers] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [updatingUser, setUpdatingUser] = useState(null);
  const dispatch = useDispatch();
  const {
    reset,
    watch,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ defaultValues: { password: '', passwordConfirm: '' } });

  const deleteUser = async (user) => {
    const { isConfirmed } = await AlertUtil.showConfirm(
      'Xoá Tài Khoản',
      `Bạn có chắc là muốn xoá người dùng ${user.TenTaiKhoan} không?`,
    );
    if (isConfirmed) {
      try {
        dispatch(GlobalActions.showLoading());
        await userServices.deleteUser(user.id);
        getData();
      } catch (error) {
        AlertUtil.showError(error?.response?.data?.message || error.message);
      } finally {
        dispatch(GlobalActions.hideLoading());
      }
    }
  };

  const openUpdateUserDialog = async (user) => {
    setIsOpen(true);
    setUpdatingUser(user);
  };

  const cancelUpdateUser = () => {
    setIsOpen(false);
    setUpdatingUser(null);
    reset({ password: '', passwordConfirm: '' });
  };

  const updateUser = async (value) => {
    try {
      dispatch(GlobalActions.showLoading());
      await userServices.updateUser(updatingUser.id, { password: value.password });
      getData();
      cancelUpdateUser();
    } catch (error) {
      AlertUtil.showError(error?.response?.data?.message || error.message);
    } finally {
      dispatch(GlobalActions.hideLoading());
    }
  };

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
        <div className='d-flex justify-content-end align-items-center'>
          <Space size='small'>
            <Tooltip title='Lịch sử đặt tour'>
              <NavLink to={`/sale/nguoi-dung/lich-su-dat-tour/${record.id}`}>
                <Button icon={<InfoOutlined />} shape='circle' className='flex-row-center' />
              </NavLink>
            </Tooltip>
            <Tooltip title='Sửa'>
              <Button
                icon={<EditOutlined />}
                shape='circle'
                type='primary'
                className='flex-row-center'
                onClick={() => openUpdateUserDialog(record)}
              />
            </Tooltip>
            <Tooltip title='Xoá'>
              <Button
                icon={<DeleteOutlined />}
                shape='circle'
                type='primary'
                danger
                className='flex-row-center'
                onClick={() => deleteUser(record)}
              />
            </Tooltip>
          </Space>
        </div>
      ),
    },
  ];

  const getData = async () => {
    try {
      dispatch(GlobalActions.showLoading());
      const data = await userServices.getUsers();
      setUsers(data[3]?.users || []);
    } catch (error) {
      AlertUtil.showError(error?.response?.data?.message || error.message);
    } finally {
      dispatch(GlobalActions.hideLoading());
    }
  };

  const displayUsers = useMemo(() => {
    if (!keyword.trim()) {
      return users;
    }
    return users.filter((u) => {
      const info = [u.TenTaiKhoan, u.HoVaTen, u.Sdt, u.id];
      return info.some((item) =>
        `${item}`?.toLowerCase()?.trim().includes(keyword.trim().toLowerCase()),
      );
    });
  }, [keyword, users]);

  useEffect(() => {
    getData();
  }, []);

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
      <Table columns={colConfigs} dataSource={displayUsers} rowKey='id' />
      <Modal
        centered
        open={isOpen}
        footer={null}
        onCancel={cancelUpdateUser}
        title={`CẬP NHẬT NGƯỜI DÙNG #${updatingUser?.id}`}
        okText='Cập nhật'
        cancelText='Đóng'>
        <Form layout='vertical' onFinish={handleSubmit(updateUser)}>
          <Form.Item
            label='Mật khẩu'
            name='password'
            validateStatus={errors.password ? 'error' : ''}
            help={
              errors.password && (
                <Typography.Text type='danger'>{errors.password.message}</Typography.Text>
              )
            }>
            <Controller
              name='password'
              control={control}
              rules={{ required: 'Vui lòng nhập mật khẩu' }}
              render={({ field }) => (
                <Input.Password {...field} size='large' placeholder='Mật khẩu' />
              )}
            />
          </Form.Item>

          <Form.Item
            label='Xác nhận lại mật khẩu'
            name='passwordConfirm'
            validateStatus={errors.password ? 'error' : ''}
            help={
              errors.passwordConfirm && (
                <Typography.Text type='danger'>{errors.passwordConfirm.message}</Typography.Text>
              )
            }>
            <Controller
              name='passwordConfirm'
              control={control}
              rules={{
                validate: (value) => {
                  if (value !== watch('password')) {
                    return 'Mật khẩu xác nhận không đúng';
                  }
                  return null;
                },
              }}
              render={({ field }) => (
                <Input.Password {...field} size='large' placeholder='Xác nhận lại mật khẩu' />
              )}
            />
          </Form.Item>

          <div className='pt-2 d-flex justify-content-between align-items-center'>
            <Button size='large' htmlType='button' onClick={cancelUpdateUser}>
              Đóng
            </Button>
            <Button size='large' type='primary' htmlType='submit' disabled={!isValid}>
              Cập nhật
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default SaleListUsers;
