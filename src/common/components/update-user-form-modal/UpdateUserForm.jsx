import { LockOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select } from 'antd';
import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RolesSelectors } from '../../store/selectors';

const UpdateUserFormModal = ({ user, onCancel, isAdmin }) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    watch,
    reset,
  } = useForm({
    defaultValues: {
      oldPassword: user.password,
      newPassword: '',
      confirmNewPassword: '',
      fullName: user.HoVaTen,
      address: user.DiaChi,
      phone: user.Sdt,
      role: user.VaiTro || null,
    },
  });

  const roles = useSelector(RolesSelectors.selectRoles);

  const handleSubmitForm = async (data) => {
    console.log(data);
  };

  useEffect(() => {
    return () => {
      reset({});
    };
  }, [user]);

  return (
    <>
      <div className='w-100 h-100'>
        <Form
          name='registerForm'
          layout='vertical'
          onFinish={handleSubmit(handleSubmitForm)}
          initialValues={{ remember: true }}>
          <Form.Item
            label='Nhập lại mật khẩu cũ'
            name='oldPassword'
            validateStatus={errors.oldPassword ? 'error' : ''}
            help={errors.oldPassword && errors.oldPassword.message}>
            <Controller
              control={control}
              name='oldPassword'
              rules={{ required: 'Vui lòng nhập lại mật khẩu cũ' }}
              render={({ field }) => (
                <Input.Password
                  {...field}
                  placeholder='Nhập lại mật khẩu cũ'
                  prefix={<LockOutlined />}
                />
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
                  rules={{ required: 'Vui lòng nhập mật khẩu' }}
                  render={({ field }) => (
                    <Input.Password {...field} placeholder='Mật khẩu' prefix={<LockOutlined />} />
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
                      placeholder='Nhập lại mật khẩu'
                    />
                  )}
                />
              </Form.Item>
            </div>
          </div>

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
                <Input {...field} prefix={<UserOutlined />} placeholder='Họ và tên' />
              )}
            />
          </Form.Item>

          <Form.Item label='Địa chỉ' name='address'>
            <Controller
              name='address'
              control={control}
              render={({ field }) => <Input.TextArea {...field} rows={4} placeholder='Địa chỉ' />}
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
                <Input {...field} prefix={<PhoneOutlined />} placeholder='Số điện thoại' />
              )}
            />
          </Form.Item>

          {isAdmin && (
            <Form.Item
              label='Vai trò'
              name='role'
              validateStatus={errors.role ? 'error' : ''}
              help={errors.role && errors.role.message}>
              <Controller
                control={control}
                name='role'
                rules={{ required: 'Vui lòng chọn vai trò của người dùng' }}
                render={({ field }) => (
                  <Select
                    {...field}
                    placeholder='Chọn vai trò của người dùng'
                    options={roles.map((item) => ({ label: item.name, value: item.id }))}
                  />
                )}
              />
            </Form.Item>
          )}

          <div className='d-flex justify-content-end'>
            <Button onClick={onCancel} className='mr-2'>
              Huỷ
            </Button>
            <Button type='primary' htmlType='submit'>
              Cập nhật
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default UpdateUserFormModal;
