import { PlusOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, Input, Select, Typography, Upload } from 'antd';
import React, { useState } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { TourActions } from '../../../common/store/actions';
import AlertUtil from '../../../common/utils/alert.util';
import provinces from './../../../provinces.json';

const AddTour = () => {
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    resetField,
    formState: { errors },
  } = useForm({
    defaultValues: {
      tourName: '',
      startDate: '',
      endDate: '',
      place: null,
      numberOfUsers: 1,
      tourImages: [],
      price: '',
    },
  });
  const {
    fields: detailFields,
    append: appendDetail,
    remove: removeDetail,
    replace: resetDetail,
  } = useFieldArray({
    control,
    name: 'details',
  });
  const [tourImages, setTourImages] = useState([]);
  const dispatch = useDispatch();

  const handleTourImagesChange = ({ fileList: newFileList }) => {
    const files = newFileList.map((item) => item.originFileObj);
    setValue('tourImages', files);
    setTourImages(newFileList);
  };

  const handleAppendDetail = () => {
    const newDetail = { title: '', description: '' };
    appendDetail(newDetail);
  };

  const handleRemoveDetail = (idx) => {
    removeDetail(idx);
  };

  const createTour = async (data) => {
    const formData = new FormData();
    for (const key in data) {
      const rawValue = data[key];
      if (key.includes('Date')) {
        formData.append(key, rawValue.$d);
      } else if (key === 'tourImages') {
        rawValue.forEach((file) => {
          formData.append('tourImages', file);
        });
      } else if (key === 'details') {
        formData.append('tourDetails', JSON.stringify(rawValue));
      } else {
        formData.append(key, rawValue);
      }
    }
    await dispatch(TourActions.createTour(formData));
    AlertUtil.showSuccess('Tạo tour thành công');
    reset();
    resetDetail([]);
    setTourImages([]);
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
        <div className='row'>
          <div className='col-md-6 col-xs-12'>
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
                    showSearch
                    placeholder='Chọn địa điểm'
                    options={provinces}
                    size='large'
                    allowClear
                  />
                )}
              />
            </Form.Item>
          </div>
          <div className='col-md-6 col-xs-12'>
            <Form.Item label='Số lượng người' name='typeOfUsers'>
              <Controller
                control={control}
                name='numberOfUsers'
                rules={{ required: 'Vui lòng nhập số lượng người' }}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder='Nhập số lượng người'
                    size='large'
                    className='w-100'
                  />
                )}
              />
            </Form.Item>
          </div>
        </div>

        <Form.Item label='Giá' name='price'>
          <Controller
            control={control}
            name='price'
            rules={{ required: 'Vui lòng nhập giá' }}
            render={({ field }) => (
              <Input {...field} placeholder='Nhập giá' size='large' className='w-100' />
            )}
          />
        </Form.Item>

        <Form.Item label='Thêm hỉnh ảnh'>
          <Upload
            beforeUpload={() => {
              return false;
            }}
            listType='picture-card'
            fileList={tourImages}
            onChange={handleTourImagesChange}>
            <PlusOutlined />
          </Upload>
        </Form.Item>

        <div className='p-1'>
          <Typography.Title level={3} className='pb-3'>
            Chi tiết tour
          </Typography.Title>
          {detailFields.map((field, index) => (
            <div key={field.id} className='py-2'>
              <Form.Item
                label={`Chi tiết ${index + 1}`}
                name={`details[${index}].title`}
                validateStatus={errors.details?.[index]?.title ? 'error' : ''}
                help={errors.details?.[index]?.title?.message}>
                <Controller
                  name={`details[${index}].title`}
                  control={control}
                  rules={{ required: 'Không được để trống' }}
                  render={({ field }) => (
                    <Input {...field} placeholder={`Nhập tiêu đề mô tả`} size='large' />
                  )}
                />
              </Form.Item>
              <Form.Item
                name={`details[${index}].description`}
                label={`Mô tả chi tiết ${index + 1}`}
                validateStatus={errors.details?.[index]?.description ? 'error' : ''}
                help={errors.details?.[index]?.description?.message}>
                <Controller
                  name={`details[${index}].description`}
                  control={control}
                  rules={{ required: 'Không được để trống' }}
                  render={({ field }) => (
                    <Input.TextArea
                      size='large'
                      rows={4}
                      {...field}
                      placeholder={`Nhập mô tả chi tiết`}
                    />
                  )}
                />
              </Form.Item>
              <div className='text-right'>
                <Button type='primary' danger onClick={() => handleRemoveDetail(index)}>
                  Xoá chi tiết
                </Button>
              </div>
              <hr />
            </div>
          ))}
          <Button
            size='large'
            icon={<PlusOutlined />}
            type='dashed'
            onClick={handleAppendDetail}
            className='flex-row-center'>
            Thêm chi tiết
          </Button>
        </div>

        <Form.Item className='pt-2'>
          <Button type='primary' htmlType='submit' className='w-100' size='large'>
            Tạo tour
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddTour;
