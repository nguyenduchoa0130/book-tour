import { SearchOutlined } from '@ant-design/icons';
import { Button, DatePicker, Input, Select, Typography } from 'antd';
import React from 'react';
import TourCard from '../../common/components/tour-card';
import provinces from './../../provinces.json';
import styles from './styles.module.css';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const Tours = () => {
  return (
    <>
      <div className={styles['search-container']}>
        <img
          src='https://cdn2.ivivu.com/2023/07/04/10/tour-top-20230703-11.png'
          alt='Search'
          className='w-100 h-100'
        />
        <div className={styles['search']}>
          <Typography.Title className={styles.title}>Bạn muốn đi đâu ?</Typography.Title>
          <Input placeholder='Tìm kiếm' prefix={<SearchOutlined />} size='large' />
          <div className='row w-100 pt-2'>
            <div className='col-md-5 col-xs-12'>
              <DatePicker
                className='w-100'
                size='large'
                placeholder='Chọn ngày bắt đầu'
                format='DD-MM-YYYY'
              />
            </div>
            <div className='col-md-5 col-xs-12'>
              <Select
                showSearch
                allowClear
                className='w-100'
                placeholder='Chọn địa điểm bạn muốn đến'
                size='large'
                options={provinces}
              />
            </div>
            <div className='col-md-2 col-xs-12'>
              <div className='text-center'>
                <Button type='primary' size='large'>
                  Tìm kiếm
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='px-5 py-3'>
        <Typography.Title className='text-uppercase text-center'>Tours</Typography.Title>
        <hr />
        <div className='py-2'>
          <ResponsiveMasonry columnsCountBreakPoints={{ 768: 2, 1024: 3, 1440: 4, 1920: 5 }}>
            <Masonry gutter='16px' className='flex-row-center'>
              <TourCard
                tour={{
                  title: 'Tour Singapore 3N2Đ: Khám Phá Quốc Đảo Sư Tử - Công Viên Fort Canning',
                  price: '9000000',
                }}
              />
              <TourCard
                tour={{
                  title: 'Tour Singapore 3N2Đ: Khám Phá Quốc Đảo Sư Tử - Công Viên Fort Canning',
                  price: '9000000',
                }}
              />
              <TourCard
                tour={{
                  title: 'Tour Singapore 3N2Đ: Khám Phá Quốc Đảo Sư Tử - Công Viên Fort Canning',
                  price: '9000000',
                }}
              />
              <TourCard
                tour={{
                  title: 'Tour Singapore 3N2Đ: Khám Phá Quốc Đảo Sư Tử - Công Viên Fort Canning',
                  price: '9000000',
                }}
              />
              <TourCard
                tour={{
                  title: 'Tour Singapore 3N2Đ: Khám Phá Quốc Đảo Sư Tử - Công Viên Fort Canning',
                  price: '9000000',
                }}
              />
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </>
  );
};

export default Tours;
