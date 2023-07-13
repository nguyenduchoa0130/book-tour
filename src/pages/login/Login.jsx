import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Typography } from 'antd';
import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { RolesActions, UserActions } from '../../common/store/actions';
import { RolesSelectors } from '../../common/store/selectors';
import styles from './styles.module.css';

const { Option } = Select;

const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
      typeOfUser: '',
    },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Declare variables
  const roles = useSelector(RolesSelectors.selectRoles);

  // Declare methods
  const onSubmit = async (payload) => {
    await dispatch(UserActions.signIn(payload));
    navigate('/');
  };

  // Declare hooks
  useEffect(() => {
    dispatch(RolesActions.getRoles());
  }, []);

  return (
    <div className={styles['login-form-container']}>
      <Form
        name='loginForm'
        layout='vertical'
        onFinish={handleSubmit(onSubmit)}
        initialValues={{ remember: true }}
        className={styles['login-form']}>
        <Typography.Title level={1} className='text-center py-3 text-uppercase'>
          đăng nhập
        </Typography.Title>
        <Form.Item
          label='Tên đăng nhập'
          name='username'
          validateStatus={errors.username ? 'error' : ''}
          help={errors.username && errors.username.message}>
          <Controller
            name='username'
            control={control}
            rules={{ required: 'Vui lòng nhập tên đăng nhập !!' }}
            render={({ field }) => (
              <Input
                {...field}
                prefix={<UserOutlined className='site-form-item-icon' />}
                placeholder='Tên đăng nhập'
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
            rules={{ required: 'Vui lòng nhập mật khẩu !!' }}
            render={({ field }) => (
              <Input
                {...field}
                prefix={<LockOutlined className='site-form-item-icon' />}
                type='password'
                placeholder='Mật khẩu'
                size='large'
              />
            )}
          />
        </Form.Item>
        <Form.Item
          label='Vai trò'
          name='role'
          validateStatus={errors.role ? 'error' : ''}
          help={errors.role && errors.role.message}>
          <Controller
            name='typeOfUser'
            control={control}
            rules={{ required: 'Vui lòng chọn vai trò !!' }}
            render={({ field }) => (
              <Select placeholder='Chọn vai trò' {...field} allowClear>
                {roles.map((role) => (
                  <Option key={`role-${role.id}`} value={role.id}>
                    {role.name}
                  </Option>
                ))}
              </Select>
            )}
          />
        </Form.Item>
        <Form.Item className='pt-1 mb-3'>
          <Button type='primary' htmlType='submit' className='w-100' size='large'>
            Gửi
          </Button>
        </Form.Item>
        <div className='py-2'>
          <NavLink to='/dang-ky' className='w-100 d-inline-block'>
            <Button className='btn-success w-100' size='large'>
              Đăng Ký Tài Khoản
            </Button>
          </NavLink>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
