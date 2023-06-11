import React from 'react';
import './styles.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import mountain from '../../Assets/audio/mountain.mp4';
function Login() {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };
  return (
    <>
      <div className="login" style={{ position: 'relative' }}>
        <video className="background-video" autoPlay loop muted>
          <source src={mountain} type="video/mp4" />
        </video>

        <div className="card">
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
              ]}
              style={{
                width: '700px',
                margin: '0 auto',
                marginTop: '20px',
                color: ''
              }} // Chỉnh độ rộng của trường username
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
              style={{
                width: '700px',
                margin: '0 auto',
                marginTop: '20px',
                marginBottom: '20px' /*dưới  */
              }}>
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
                  fontFamily: 'VNI-Pagon',
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
                  style={{
                    color: '#000000',
                    marginBottoms: '20px' /*khoảng cách dưới 20px*/,
                    fontFamily: 'VNI-Pagon'
                  }}>
                  Log in
                </Button>
                <p style={{ marginBottom: '20px', marginTop: '20px', fontFamily: 'VNI-Pagon' }}>
                  Or{' '}
                  <a
                    href=""
                    style={{
                      color: '#ffffff',
                      fontWeight: 'bolder',
                      fontFamily: 'VNI-Pagon'
                    }}>
                    Register now!
                  </a>
                </p>
              </Form.Item>
            </div>
          </Form>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Form.Item>
              <a href="https://facebook.com">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  style={{ color: '#000000', fontFamily: 'VNI-Pagon' }}>
                  Continue with Facebook
                </Button>
              </a>
            </Form.Item>

            <Form.Item>
              <a href="https://google.com">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  style={{ color: '#000000', fontFamily: 'VNI-Pagon' }}>
                  Continue with Google
                </Button>
              </a>
            </Form.Item>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
