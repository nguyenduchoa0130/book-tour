import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Descriptions, Divider, Empty, FloatButton, Space, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserSelectors } from '../../common/store/selectors';
import AlertUtil from '../../common/utils/alert.util';
import DateUtils from '../../common/utils/date.util';
import CheckoutForm from './proceed-to-checkout';

const Payment = () => {
  const [bookingTour, setBookingTour] = useState(null);
  const user = useSelector(UserSelectors.selectUser);
  const navigate = useNavigate();

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
  }, []);

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
            <CheckoutForm user={user} bookingTour={bookingTour} />
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
