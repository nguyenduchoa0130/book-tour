import { ArrowLeftOutlined, DollarCircleOutlined } from '@ant-design/icons';
import { Badge, Button, Descriptions, Divider, Empty, FloatButton, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import { NumericFormat } from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RolesEnum } from '../../common/enums';
import { tourService } from '../../common/services';
import { GlobalActions } from '../../common/store/actions';
import { GlobalSelectors, UserSelectors } from '../../common/store/selectors';
import AlertUtil from '../../common/utils/alert.util';
import DateUtils from '../../common/utils/date.util';
import styles from './styles.module.css';

const TourDetail = () => {
  const { tourId } = useParams();
  const [tour, setTour] = useState(null);
  const isLoading = useSelector(GlobalSelectors.selectIsLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(UserSelectors.selectUser);

  const navigateToPayload = () => {
    const cacheTour = {
      id: tour.id,
      TenTour: tour.TenTour,
      Gia: tour.Gia,
      DiaDiem: tour.DiaDiem,
      SoLuongNguoi: tour.SoLuongNguoi,
      NgayBatDau: tour.NgayBatDau,
      NgayKetThuc: tour.NgayKetThuc,
      ChiTietThoiGian: tour.ChiTietThoiGian,
    };
    localStorage.setItem('bookingTour', JSON.stringify(cacheTour));
    navigate('/thanh-toan');
  };

  useEffect(() => {
    const getTourById = async () => {
      try {
        dispatch(GlobalActions.showLoading());
        const tour = await tourService.getTour(tourId);
        setTour(tour);
      } catch (error) {
        AlertUtil.showError(error?.response?.data?.message || error.message);
      } finally {
        dispatch(GlobalActions.hideLoading());
      }
    };
    if (!isNaN(+tourId)) {
      getTourById(+tourId);
    }
  }, []);

  return (
    <>
      {!isLoading ? (
        <>
          {tour ? (
            <>
              <div className='container pt-4'>
                <Button
                  type='text'
                  icon={<ArrowLeftOutlined />}
                  className='flex-row-center'
                  onClick={() => navigate('/tours')}>
                  Quay lại danh sách tour
                </Button>
                <div className={styles['tour-detail-header']}>
                  <Typography.Title className='text-capitalize'>{tour.TenTour}</Typography.Title>
                </div>
                <Divider />
                <div className='py-2'>
                  <Badge.Ribbon text={tour?.DiaDiem} color='red' placement='start'>
                    <ImageGallery
                      items={tour?.HinhAnhTours?.map((img) => ({
                        original: img.url,
                        thumbnail: img.url,
                      }))}
                      autoPlay
                      showFullscreenButton={false}
                      showPlayButton={false}
                    />
                  </Badge.Ribbon>
                  <Divider />
                  <div className='flex-row-between'>
                    <Typography.Title>
                      Giá:
                      <span className='ml-3'>
                        <NumericFormat
                          value={tour?.Gia}
                          displayType='text'
                          thousandSeparator
                          style={{
                            color: '#f79321',
                          }}
                        />
                      </span>
                    </Typography.Title>
                    {user?.VaiTro === RolesEnum.KhachHang && (
                      <Button
                        type='primary'
                        size='large'
                        className='p-4 w-25 flex-row-center text-uppercase'
                        icon={<DollarCircleOutlined />}
                        onClick={navigateToPayload}>
                        Đặt tour
                      </Button>
                    )}
                  </div>
                  <Divider />
                  <div className='py-2'>
                    <Descriptions title='Thông tin tour'>
                      <Descriptions.Item label='Mã tour'>{tour.id}</Descriptions.Item>
                      <Descriptions.Item label='Địa điểm'>{tour.DiaDiem}</Descriptions.Item>
                      <Descriptions.Item label='Số lượng'>
                        Tối đa {tour.SoLuongNguoi} người
                      </Descriptions.Item>
                    </Descriptions>
                    <Descriptions title='Thời gian'>
                      <Descriptions.Item label='Từ ngày'>
                        {DateUtils.parseDateTime(tour.NgayBatDau)}
                      </Descriptions.Item>
                      <Descriptions.Item label='Đến ngày'>
                        {DateUtils.parseDateTime(tour.NgayKetThuc)}
                      </Descriptions.Item>
                      <Descriptions.Item label='Kéo dài'>{tour.ChiTietThoiGian}</Descriptions.Item>
                    </Descriptions>
                  </div>
                  <Divider />
                  <div className='py-2'>
                    <Typography.Title level={2} className='text-center'>
                      MÔ TẢ
                    </Typography.Title>
                    <Divider />
                    {tour?.ChiTietTours?.map((detail, idx, self) => (
                      <div key={`chi-tiet-tour-${idx}`}>
                        <Typography.Title level={3} className='text-capitalize'>
                          {detail.TieuDe.toLowerCase()}
                        </Typography.Title>
                        <Typography.Paragraph className='pt-2'>
                          {detail.MoTaChiTiet}
                        </Typography.Paragraph>
                        {idx !== self.length - 1 && <Divider />}
                      </div>
                    ))}
                  </div>
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
            <Empty />
          )}
        </>
      ) : null}
    </>
  );
};

export default TourDetail;
