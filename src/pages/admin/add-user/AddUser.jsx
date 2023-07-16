import { LockOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Typography } from 'antd';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

const AddUser = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: '',
      fullName: '',
      address: '',
      phone: '',
      typeOfUser: null,
    },
  });

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <>
      <Typography.Title>Tạo tài khoản</Typography.Title>
      <hr />
      <Form name='addUserForm' layout='vertical' onFinish={handleSubmit(onSubmit)}>
        <Form.Item
          label='Tên đăng nhập'
          name='username'
          validateStatus={errors.username ? 'error' : ''}
          help={errors.username && errors.username.message}>
          <Controller
            name='username'
            control={control}
            rules={{ required: 'Vui lòng nhập tên đăng nhập' }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder='Tên đăng nhập'
                prefix={<UserOutlined />}
                size='large'
              />
            )}
          />
        </Form.Item>

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

        <Form.Item label='Loại người dùng' name='typeOfUser'>
          <Controller
            name='typeOfUser'
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Select size='large' placeholder='Chọn loại người dùng' />}
          />
        </Form.Item>

        <Form.Item className='pt-1'>
          <Button type='primary' htmlType='submit' size='large' className='w-100'>
            Tạo
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddUser;
