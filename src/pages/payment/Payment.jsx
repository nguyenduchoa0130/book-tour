import { ArrowLeftOutlined, PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Descriptions,
  Divider,
  Empty,
  FloatButton,
  Form,
  Input,
  Space,
  Typography,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { NumericFormat } from 'react-number-format';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Stripe from '../../common/components/stripe';
import { UserSelectors } from '../../common/store/selectors';
import AlertUtil from '../../common/utils/alert.util';
import DateUtils from '../../common/utils/date.util';
import styles from './styles.module.css';

const Payment = () => {
  const [bookingTour, setBookingTour] = useState(null);
  const user = useSelector(UserSelectors.selectUser);
  const navigate = useNavigate();
  const {
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      tourBookerId: user?.id,
      tourBookerName: user?.HoVaTen,
      tourBookPhone: user?.Sdt,
    },
  });

  const {
    fields: customersFields,
    append: appendCustomer,
    remove: removeCustomer,
    replace: resetCustomers,
  } = useFieldArray({
    control,
    name: 'customers',
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('bookingTour'));
    if (!data) {
      AlertUtil.showWarning('Vui lòng chọn tour mà bạn đang muốn đặt !!');
      setTimeout(() => {
        navigate(-1);
      }, 500);
    } else {
      setBookingTour(data);
    }
    return () => {
      console.log('run');
    };
  }, []);

  const handleAppendTourist = () => {
    const customer = { name: '', phone: '' };
    appendCustomer(customer);
  };

  const handleRemoveTourist = (idx) => {
    removeCustomer(idx);
  };

  const handlePayment = () => {
    console.log('payment');
  };

  return (
    <>
      {bookingTour ? (
        <>
          <div className='container py-4'>
            <Button type='text' icon={<ArrowLeftOutlined />} onClick={() => navigate(-1)}>
              Quay lại
            </Button>
            <Typography.Title className='text-center'>ĐẶT TOUR</Typography.Title>
            <Divider />
            <div className='border rounded p-4 bg-light'>
              <Space size='large' direction='vertical'>
                <Descriptions title='Thông tin tour'>
                  <Descriptions.Item label='Mã tour'>{bookingTour.id}</Descriptions.Item>
                  <Descriptions.Item label='Địa điểm'>{bookingTour.DiaDiem}</Descriptions.Item>
                  <Descriptions.Item label='Số lượng'>
                    Tối đa {bookingTour.SoLuongNguoi} người
                  </Descriptions.Item>
                </Descriptions>
                <Descriptions title='Thời gian'>
                  <Descriptions.Item label='Từ ngày'>
                    {DateUtils.parseDateTime(bookingTour.NgayBatDau)}
                  </Descriptions.Item>
                  <Descriptions.Item label='Đến ngày'>
                    {DateUtils.parseDateTime(bookingTour.NgayKetThuc)}
                  </Descriptions.Item>
                  <Descriptions.Item label='Kéo dài'>
                    {bookingTour.ChiTietThoiGian}
                  </Descriptions.Item>
                </Descriptions>
              </Space>
            </div>
            <Divider />
            <Typography.Title level={4} className='pb-2'>
              Thông tin thanh toán
            </Typography.Title>
            <Stripe amount={9000000} onPayment={handlePayment} />
            <Divider />
            <Form layout='vertical' name='paymentForm'>
              <Typography.Title level={4} className='pb-2'>
                Thông tin người đặt
              </Typography.Title>
              <div className='row'>
                <div className='col-md-6 col-xs-12'>
                  <Form.Item label='Người đặt' name='tourBookerName'>
                    <Controller
                      control={control}
                      name='tourBookerName'
                      render={({ field }) => (
                        <Input {...field} placeholder='Nhập tên người đặt' size='large' />
                      )}
                    />
                  </Form.Item>
                </div>
                <div className='col-md-6 col-xs-12'>
                  <Form.Item label='Số điện thoại' name='tourBookerPhone'>
                    <Controller
                      control={control}
                      name='tourBookerName'
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
                          validateStatus={errors.customers?.[index]?.title ? 'error' : ''}
                          help={errors.customers?.[index]?.name?.message}>
                          <Controller
                            name={`customers[${index}].title`}
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
            </Form>
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
              <Button type='primary' size='large'>
                Thanh toán
              </Button>
            </div>
            <FloatButton.BackTop
              type='primary'
              visibilityHeight={0}
              style={{ width: 48, height: 48 }}
              onClick={() => window.scrollTo(0, 0)}
            />
          </div>
        </>
      ) : (
        <div className='flex-row-center h-100'>
          <Empty />
        </div>
      )}
    </>
  );
};

export default Payment;
