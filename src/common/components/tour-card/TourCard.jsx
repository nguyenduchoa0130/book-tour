import {
  CalendarOutlined,
  ClockCircleOutlined,
  EditOutlined,
  InfoOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';
import { Badge, Button, Card, Tooltip, Typography } from 'antd';
import React from 'react';
import { NumericFormat } from 'react-number-format';
import { NavLink } from 'react-router-dom';
import DateUtils from '../../utils/date.util';
import styles from './styles.module.css';

const TourCard = ({ tour, isAdmin }) => {
  return (
    <>
      <NavLink to={`/tours/${tour.id}`} className='flex-row-center'>
        <Badge.Ribbon text={tour.DiaDiem} color='red' placement='start'>
          <Card
            hoverable
            cover={
              <img
                src={tour?.HinhAnhTours[0]?.url}
                alt={tour.TenTour}
                className={styles['card-image']}
              />
            }
            className={styles.card}>
            <Tooltip>
              <Typography.Title level={4} className={styles['card-title']}>
                {tour.TenTour}
              </Typography.Title>
            </Tooltip>
            <div className={styles['card-detail']}>
              <UsergroupAddOutlined />
              <Typography.Text className='no-wrap-content'>
                {tour.SoLuongNguoi} người
              </Typography.Text>
            </div>
            <div className={styles['card-detail']}>
              <ClockCircleOutlined />
              <Typography.Text className='no-wrap-content'>{tour.ChiTietThoiGian}</Typography.Text>
            </div>
            <div className={styles['card-detail']}>
              <CalendarOutlined />
              <Typography.Text className='no-wrap-content'>
                Từ {DateUtils.parseDateTime(tour.NgayBatDau)}
                {' đến '} {DateUtils.parseDateTime(tour.NgayKetThuc)}
              </Typography.Text>
            </div>
            <Typography.Text className={styles['card-price']}>
              <NumericFormat
                value={tour.Gia}
                thousandSeparator
                displayType='text'
                className={styles['card-price']}
                suffix=' VND'
              />
            </Typography.Text>
            {isAdmin && (
              <>
                <div className='py-2 flex-row-between'>
                  <Button type='primary' icon={<InfoOutlined />} className='w-100 btn-success'>
                    Chi tiết
                  </Button>
                  <Button type='primary' icon={<EditOutlined />} className='w-100'>
                    Sửa
                  </Button>
                </div>
              </>
            )}
          </Card>
        </Badge.Ribbon>
      </NavLink>
    </>
  );
};

export default TourCard;
