import { Divider, Space, Table, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { paymentService } from '../../common/services';
import { GlobalActions } from '../../common/store/actions';
import { UserSelectors } from '../../common/store/selectors';
import AlertUtil from '../../common/utils/alert.util';
import DateUtils from '../../common/utils/date.util';

const TourGuide = () => {
  const [assignedTours, setAssignedTours] = useState([]);
  const user = useSelector(UserSelectors.selectUser);
  const dispatch = useDispatch();
  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Tour',
      dataIndex: 'Tour',
      key: 'ten-tour',
      render: (val) => val.TenTour,
    },
    {
      title: 'Địa Điểm',
      dataIndex: 'Tour',
      key: 'ten-tour',
      render: (val) => val.DiaDiem,
    },
    {
      title: 'Thời gian',
      dataIndex: 'Tour',
      key: 'thoi-gian',
      render: (val) => val.ChiTietThoiGian,
    },
    {
      title: 'Từ ngày',
      dataIndex: 'Tour',
      render: (val) => DateUtils.parseDateTime(val.NgayBatDau),
    },
    {
      title: 'Đến ngày',
      dataIndex: 'Tour',
      render: (val) => DateUtils.parseDateTime(val.NgayKetThuc),
    },
  ];

  const subTableCols = [
    {
      title: 'Khách hàng',
      dataIndex: 'KhachHang',
      key: 'sub-khach-hang',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'Sdt',
      key: 'sub-sdt',
    },
  ];

  useEffect(() => {
    const getData = async () => {
      try {
        dispatch(GlobalActions.showLoading());
        const data = await paymentService.getAssignedTours(user.id);
        setAssignedTours(data);
      } catch (error) {
        AlertUtil.showError(error?.response?.data?.message || error.message);
      } finally {
        dispatch(GlobalActions.hideLoading());
      }
    };
    getData();
  }, []);

  return (
    <>
      <div className='p-3'>
        <Typography.Title className='text-uppercase text-center'>lịch đi tour</Typography.Title>
        <Divider />
        <Table
          rowKey='id'
          columns={columns}
          dataSource={assignedTours}
          expandable={{
            expandedRowRender: (record) => (
              <>
                <Space size='middle' direction='vertical' className='ml-3'>
                  <Typography.Text>
                    <span className='pr-2'>Chi tiết:</span>
                    <NavLink to={`/tours/${record.TourId}`}>{record?.Tour?.TenTour}</NavLink>
                  </Typography.Text>
                  <Typography.Text>
                    Danh sách người đi: <strong>{record?.ChiTietThanhToans?.length}</strong>
                  </Typography.Text>
                </Space>
                <Table
                  columns={subTableCols}
                  dataSource={record?.ChiTietThanhToans}
                  pagination={{ pageSize: 3, position: ['bottomCenter'] }}
                />
              </>
            ),
          }}
          pagination={{
            pageSize: 8,
          }}
          bordered
        />
      </div>
    </>
  );
};

export default TourGuide;
