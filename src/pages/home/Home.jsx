import React from 'react';
import './styles.css';
import PromotionSection from './promotion-section/PromotionSection';
import { configs } from './configs';
/* dùng để phân chia một cách logic một trang, một article.
     configs là hàm map để lặp qua mảng 
    mỗi phần tử trong mảng là 1 div tạo ra lớp section */
const Home = () => {
  return (
    <section className="home">
      {configs.map((config, idx) => (
        <div key={`section-${idx}`} className="home__section">
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
