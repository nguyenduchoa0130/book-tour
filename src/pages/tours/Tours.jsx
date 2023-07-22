import { SearchOutlined } from '@ant-design/icons';
import { DatePicker, Empty, Form, Input, Select, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TourCard from '../../common/components/tour-card';
import useDebounce from '../../common/hooks/useDebounce';
import { tourService } from '../../common/services';
import { GlobalActions } from '../../common/store/actions';
import { GlobalSelectors } from '../../common/store/selectors';
import AlertUtil from '../../common/utils/alert.util';
import provinces from './../../provinces.json';
import styles from './styles.module.css';

const Tours = () => {
  const [listTours, setListTours] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [place, setPlace] = useState(null);

  const debounceKeyword = useDebounce(keyword, 300);
  const isLoading = useSelector(GlobalSelectors.selectIsLoading);
  const dispatch = useDispatch();

  const getTours = async (keyword, startDate, place) => {
    try {
      dispatch(GlobalActions.showLoading());
      const tours = await tourService.getTours(keyword, startDate, place);
      setListTours(tours);
    } catch (error) {
      AlertUtil.showError(error?.response?.data?.message || error.message);
    } finally {
      dispatch(GlobalActions.hideLoading());
    }
  };

  useEffect(() => {
    getTours(debounceKeyword, startDate?.$d?.toJSON(), place);
  }, [debounceKeyword, startDate, place]);

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
          <Form layout='vertical'>
            <Form.Item className='m-0'>
              <Input
                placeholder='Tìm kiếm'
                prefix={<SearchOutlined />}
                size='large'
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </Form.Item>
            <div className='row pt-3'>
              <div className='col-md-6 col-xs-12 pr-0'>
                <Form.Item className='m-0'>
                  <DatePicker
                    className='w-100'
                    size='large'
                    placeholder='Chọn ngày bạn thể khởi hành'
                    format='DD-MM-YYYY'
                    onChange={(val) => setStartDate(val)}
                  />
                </Form.Item>
              </div>
              <div className='col-md-6 col-xs-12'>
                <Form.Item className='m-0'>
                  <Select
                    showSearch
                    allowClear
                    className='w-100'
                    placeholder='Chọn địa điểm bạn muốn đến'
                    size='large'
                    options={provinces}
                    onChange={(val) => setPlace(val)}
                  />
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
      </div>
      <div className='px-5 py-3' style={{ minHeight: '500px' }}>
        <Typography.Title className='text-uppercase text-center'>Danh Sách Tours</Typography.Title>
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
                    <Empty description='Không tìm thấy kết quả nào' />
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
