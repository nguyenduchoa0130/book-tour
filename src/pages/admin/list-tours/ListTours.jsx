import { SearchOutlined } from '@ant-design/icons';
import { Empty, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TourCard from '../../../common/components/tour-card';
import { tourService } from '../../../common/services';
import { GlobalActions } from '../../../common/store/actions';
import { GlobalSelectors } from '../../../common/store/selectors';
import AlertUtil from '../../../common/utils/alert.util';
import styles from './styles.module.css';

const ListTours = () => {
  const [listTours, setListTours] = useState([]);
  const dispatch = useDispatch();
  const isLoading = useSelector(GlobalSelectors.selectIsLoading);

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
      <h2>Danh sách tour</h2>
      <hr />
      <div className='py-2'>
        <Input prefix={<SearchOutlined />} size='large' placeholder='Tìm kiếm' />
      </div>
      <div className='py-2'>
        {!isLoading ? (
          <>
            {listTours.length ? (
              <>
                <div className={styles['tours-grid']}>
                  {listTours.map((tour) => (
                    <TourCard key={`tour-${tour.id}`} tour={tour} isAdmin={true} />
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
    </>
  );
};

export default ListTours;
