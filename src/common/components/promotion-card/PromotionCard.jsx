import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.module.css';

const PromotionCard = ({ title, subTitle, imgSrc, alt = 'Promotion Image', isBlurImg = false }) => {
  return (
    <>
      <div className={styles.card}>
        <div
          className={styles.card__overlay}
          style={{
            backgroundColor: isBlurImg ? 'rgba(0, 0, 0, 0.25)' : 'unset'
          }}>
          <h3>{title}</h3>
          <span>{subTitle}</span>
        </div>
        <img className={styles.card__img} src={imgSrc} alt={alt} />
      </div>
    </>
  );
};

PromotionCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  isBlurImg: PropTypes.bool
};

export default PromotionCard;
