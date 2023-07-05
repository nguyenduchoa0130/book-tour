import React from 'react';
import { Carousel } from 'antd';
import styles from './styles.module.css';

const PromotionCarousel = () => {
  return (
    <>
      <div className={styles.carousel}>
        <Carousel autoplay></Carousel>
      </div>
    </>
  );
};

export default PromotionCarousel;
