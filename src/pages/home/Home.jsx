import { Space, Typography } from 'antd';
import React from 'react';
import HomeCarousel from './home-carousel';
import styles from './styles.module.css';
import { homeServiceConfigs, homeFavoritePlaceConfigs } from './home.configs';
import ServiceCard from '../../common/components/service-card';

const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <HomeCarousel />
        <div className="p-4">
          <Typography.Title level={2} className="text-center">
            Dịch Vụ
          </Typography.Title>
          <div className="flex-row-center py-3">
            <Space size="large" direction="horizontal">
              {homeServiceConfigs.map((config, idx) => (
                <ServiceCard
                  key={`service-${idx}`}
                  img={config.img}
                  title={config.title}
                  width="400px"
                  height="450px"
                />
              ))}
            </Space>
          </div>
        </div>
        <div className="p-2">
          <Typography.Title level={2} className="text-center">
            Điểm đến yêu thích
          </Typography.Title>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Home;
