import { Badge, Card, Tooltip, Typography } from 'antd';
import React from 'react';
import { NumericFormat } from 'react-number-format';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

const TourCard = ({ tour }) => {
  return (
    <>
      <NavLink to={`/tours/${tour.id}`}>
        <Badge.Ribbon text='Hot' color='red' placement='start'>
          <Card
            hoverable
            cover={
              <img
                src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                alt={tour.title}
                className={styles['card-image']}
              />
            }
            className={styles.card}>
            <Tooltip>
              <Typography.Title level={4} className={styles['card-title']}>
                {tour.title}
              </Typography.Title>
              <Typography.Text className={styles['card-price']}>
                <NumericFormat
                  value={tour.price}
                  thousandSeparator
                  displayType='text'
                  className={styles['card-price']}
                  suffix=' VND'
                />
              </Typography.Text>
            </Tooltip>
          </Card>
        </Badge.Ribbon>
      </NavLink>
    </>
  );
};

export default TourCard;
