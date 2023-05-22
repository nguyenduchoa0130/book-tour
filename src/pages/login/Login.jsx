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
        <div className="card">
          <h1 style={{ marginTop: '50px', fontFamily: 'VNI-Pagon' }}>Login</h1>
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
              ]}
              style={{ width: '500px', margin: '0 auto', marginTop: '20px' }} // Chỉnh độ rộng của trường username
              className="text-center" // Căn giữa trường username- khong duoc
            >
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
              ]}
              style={{ width: '500px', margin: '0 auto', marginTop: '20px', marginBottom: '20px' }}>
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
                  fontWeight: 'bolder',
                  marginLeft: '300px' // Khoảng cách trái
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
                  style={{ color: '#000000', marginBottoms: '20px' }}>
                  Log in
                </Button>
                <p style={{ marginBottom: '20px', marginTop: '20px' }}>
                  Or{' '}
                  <a
                    href=""
                    style={{
                      color: '#1f1f1f',
                      fontWeight: 'bolder'
                    }}>
                    Register now!
                  </a>
                </p>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      style={{ color: '#000000' }}>
                      Continue with Facebook
                    </Button>
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      style={{ color: '#000000' }}>
                      Continue with Google
                    </Button>
                  </Form.Item>
                </div>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
export default Login;
