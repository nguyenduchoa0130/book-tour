import { LockOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input, Modal } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { UserSelectors } from '../../common/store/selectors';

import { Controller, useForm } from 'react-hook-form';
import styles from './styles.module.css';

const PersonalInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useSelector(UserSelectors.selectUser);
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      fullName: user.HoVaTen,
      phone: user.Sdt,
      password: '',
      confirmPassword: '',
      address: user.DiaChi,
    },
  });

  const resetForm = () => {
    reset({
      fullName: user.HoVaTen,
      phone: user.Sdt,
      password: '',
      confirmPassword: '',
      address: user.DiaChi,
    });
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSubmit = (data) => {
    console.log('data', data);
    resetForm();
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles['personal-info']}>
        <h2 className='pb-4 text-center text-uppercase'>Thông Tin Người dùng</h2>
        <div className='py-4 px-5 w-50 border rounded'>
          <div className='form-group'>
            <div className='flex-row-between'>
              <h6>Tài khoản:</h6>
              <span>{user.TenTaiKhoan}</span>
            </div>
          </div>
          <div className='form-group'>
            <div className='flex-row-between'>
              <h6>Mật khẩu:</h6>
              <span>********</span>
            </div>
          </div>
          <div className='form-group'>
            <div className='flex-row-between'>
              <h6>Họ và tên:</h6>
              <span>{user.HoVaTen}</span>
            </div>
          </div>
          <div className='form-group'>
            <div className='flex-row-between'>
              <h6>Số điện thoại:</h6>
              <span>{user.Sdt}</span>
            </div>
          </div>
          <div className='form-group'>
            <div className='flex-row-between'>
              <h6>Địa chỉ:</h6>
              <span>{user.DiaChi}</span>
            </div>
          </div>
          <div className='form-group text-center'>
            <Button type='primary' onClick={showModal}>
              Cập nhật
            </Button>
          </div>
        </div>
      </div>
      <Modal
        open={isModalOpen}
        title='Cập nhật thông tin'
        centered
        onCancel={handleCancel}
        footer={null}
        afterClose={resetForm}>
        <Form
          name='registerForm'
          layout='vertical'
          onFinish={handleSubmit(onSubmit)}
          initialValues={{ remember: true }}>
          <Form.Item
            label='Mật khẩu'
            name='password'
            validateStatus={errors.password ? 'error' : ''}
            help={errors.password && errors.password.message}>
            <Controller
              name='password'
              control={control}
              rules={{ required: 'Vui lòng nhập mật khẩu' }}
              render={({ field }) => (
                <Input.Password
                  {...field}
                  placeholder='Mật khẩu'
                  prefix={<LockOutlined />}
                  size='large'
                />
              )}
            />
          </Form.Item>

          <Form.Item
            label='Nhập lại mật khẩu'
            name='confirmPassword'
            validateStatus={errors.confirmPassword ? 'error' : ''}
            help={errors.confirmPassword && errors.confirmPassword.message}>
            <Controller
              name='confirmPassword'
              control={control}
              rules={{
                required: 'Vui lòng nhập lại mật khẩu',
                validate: (val) => {
                  if (watch('password') !== val) {
                    return 'Mật khẩu không khớp';
                  }
                },
              }}
              render={({ field }) => (
                <Input.Password
                  {...field}
                  prefix={<LockOutlined />}
                  size='large'
                  placeholder='Nhập lại mật khẩu'
                />
              )}
            />
          </Form.Item>

          <Form.Item
            label='Họ và tên'
            name='fullName'
            validateStatus={errors.fullName ? 'error' : ''}
            help={errors.fullName && errors.fullName.message}>
            <Controller
              name='fullName'
              control={control}
              rules={{ required: 'Vui lòng nhập họ và tên' }}
              render={({ field }) => (
                <Input {...field} prefix={<UserOutlined />} size='large' placeholder='Họ và tên' />
              )}
            />
          </Form.Item>

          <Form.Item label='Địa chỉ' name='address'>
            <Controller
              name='address'
              control={control}
              render={({ field }) => (
                <Input.TextArea {...field} rows={4} size='large' placeholder='Địa chỉ' />
              )}
            />
          </Form.Item>

          <Form.Item
            label='Số điện thoại'
            name='phone'
            validateStatus={errors.phone ? 'error' : ''}
            help={errors.phone && errors.phone.message}>
            <Controller
              name='phone'
              control={control}
              rules={{ required: 'Vui lòng nhập số điện thoại' }}
              render={({ field }) => (
                <Input
                  {...field}
                  prefix={<PhoneOutlined />}
                  size='large'
                  placeholder='Số điện thoại'
                />
              )}
            />
          </Form.Item>

          <div className='d-flex justify-content-end'>
            <Button onClick={handleCancel} className='mr-2'>
              Huỷ
            </Button>
            <Button type='primary' htmlType='submit'>
              Cập nhật
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default PersonalInfo;
