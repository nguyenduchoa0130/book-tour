import { Button, Typography } from 'antd';
import React from 'react';
import styles from './styles.module.css';
import cx from 'classnames';

const ServiceCard = ({ img, width = 'initial', height = 'initial', title }) => {
  return (
    <>
      <div
        className={cx(styles.card, 'position-relative')}
        style={{
          width,
          height
        }}>
        <img src={img} alt={title} className="w-100 h-100" />
        <div className={styles['card__overlay']}>
          <Typography.Title style={{ color: '#fff' }}>{title}</Typography.Title>
          <Button size="large">Đặt ngay</Button>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
