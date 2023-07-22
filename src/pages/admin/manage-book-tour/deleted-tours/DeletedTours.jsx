import { Descriptions, Table, Tag, Typography } from 'antd';
import moment from 'moment';
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
      title: 'Ngày đặt',
      dataIndex: 'NgayDat',
      key: 'ngay-dat',
      render: (val) => moment(val).format('HH:mm A, DD-MM-YYYY'),
    },
    {
      title: 'Trạng thái',
      dataIndex: 'TrangThai',
      key: 'trang-thai',
      render: (val) => <Tag color='#f50'>{val}</Tag>,
    },
    {
      title: 'Người huỷ',
      dataIndex: 'NguoiQuanLy',
      key: 'nguoi-huy',
      render: (val) => val?.HoVaTen,
    },
    {
      title: 'Ngày huỷ',
      dataIndex: 'NgayXuLy',
      key: 'ngay-cap-nhat',
      render: (val) => moment(val).format('HH:mm A, DD-MM-YYYY'),
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
      <Table
        rowKey='id'
        columns={cols}
        dataSource={dataSource}
        pagination={{ pageSize: 8 }}
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
                  <Tag color='#87d068'>Đang hoàn trả tiền cho người dùng</Tag>
                </Descriptions.Item>
                <Descriptions.Item label='Vào lúc'>
                  {moment(record?.NgayDat).format('HH:mm A, DD-MM-YYYY')}
                </Descriptions.Item>
              </Descriptions>

              <Descriptions title='Chi tiết đặt tour'>
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
              </Descriptions>

              <Descriptions title='Lý do huỷ'>
                <Typography.Text>
                  <em className='text-danger px-4'>{record?.LyDo}</em>
                </Typography.Text>
              </Descriptions>
            </>
          ),
        }}
      />
    </>
  );
};

export default DeletedTour;
