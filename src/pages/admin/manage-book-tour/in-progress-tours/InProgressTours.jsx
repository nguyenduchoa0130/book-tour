import { Button, Modal, Space, Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { useDispatch } from 'react-redux';
import { paymentService } from '../../../../common/services';
import { GlobalActions } from '../../../../common/store/actions';
import AlertUtil from '../../../../common/utils/alert.util';
import HandleRequest from './HandleRequest';
import moment from 'moment';

const InProgressTours = () => {
  const [dataSource, setDataSource] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpenModal = (record) => {
    setSelectedBooking(record);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedBooking(null);
    setIsOpen(false);
  };

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
      key: 'dia-diem',
      render: (val) => val?.DiaDiem,
    },
    {
      title: 'Ngày đặt',
      dataIndex: 'NgayDat',
      key: 'ngay-dat',
      render: (val) => moment(val).format('HH:mm A, DD-MM-YYYY'),
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
          <Button type='primary' onClick={() => handleOpenModal(record)}>
            Xử lý
          </Button>
        </Space>
      ),
    },
  ];

  const getData = async () => {
    try {
      dispatch(GlobalActions.showLoading());
      const data = await paymentService.getBookingTour('cho-xac-nhan');
      setDataSource(data);
    } catch (error) {
      AlertUtil.showError(error?.response?.data?.message || error.message);
    } finally {
      dispatch(GlobalActions.hideLoading());
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Table columns={cols} dataSource={dataSource} pagination={{ pageSize: 8 }} />
      <Modal
        open={isOpen}
        centered
        title='Xử lý đơn đặt tour'
        footer={null}
        onCancel={handleCloseModal}
        width={700}
        destroyOnClose
        zIndex='999'>
        <HandleRequest
          bookingTour={selectedBooking}
          onClose={handleCloseModal}
          onAfterHandling={() => getData()}
        />
      </Modal>
    </>
  );
};

export default InProgressTours;
