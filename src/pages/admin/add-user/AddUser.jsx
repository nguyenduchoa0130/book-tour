import { LockOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Typography } from 'antd';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RolesSelectors } from '../../../common/store/selectors';
import { AdminActions } from '../../../common/store/actions';
import AlertUtil from '../../../common/utils/alert.util';

const AddUser = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    reset,
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
  const roles = useSelector(RolesSelectors.selectRoles);
  const dispatch = useDispatch();

  const onSubmit = async (formData) => {
    const { confirmPassword, ...payload } = formData;
    const res = await dispatch(AdminActions.createUser(payload));
    if (res) {
      AlertUtil.showSuccess('Tạo người dùng thành công');
      reset({
        username: '',
        password: '',
        confirmPassword: '',
        fullName: '',
        address: '',
        phone: '',
        email: '',
        typeOfUser: null,
      });
    }
  };

  return (
    <>
      <Typography.Title>Tạo tài khoản</Typography.Title>
      <hr />
      <Form name='addUserForm' layout='vertical' onFinish={handleSubmit(onSubmit)}>
        <div className='row'>
          <div className='col-md-6 col-xs-12'>
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
          </div>
          <div className='col-md-6 col-xs-12'>
            <Form.Item
              label='Loại người dùng'
              name='typeOfUser'
              validateStatus={errors.typeOfUser ? 'error' : ''}
              help={errors.typeOfUser && errors.typeOfUser.message}>
              <Controller
                name='typeOfUser'
                control={control}
                rules={{ required: 'Vui lòng chọn loại người dùng' }}
                render={({ field }) => (
                  <Select
                    {...field}
                    size='large'
                    placeholder='Chọn loại người dùng'
                    options={roles.map((item) => ({ label: item.name, value: item.id }))}
                  />
                )}
              />
            </Form.Item>
          </div>
        </div>
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
            render={({ field }) => <Input {...field} placeholder='Email' size='large' />}
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
                    value: /^(?:\+?84|0)(?:3[2-9]|5[25689]|7[0|6-9]|8[1-9]|9[0-9])(?:\d{7}|\d{8})$/,
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
            Tạo
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddUser;
