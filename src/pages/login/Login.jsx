import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Input, Button, Select, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './styles.module.css';

const { Option } = Select;

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm();

  const onSubmit = data => {
    console.log('Submitted data:', data);
  };

  return (
    <div className={styles['login-form-container']}>
      <video autoPlay muted loop className={styles['background-video']}>
        <source src="/assets/audio/beach.mp4" type="video/mp4" />
      </video>
      <Form
        name="loginForm"
        layout="vertical"
        onFinish={handleSubmit(onSubmit)}
        initialValues={{ remember: true }}
        className={styles['login-form']}>
        <Typography.Title level={1} className="text-center py-3 text-uppercase">
          đăng nhập
        </Typography.Title>
        <Form.Item
          label="Tên đăng nhập"
          name="username"
          rules={[{ required: true, message: 'Tên đăng nhập không được để trống!' }]}
          validateStatus={errors.username ? 'error' : ''}
          help={errors.username && errors.username.message}>
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Tên đăng nhập"
            size="large"
            {...register('username')}
          />
        </Form.Item>
        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: 'Mật khẩu không được để trống!' }]}
          validateStatus={errors.password ? 'error' : ''}
          help={errors.password && errors.password.message}>
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Mật khẩu"
            {...register('password')}
            size="large"
          />
        </Form.Item>
        <Form.Item
          label="Vai trò"
          name="role"
          rules={[{ required: true, message: 'Vui lòng nhập vai trò của bạn!' }]}
          validateStatus={errors.role ? 'error' : ''}
          help={errors.role && errors.role.message}>
          <Select placeholder="Chọn vai trò" allowClear {...register('role')}>
            <Option value="admin">Admin</Option>
            <Option value="user">User</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-100" size="large">
            Gửi
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
