import { Button, Space, Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { useDispatch } from 'react-redux';
import { paymentService } from '../../../../common/services';
import { GlobalActions } from '../../../../common/store/actions';
import AlertUtil from '../../../../common/utils/alert.util';

const DeletedTour = () => {
  const cols = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Người đặt',
      dataIndex: 'KhachHang',
      key: 'nguoi-dat',
      render: (val) => val?.HoVaTen,
    },
    {
      title: 'Tour',
      dataIndex: 'Tour',
      key: 'ten-tour',
      render: (val) => val?.TenTour,
    },
    {
      title: 'Giá',
      dataIndex: 'SoTien',
      key: 'gia',
      render: (val) => <NumericFormat value={val} thousandSeparator displayType='text' />,
    },
    {
      title: 'Địa điểm',
      dataIndex: 'Tour',
      key: 'gia',
      render: (val) => val?.DiaDiem,
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
      render: (val) => <Tag color='#108ee9'>{val}</Tag>,
    },
    {
      title: '',
      key: 'actions',
      render: (_, record) => (
        <Space direction='horizontal' size='middle'>
          <Button type='primary'>Xử lý</Button>
        </Space>
      ),
    },
  ];
  const [dataSource, setDataSource] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        dispatch(GlobalActions.showLoading());
        const data = await paymentService.getBookingTour('da-huy');
        setDataSource(data);
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
      <Table columns={cols} dataSource={dataSource} />
    </>
  );
};

export default DeletedTour;
