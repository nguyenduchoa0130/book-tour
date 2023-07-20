import { Button, Divider, Empty, Space, Table, Tag, Tooltip, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { paymentService } from '../../common/services';
import { GlobalActions } from '../../common/store/actions';
import { GlobalSelectors, UserSelectors } from '../../common/store/selectors';
import AlertUtil from '../../common/utils/alert.util';

const tagColorMap = {
  'Chờ Xác Nhận': '#108ee9',
  'Thành Công': '#87d068',
  'Yêu Cầu Huỷ': 'magenta',
  'Không Thành Công': 'red',
};

const History = () => {
  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Số thẻ',
      dataIndex: 'SoThe',
      key: 'so-the',
    },
    {
      title: 'Tour',
      dataIndex: 'Tour',
      key: 'ten-tour',
      render: (val) => val.TenTour,
    },
    {
      title: 'Tổng tiền',
      dataIndex: 'SoTien',
      key: 'so-tien',
      render: (val) => <NumericFormat value={val} thousandSeparator displayType='text' />,
    },
    {
      title: 'Thời gian',
      dataIndex: 'Tour',
      key: 'thoi-gian',
      render: (val) => val.ChiTietThoiGian,
    },
    {
      title: 'Ngày đặt',
      dataIndex: 'NgayDat',
      key: 'ngay-dat',
      render: (val) => new Date(val).toLocaleString(),
    },
    {
      title: 'Trạng thái',
      dataIndex: 'TrangThai',
      key: 'trang-thai',
      render: (val) => <Tag color={tagColorMap[val]}>{val}</Tag>,
    },
    {
      title: 'Hướng dẫn viên',
      dataIndex: 'Tour',
      key: 'huong-dan-vien',
      render: (val) => val.HuongDanVien && val.HuongDanVien.HoVaTen,
    },
    {
      title: '',
      key: 'action',
      render: (_, record) => (
        <Space size='middle' direction='horizontal'>
          <Tooltip title='Chi tiết tour'>
            <NavLink to={`/tours/${record.TourId}`}>
              <Button type='dashed' className='flex-row-center' size='small'>
                Chi tiết
              </Button>
            </NavLink>
          </Tooltip>
        </Space>
      ),
    },
  ];
  const dispatch = useDispatch();
  const [paymentHistories, setPaymentHistories] = useState([]);
  const isLoading = useSelector(GlobalSelectors.selectIsLoading);
  const user = useSelector(UserSelectors.selectUser);

  useEffect(() => {
    const getPaymentHistories = async () => {
      try {
        dispatch(GlobalActions.showLoading());
        const data = await paymentService.getPaymentHistories(+user.id);
        setPaymentHistories(data);
      } catch (error) {
        AlertUtil.showError(error?.response?.data?.message || error.message);
      } finally {
        dispatch(GlobalActions.hideLoading());
      }
    };
    getPaymentHistories();
  }, []);

  return (
    <>
      <div className='px-5 py-3'>
        <Typography.Title className='text-center text-uppercase'>lịch sử đặt tour</Typography.Title>
        <Divider />
        {!isLoading ? (
          <>
            {paymentHistories.length ? (
              <Table columns={columns} dataSource={paymentHistories} />
            ) : (
              <div className='flex-row-center h-100'>
                <Empty />
              </div>
            )}
          </>
        ) : null}
      </div>
    </>
  );
};

export default History;
