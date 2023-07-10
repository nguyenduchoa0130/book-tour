import React from 'react';
import styles from './styles.module.css';
import { Typography, Button } from 'antd';

const FavoriteCard = ({ img, title, width, height }) => {
  return (
    <>
      <div className={styles.card} style={{ width, height }}>
        <img src={img} alt={title} width="100%" height="100%" />
        <div className="flex-row-between">
          <Typography.Title>{title}</Typography.Title>
          <Button>Khám phá ngay</Button>
        </div>
      </div>
    </>
  );
};

export default FavoriteCard;
