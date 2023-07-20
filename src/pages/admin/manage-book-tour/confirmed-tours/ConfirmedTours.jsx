import { Descriptions, Table, Tag, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { useDispatch } from 'react-redux';
import { paymentService } from '../../../../common/services';
import { GlobalActions } from '../../../../common/store/actions';
import AlertUtil from '../../../../common/utils/alert.util';
import { NavLink } from 'react-router-dom';

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
      render: (val) => new Date(val).toLocaleString(),
    },
    {
      title: 'Trạng thái',
      dataIndex: 'TrangThai',
      key: 'trang-thai',
      render: (val) => <Tag color='#87d068'>{val}</Tag>,
    },
    {
      title: 'Hướng dẫn viên',
      dataIndex: 'HuongDanVien',
      key: 'huong-dan-vien',
      render: (val) => val.HoVaTen,
    },
    {
      title: 'Ngày xác nhận',
      dataIndex: 'NgayXuLy',
      key: 'ngay-cap-nhat',
      render: (val) => new Date(val).toLocaleString(),
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
              </Descriptions>
              <Descriptions title='Chi tiết tour'>
                <Descriptions.Item label='Tour'>{record?.Tour?.TenTour}</Descriptions.Item>
                <Descriptions.Item label='Địa điểm'>{record?.Tour?.DiaDiem}</Descriptions.Item>
                <Descriptions.Item label='Giá'>
                  <NumericFormat value={record?.Tour?.Gia} thousandSeparator displayType='text' />
                </Descriptions.Item>
                <Descriptions.Item label='Từ ngày'>
                  {new Date(record?.Tour?.NgayBatDau).toLocaleDateString()}
                </Descriptions.Item>
                <Descriptions.Item label='Đến ngày'>
                  {new Date(record?.Tour?.NgayKetThuc).toLocaleDateString()}
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
                <Descriptions.Item label='Hướng dẫn viên'>
                  {record?.HuongDanVien?.HoVaTen}
                </Descriptions.Item>
                <Descriptions.Item label='Số điện thoại'>
                  {record?.HuongDanVien?.Sdt}
                </Descriptions.Item>
              </Descriptions>
            </>
          ),
        }}
        pagination={{ pageSize: 8 }}
      />
    </>
  );
};

export default ConfirmedTour;
