import React from 'react';
import styles from './styles.module.css';
import { Typography, Button } from 'antd';

const BookingCard = ({ img, title}) => {
  return (
    <div>
      <div className={styles.card}>
        <img src={img} alt={title} width="100%" height="180px" />
        <div className={styles.cardContent}>
          <Typography.Title style={{fontSize:'16px'}}>{title}</Typography.Title>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
