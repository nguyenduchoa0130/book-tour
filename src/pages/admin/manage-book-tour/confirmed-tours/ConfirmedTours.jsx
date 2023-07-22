import { Descriptions, Table, Tag, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { paymentService } from '../../../../common/services';
import { GlobalActions } from '../../../../common/store/actions';
import AlertUtil from '../../../../common/utils/alert.util';
import moment from 'moment';

const ConfirmedTour = () => {
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
      title: 'Ngày đặt',
      dataIndex: 'NgayDat',
      key: 'ngay-dat',
      render: (val) => moment(val).format('HH:mm A, DD-MM-YYYY'),
    },
    {
      title: 'Trạng thái',
      dataIndex: 'TrangThai',
      key: 'trang-thai',
      render: (val) => <Tag color='#87d068'>{val}</Tag>,
    },
    {
      title: 'Người xác nhận',
      dataIndex: 'NguoiQuanLy',
      key: 'nguoi-thuc-hien',
      render: (val) => val?.HoVaTen,
    },
    {
      title: 'Ngày xử lý',
      dataIndex: 'NgayXuLy',
      key: 'ngay-cap-nhat',
      render: (val) => moment(val).format('HH:mm A, DD-MM-YYYY'),
    },
  ];

  const subCols = [
    {
      title: 'Tên khách hàng',
      dataIndex: 'KhachHang',
      key: 'khach-hang',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'Sdt',
      key: 'sdt',
    },
  ];
  const [dataSource, setDataSource] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        dispatch(GlobalActions.showLoading());
        const data = await paymentService.getBookingTour('thanh-cong');
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
      <Table
        rowKey='id'
        columns={cols}
        dataSource={dataSource}
        expandable={{
          expandedRowRender: (record) => (
            <>
              <Descriptions title='Khách hàng'>
                <Descriptions.Item label='Khách hàng'>
                  {record?.KhachHang?.HoVaTen}
                </Descriptions.Item>
                <Descriptions.Item label='Số điện thoại'>{record?.SdtNguoiDat}</Descriptions.Item>
                <Descriptions.Item label='Email'>{record?.Email}</Descriptions.Item>
              </Descriptions>

              <Descriptions title='Chi tiết thanh toán'>
                <Descriptions.Item label='Mã giao dịch'>{record?.UUID}</Descriptions.Item>
                <Descriptions.Item label='Trạng thái'>
                  <Tag color='#87d068'>Đã thanh toán</Tag>
                </Descriptions.Item>
                <Descriptions.Item label='Vào lúc'>
                  {moment(record?.NgayDat).format('HH:mm A, DD-MM-YYYY')}
                </Descriptions.Item>
              </Descriptions>

              <Descriptions title='Chi tiết tour'>
                <Descriptions.Item label='Tour'>{record?.Tour?.TenTour}</Descriptions.Item>
                <Descriptions.Item label='Địa điểm'>{record?.Tour?.DiaDiem}</Descriptions.Item>
                <Descriptions.Item label='Giá'>
                  <NumericFormat value={record?.Tour?.Gia} thousandSeparator displayType='text' />
                </Descriptions.Item>
                <Descriptions.Item label='Từ ngày'>
                  {moment(record?.Tour?.NgayBatDau).format('DD-MM-YYYY')}
                </Descriptions.Item>
                <Descriptions.Item label='Đến ngày'>
                  {moment(record?.Tour?.NgayKetThuc).format('DD-MM-YYYY')}
                </Descriptions.Item>
                <Descriptions.Item label='Thời lượng'>
                  {record?.Tour?.ChiTietThoiGian}
                </Descriptions.Item>
                <Descriptions.Item label='Xem thêm'>
                  <NavLink to={`/tours/${record?.TourId}`} className='text-primary'>
                    Chi tiết tour
                  </NavLink>
                </Descriptions.Item>
              </Descriptions>

              <Descriptions title='Chi tiết hướng dẫn viên'>
                <Descriptions.Item label='Họ và tên'>
                  {record?.HuongDanVien?.HoVaTen}
                </Descriptions.Item>
                <Descriptions.Item label='Số điện thoại'>
                  {record?.HuongDanVien?.Sdt}
                </Descriptions.Item>
              </Descriptions>

              <div className='py-2'>
                <Typography.Title
                  style={{ fontSize: '16px', fontWeight: 600, paddingBottom: '8px' }}>
                  Danh sách người đi
                </Typography.Title>
                <Table
                  columns={subCols}
                  dataSource={record?.ChiTietThanhToans}
                  pagination={{ pageSize: 3, position: ['bottomCenter'] }}
                />
              </div>
            </>
          ),
        }}
        pagination={{ pageSize: 8 }}
      />
    </>
  );
};

export default ConfirmedTour;
