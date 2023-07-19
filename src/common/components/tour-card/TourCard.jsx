import { CalendarOutlined, ClockCircleOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Badge, Card, Tooltip, Typography } from 'antd';
import React from 'react';
import { NumericFormat } from 'react-number-format';
import { NavLink } from 'react-router-dom';
import DateUtils from '../../utils/date.util';
import styles from './styles.module.css';

const TourCard = ({ tour }) => {
  return (
    <>
      <NavLink to={`/tours/${tour.id}`}>
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
            <div className='flex-row-between'>
              <div className={styles['card-detail']}>
                <ClockCircleOutlined />
                <Typography.Text>{tour.ChiTietThoiGian}</Typography.Text>
              </div>
              <div className={styles['card-detail']}>
                <UsergroupAddOutlined />
                <Typography.Text>{tour.SoLuongNguoi} người</Typography.Text>
              </div>
            </div>
            <div className={styles['card-detail']}>
              <CalendarOutlined />
              <Typography.Text>
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
          </Card>
        </Badge.Ribbon>
      </NavLink>
    </>
  );
};

export default TourCard;
