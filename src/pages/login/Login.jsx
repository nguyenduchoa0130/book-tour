import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

function Login() {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };
  return (
    <>
      <div className="login">
        <h1>Login</h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true
          }}
          onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!'
              }
            ]}>
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!'
              }
            ]}>
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a
              className="login-form-forgot"
              href=""
              style={{
                color: '#1f1f1f',
                fontWeight: 'bolder'
              }}>
              Forgot password
            </a>
          </Form.Item>
          <div className="button">
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{ color: '#000000' }}>
                Log in
              </Button>
              Or{' '}
              <a
                href=""
                style={{
                  color: '#1f1f1f',
                  fontWeight: 'bolder'
                }}>
                Register now!
              </a>
            </Form.Item>
          </div>
        </Form>
      </div>
    </>
  );
}
export default Login;
