import { LockOutlined, MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Typography } from 'antd';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserActions } from '../../common/store/actions';
import AlertUtil from '../../common/utils/alert.util';
import styles from './styles.module.css';

const Register = () => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: '',
      fullName: '',
      address: '',
      phone: '',
      email: '',
    },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { confirmPassword, ...payload } = data;
    const res = await dispatch(UserActions.signUp(payload));
    if (res) {
      AlertUtil.showSuccess('Đăng ký thành công');
      navigate('/');
    }
  };

  return (
    <div className={styles['register-container']}>
      <div className={styles['form-container']}>
        <Form
          name='registerForm'
          layout='vertical'
          onFinish={handleSubmit(onSubmit)}
          initialValues={{ remember: true }}>
          <Typography.Title level={1} className='text-center py-3 text-uppercase'>
            đăng ký tài khoản
          </Typography.Title>

          <Form.Item
            label='Tên đăng nhập'
            name='username'
            validateStatus={errors.username ? 'error' : ''}
            help={errors.username && errors.username.message}>
            <Controller
              name='username'
              control={control}
              rules={{
                required: 'Vui lòng nhập tên đăng nhập',
                pattern: {
                  value: /^[a-zA-Z\d]{2,}$/,
                  message:
                    'Tên đăng nhập không hợp lệ, phải có từ 2 ký tự và không chứa ký tự đặc biệt....',
                },
              }}
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
            label='Email'
            name='email'
            validateStatus={errors.email ? 'error' : ''}
            help={errors.email && errors.email.message}>
            <Controller
              name='email'
              control={control}
              rules={{
                required: 'Vui lòng nhập email',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Email không hợp lệ',
                },
              }}
              render={({ field }) => (
                <Input {...field} placeholder='Email' prefix={<MailOutlined />} size='large' />
              )}
            />
          </Form.Item>

          <div className='row'>
            <div className='col-md-6 col-xs-12'>
              <Form.Item
                label='Mật khẩu'
                name='password'
                validateStatus={errors.password ? 'error' : ''}
                help={errors.password && errors.password.message}>
                <Controller
                  name='password'
                  control={control}
                  rules={{
                    required: 'Vui lòng nhập mật khẩu',
                    minLength: { value: 6, message: 'Mật khẩu phải có ít nhất 6 ký tự' },
                  }}
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
            </div>
            <div className='col-md-6 col-xs-12'>
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
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6 col-xs-12'>
              <Form.Item
                label='Họ và tên'
                name='fullName'
                validateStatus={errors.fullName ? 'error' : ''}
                help={errors.fullName && errors.fullName.message}>
                <Controller
                  name='fullName'
                  control={control}
                  rules={{
                    required: 'Vui lòng nhập họ và tên',
                    minLength: {
                      value: 1,
                      message: 'Họ và tên không hợp lệ',
                    },
                  }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      prefix={<UserOutlined />}
                      size='large'
                      placeholder='Họ và tên'
                    />
                  )}
                />
              </Form.Item>
            </div>
            <div className='col-md-6 col-xs-12'>
              <Form.Item
                label='Số điện thoại'
                name='phone'
                validateStatus={errors.phone ? 'error' : ''}
                help={errors.phone && errors.phone.message}>
                <Controller
                  name='phone'
                  control={control}
                  rules={{
                    required: 'Vui lòng nhập số điện thoại',
                    pattern: {
                      value:
                        /^(?:\+?84|0)(?:3[2-9]|5[25689]|7[0|6-9]|8[1-9]|9[0-9])(?:\d{7}|\d{8})$/,
                      message: 'Số điện thoại không hợp lệ',
                    },
                  }}
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
            </div>
          </div>

          <Form.Item label='Địa chỉ' name='address'>
            <Controller
              name='address'
              control={control}
              render={({ field }) => (
                <Input.TextArea {...field} rows={2} size='large' placeholder='Địa chỉ' />
              )}
            />
          </Form.Item>

          <Form.Item className='pt-1'>
            <Button type='primary' htmlType='submit' size='large' className='w-100'>
              Đăng ký
            </Button>
          </Form.Item>
          <NavLink to='/dang-nhap' className='w-100 d-inline-block'>
            <Button className='btn-success w-100' htmlType='button' size='large'>
              Đăng nhập tài khoản
            </Button>
          </NavLink>
        </Form>
      </div>
    </div>
  );
};

export default Register;
