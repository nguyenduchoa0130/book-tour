import { SearchOutlined } from '@ant-design/icons';
import { DatePicker, Empty, Form, Input, Select, Typography } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TourCard from '../../../common/components/tour-card';
import { RolesEnum } from '../../../common/enums';
import { tourService } from '../../../common/services';
import { GlobalActions } from '../../../common/store/actions';
import { GlobalSelectors, UserSelectors } from '../../../common/store/selectors';
import AlertUtil from '../../../common/utils/alert.util';
import provinces from './../../../provinces.json';
import styles from './styles.module.css';

const ListTours = () => {
  const [listTours, setListTours] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [place, setPlace] = useState(null);
  const dispatch = useDispatch();
  const isLoading = useSelector(GlobalSelectors.selectIsLoading);
  const currentUser = useSelector(UserSelectors.selectUser);

  const displayTours = useMemo(() => {
    if (!keyword.trim() && !startDate && !place) {
      return listTours;
    }
    return listTours.filter((tour) => {
      const keywordMatch = tour.TenTour.toLowerCase().includes(keyword.toLowerCase());
      const startDateMatch =
        !startDate || new Date(tour.NgayBatDau) >= new Date(startDate?.$d?.toJSON());
      const placeMatch = !place || tour.DiaDiem.toLowerCase().includes(place.toLowerCase());

      return keywordMatch && startDateMatch && placeMatch;
    });
  }, [listTours.length, keyword, startDate, place]);

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
      <Typography.Title className='text-uppercase'>Danh sách tour</Typography.Title>
      <hr />
      <div className='py-2'>
        <Form layout='vertical'>
          <Form.Item className='m-0'>
            <Input
              placeholder='Tìm kiếm'
              prefix={<SearchOutlined />}
              size='large'
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              allowClear
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
      <hr />
      <div className='py-2'>
        {!isLoading ? (
          <>
            {displayTours.length ? (
              <>
                <div className={styles['tours-grid']}>
                  {displayTours.map((tour) => (
                    <TourCard
                      key={`tour-${tour.id}`}
                      tour={tour}
                      isAdmin={currentUser.VaiTro === RolesEnum.NguoiQuanLy}
                    />
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className='flex-row-center w-100 h-100'>
                  <Empty description='Danh sách tour trống' />
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
