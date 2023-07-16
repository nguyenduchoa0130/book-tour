import { UploadOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, Input, Select, Typography, Upload, message } from 'antd';
import React from 'react';
import { Controller, useForm, useFieldArray } from 'react-hook-form';
import provinces from './../../../provinces.json';

const AddTour = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      tourName: '',
      startDate: '',
      endDate: '',
      place: null,
      primaryImg: [],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'tourDetails',
  });

  const beforeUpload = (file) => {
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      message.error('Vui lòng chọn file hình ảnh');
      return;
    }
    const isLt2M = file.size / 1024 / 1024 < 10;
    if (!isLt2M) {
      message.error('Kích thước hình lớn hơn 10MB!');
      return;
    }
    return isImage && isLt2M;
  };

  const createTour = (data) => {
    console.log(data);
  };

  return (
    <>
      <Typography.Title>Tạo tour</Typography.Title>
      <hr />
      <Form layout='vertical' name='addTourForm' onFinish={handleSubmit(createTour)}>
        <Form.Item
          label='Tên tour'
          name='tourName'
          validateStatus={errors.tourName ? 'error' : ''}
          help={errors.tourName && errors.tourName.message}>
          <Controller
            name='tourName'
            control={control}
            rules={{ required: 'Vui lòng nhập tên tour !!' }}
            render={({ field }) => <Input {...field} size='large' placeholder='Tên tour' />}
          />
        </Form.Item>

        <div className='row'>
          <div className='col-md-6 col-xs-12'>
            <Form.Item
              label='Từ ngày'
              name='startDate'
              validateStatus={errors.startDate ? 'error' : ''}
              help={errors.startDate && errors.startDate.message}>
              <Controller
                name='startDate'
                control={control}
                rules={{ required: 'Vui lòng chọn ngày bắt đầu !!' }}
                render={({ field }) => (
                  <DatePicker
                    {...field}
                    size='large'
                    className='w-100'
                    placeholder='Chọn ngày khởi hành'
                    format='DD-MM-YYYY'
                  />
                )}
              />
            </Form.Item>
          </div>
          <div className='col-md-6 col-xs-12'>
            <Form.Item
              label='Đến ngày'
              name='endDate'
              validateStatus={errors.endDate ? 'error' : ''}
              help={errors.endDate && errors.endDate.message}>
              <Controller
                name='endDate'
                control={control}
                rules={{ required: 'Vui lòng chọn ngày kết thúc !!' }}
                render={({ field }) => (
                  <DatePicker
                    {...field}
                    size='large'
                    className='w-100'
                    placeholder='Chọn ngày kết thúc'
                    format='DD-MM-YYYY'
                  />
                )}
              />
            </Form.Item>
          </div>
        </div>

        <Form.Item
          label='Địa điểm'
          name='place'
          validateStatus={errors.place ? 'error' : ''}
          help={errors.place && errors.place.message}>
          <Controller
            name='place'
            control={control}
            rules={{ required: 'Vui lòng chọn địa điểm' }}
            render={({ field }) => (
              <Select
                {...field}
                placeholder='Chọn địa điểm'
                options={provinces}
                size='large'
                allowClear
              />
            )}
          />
        </Form.Item>

        <Form.Item label='Ảnh đại diện' name='primaryImg'>
          <Controller
            control={control}
            name='primaryImg'
            render={({ field }) => (
              <Upload
                {...field}
                maxCount={1}
                listType='picture'
                beforeUpload={beforeUpload}
                accept='image/*'
                fileList={field.value || []}>
                <Button htmlType='button' icon={<UploadOutlined />} size='large'>
                  Tải ảnh lên
                </Button>
              </Upload>
            )}
          />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit' className='w-100' size='large'>
            Tạo
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddTour;
