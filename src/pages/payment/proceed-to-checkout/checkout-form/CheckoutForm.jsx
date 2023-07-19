import { PlusOutlined } from '@ant-design/icons';
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Button, Divider, Form, Input, Typography } from 'antd';
import React from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { NumericFormat } from 'react-number-format';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { paymentService } from '../../../../common/services';
import AlertUtil from '../../../../common/utils/alert.util';
import styles from './styles.module.css';

const CheckoutForm = ({ paymentIntents, user, bookingTour }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  // Form
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      tourBookerId: user?.id,
      tourBookerName: user?.HoVaTen,
      tourBookerPhone: user?.Sdt,
    },
  });

  const {
    fields: customersFields,
    append: appendCustomer,
    remove: removeCustomer,
  } = useFieldArray({
    control,
    name: 'customers',
  });

  const handleAppendTourist = () => {
    const customer = { name: '', phone: '' };
    appendCustomer(customer);
  };

  const handleRemoveTourist = (idx) => {
    removeCustomer(idx);
  };

  const handlePayment = async (data) => {
    if (!user) {
      AlertUtil.showConfirm('Lưu ý', 'Vui lòng đăng nhập để tiếp tục').then(({ isConfirmed }) => {
        if (isConfirmed) {
          return navigate('/dang-nhap');
        }
      });
    } else {
      if (!stripe || !elements) {
        AlertUtil.showError('Lỗi thanh toán. Thử lại sau !!');
        return;
      }
      const payload = {
        UUID: uuidv4(),
        SoThe: '',
        NgayDat: new Date().toLocaleString(),
        NguoiDatId: +data.tourBookerId,
        TourId: +bookingTour.id,
        SoTien: +bookingTour.Gia,
        SdtNguoiDat: data.tourBookerPhone,
        customers: data.customers,
      };
      try {
        await paymentService.createPayment(payload);
        AlertUtil.showSuccess('Đặt tour thành công');
        localStorage.removeItem('bookingTour');
        setTimeout(() => {
          navigate('/lich-su-dat-tour');
        }, 200);
      } catch (error) {
        AlertUtil.showError(error?.response?.data?.message || error.message);
      }
    }
  };

  return (
    <>
      <PaymentElement onChange={console.log} />
      <Divider />
      <Form layout='vertical' name='paymentForm' onFinish={handleSubmit(handlePayment)}>
        <Typography.Title level={4} className='pb-2'>
          Thông tin người đặt
        </Typography.Title>
        <div className='row'>
          <div className='col-md-6 col-xs-12'>
            <Form.Item
              label='Người đặt'
              name='tourBookerName'
              validateStatus={errors.tourBookerName ? 'error' : ''}
              help={errors.tourBookerName && errors.tourBookerName.message}>
              <Controller
                control={control}
                name='tourBookerName'
                rules={{ required: 'Không được để trống !!' }}
                render={({ field }) => (
                  <Input {...field} placeholder='Nhập tên người đặt' size='large' />
                )}
              />
            </Form.Item>
          </div>
          <div className='col-md-6 col-xs-12'>
            <Form.Item
              label='Số điện thoại'
              name='tourBookerPhone'
              validateStatus={errors.tourBookerPhone ? 'error' : ''}
              help={errors.tourBookerPhone && errors.tourBookerPhone.message}>
              <Controller
                control={control}
                name='tourBookerPhone'
                rules={{ required: 'Không được để trống !!' }}
                render={({ field }) => (
                  <Input {...field} placeholder='Nhập số điện thoại người đặt' size='large' />
                )}
              />
            </Form.Item>
          </div>
        </div>

        <div className='p-1'>
          <Typography.Title level={4} className='pb-3'>
            Danh sách khánh hàng
          </Typography.Title>
          {customersFields.map((field, index, self) => (
            <div key={field.id} className='py-2'>
              <div className='row'>
                <div className='col-md-6 col-xs-12'>
                  <Form.Item
                    label={`Khách hàng số ${index + 1}`}
                    name={`customers[${index}].name`}
                    validateStatus={errors.customers?.[index]?.name ? 'error' : ''}
                    help={errors.customers?.[index]?.name?.message}>
                    <Controller
                      name={`customers[${index}].name`}
                      control={control}
                      rules={{ required: 'Không được để trống' }}
                      render={({ field }) => (
                        <Input {...field} placeholder={`Nhập tên thành viên`} size='large' />
                      )}
                    />
                  </Form.Item>
                </div>
                <div className='col-md-6 col-xs-12'>
                  <Form.Item
                    name={`customers[${index}].phone`}
                    label={`Số điện thoại`}
                    validateStatus={errors.customers?.[index]?.phone ? 'error' : ''}
                    help={errors.customers?.[index]?.phone?.message}>
                    <Controller
                      name={`customers[${index}].phone`}
                      control={control}
                      rules={{ required: 'Không được để trống' }}
                      render={({ field }) => (
                        <Input size='large' {...field} placeholder={`Nhập số điện thoại`} />
                      )}
                    />
                  </Form.Item>
                </div>
              </div>

              <div className='text-right'>
                <Button type='primary' danger onClick={() => handleRemoveTourist(index)}>
                  Xoá khách hàng
                </Button>
              </div>
              {index !== self.length - 1 && <hr />}
            </div>
          ))}
          {customersFields.length < +bookingTour.SoLuongNguoi && (
            <Button
              size='large'
              icon={<PlusOutlined />}
              type='dashed'
              onClick={handleAppendTourist}
              className='flex-row-center'>
              Thêm khách hàng
            </Button>
          )}
        </div>
        <Divider />
        <div className={styles['payment-total']}>
          <Typography.Title level={2}>Số tiền phải thanh toán:</Typography.Title>
          <Typography.Text>
            <NumericFormat
              value={bookingTour.Gia}
              thousandSeparator
              displayType='text'
              suffix=' VND'
              style={{ color: '#f79321', fontSize: 28, fontWeight: 500 }}
            />
          </Typography.Text>
          <span>|</span>
          <Button type='primary' size='large' htmlType='submit'>
            Thanh toán
          </Button>
        </div>
      </Form>
    </>
  );
};

export default CheckoutForm;
