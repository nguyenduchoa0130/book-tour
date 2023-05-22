import React from 'react';
import './styles.css';
import PromotionSection from './promotion-section/PromotionSection';
import { configs } from './configs';

const Home = () => {
  return (
    <section className='home'>
      {configs.map((config, idx) => (
        <div key={`section-${idx}`} className='home__section'>
          <PromotionSection
            primaryTitle={config.primaryTitle}
            secondaryTitle={config.secondaryTitle}
            cards={config.cards}
          />
        </div>
      ))}
    </section>
  );
};

export default Home;

