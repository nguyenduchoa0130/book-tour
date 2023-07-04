import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import PromotionCard from '../../../common/components/promotion-card/PromotionCard';

const PromotionSection = ({ primaryTitle, secondaryTitle, cards }) => {
  return (
    <>
      <div className="promotion-section">
        <h2>{primaryTitle}</h2>
        <h6>{secondaryTitle}</h6>
        <div className="promotion-section-cards">
          {cards.map((card, idx) => (
            <PromotionCard
              title={card.title}
              subTitle={card.subTitle}
              key={`card-${idx}`}
              imgSrc={card.imgSrc}
              alt={card.alt}
            />
          ))}
        </div>
      </div>
    </>
  );
};

PromotionSection.propTypes = {
  primaryTitle: PropTypes.string.isRequired,
  secondaryTitle: PropTypes.string.isRequired,
  cards: PropTypes.array
};

export default PromotionSection;
