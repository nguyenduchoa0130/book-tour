import { SearchOutlined } from '@ant-design/icons';
import { Button, DatePicker, Empty, Input, Select, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import TourCard from '../../common/components/tour-card';
import provinces from './../../provinces.json';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalActions } from '../../common/store/actions';
import { GlobalSelectors } from '../../common/store/selectors';
import AlertUtil from '../../common/utils/alert.util';
import { tourService } from '../../common/services';

const Tours = () => {
  const [listTours, setListTours] = useState([]);
  const isLoading = useSelector(GlobalSelectors.selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const getTours = async () => {
      try {
        dispatch(GlobalActions.showLoading());
        const tours = await tourService.getTours();
        setListTours(tours);
      } catch (error) {
        AlertUtil.showError(error?.response?.data?.message || error.message);
      } finally {
        dispatch(GlobalActions.hideLoading());
      }
    };
    getTours();
  }, []);

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
          {!isLoading ? (
            <>
              {listTours.length ? (
                <>
                  <div className={styles['tours-grid']}>
                    {listTours.map((tour) => (
                      <TourCard key={`tour-${tour.id}`} tour={tour} />
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className='flex-row-center w-100 h-100'>
                    <Empty />
                  </div>
                </>
              )}
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Tours;
