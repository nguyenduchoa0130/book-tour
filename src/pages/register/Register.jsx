import { LockOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Typography } from 'antd';
import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './styles.module.css';

const Register = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={styles['register-container']}>
      <div className={styles['form-container']}>
        <Form layout='vertical' onFinish={handleSubmit(onSubmit)}>
          <Typography.Title level={1} className='text-center py-3 text-uppercase'>
            đăng ký tài khoản
          </Typography.Title>
          <Form.Item
            label='Tên đăng nhập'
            name='username'
            rules={[{ required: true, message: 'Tên đăng nhập không được để trống!' }]}>
            <Input placeholder='Tên đăng nhập' prefix={<UserOutlined />} size='large' />
          </Form.Item>

          <Form.Item
            label='Mật khẩu'
            name='password'
            rules={[{ required: true, message: 'Mật khẩu không được để trống!' }]}>
            <Input.Password placeholder='Mật khẩu' prefix={<LockOutlined />} size='large' />
          </Form.Item>

          <Form.Item
            label='Nhập lại mật khẩu'
            name='confirmPassword'
            rules={[
              { required: true, message: 'Vui lòng xác nhận lại mật khẩu' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('Mật khẩu không khớp');
                },
              }),
            ]}>
            <Input.Password
              prefix={<LockOutlined />}
              size='large'
              placeholder='Nhập lại mật khẩu'
            />
          </Form.Item>

          <Form.Item label='Họ và tên' name='fullName' rules={[{ required: false }]}>
            <Input prefix={<UserOutlined />} size='large' placeholder='Họ và tên' />
          </Form.Item>

          <Form.Item label='Địa chỉ' name='address' rules={[{ required: false }]}>
            <Input.TextArea rows={4} size='large' placeholder='Địa chỉ' />
          </Form.Item>

          <Form.Item label='Số điện thoại' name='phoneNumber' rules={[{ required: false }]}>
            <Input prefix={<PhoneOutlined />} size='large' placeholder='Số điện thoại' />
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit' size='large' className='w-100'>
              Đăng ký
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
