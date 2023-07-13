import { Button, Carousel, Typography } from 'antd';
import { carouselConfigs } from './carousel.configs';
import styles from './styles.module.css';

const HomeCarousel = () => {
  return (
    <div className={styles['carousel-container']}>
      <Carousel autoplay>
        {carouselConfigs.map((config, idx) => (
          <div key={`carousel-${idx}`} className='position-relative'>
            <div className='center-position'>
              <Typography.Title level={1} className='text-center' style={{ color: '#fff' }}>
                {config.sologan}
              </Typography.Title>
            </div>
            <img src={config.img} alt={config.sologan} />
          </div>
        ))}
      </Carousel>
      <div className='center-position mt-5'>
        <Button size='large'>
          <a href='#homeServices'>Khám phá ngay</a>
        </Button>
      </div>
    </div>
  );
};

export default HomeCarousel;
