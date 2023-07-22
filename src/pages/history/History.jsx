import { Descriptions, Divider, Empty, Table, Tag, Typography } from 'antd';
import moment from 'moment';
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
  'Đã Huỷ': '#f50',
};

const History = () => {
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
      title: 'Giá',
      dataIndex: 'SoTien',
      key: 'so-tien',
      render: (val) => <NumericFormat value={val} thousandSeparator displayType='text' />,
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
      render: (val) => <Tag color={tagColorMap[val]}>{val}</Tag>,
    },
    {
      title: 'HDV',
      dataIndex: 'HuongDanVien',
      key: 'huong-dan-vien',
      render: (val) => val?.HoVaTen,
    },
    {
      title: 'Ngày xử lý yêu cầu',
      dataIndex: 'NgayXuLy',
      key: 'ngay-cap-nhat',
      render: (val) => val && moment(val).format('HH:mm A, DD-MM-YYYY'),
    },
  ];

  const subTableCols = [
    {
      title: 'Họ và tên',
      dataIndex: 'KhachHang',
      key: 'sub-khach-hang',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'Sdt',
      key: 'sub-sdt',
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
              <Table
                rowKey='id'
                columns={columns}
                dataSource={paymentHistories}
                pagination={{ pageSize: 8 }}
                expandable={{
                  expandedRowRender: (record) => (
                    <>
                      <Descriptions title='Chi tiết tour'>
                        <Descriptions.Item label='Tour'>{record?.Tour?.TenTour}</Descriptions.Item>
                        <Descriptions.Item label='Địa điểm'>
                          {record?.Tour?.DiaDiem}
                        </Descriptions.Item>
                        <Descriptions.Item label='Giá'>
                          <NumericFormat
                            value={record?.Tour?.Gia}
                            thousandSeparator
                            displayType='text'
                          />
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
                      <Descriptions title='Chi tiết thanh toán'>
                        <Descriptions.Item label='Mã giao dịch'>{record?.UUID}</Descriptions.Item>
                        <Descriptions.Item label='Trạng thái'>
                          <Tag color='#87d068'>Đã thanh toán</Tag>
                        </Descriptions.Item>
                        <Descriptions.Item label='Vào ngày'>
                          {moment(record?.NgayDat).format('HH:mm A, DD-MM-YYYY')}
                        </Descriptions.Item>
                      </Descriptions>
                      {record.TrangThai === 'Đã Huỷ' ? (
                        <>
                          <Descriptions title='Lý do huỷ'>
                            <Typography.Text>
                              <em className='text-danger px-4'>{record?.LyDo}</em>
                            </Typography.Text>
                          </Descriptions>
                        </>
                      ) : (
                        <>
                          <Descriptions title='Hướng dẫn viên'>
                            <Descriptions.Item label='Họ và tên'>
                              {record?.HuongDanVien?.HoVaTen}
                            </Descriptions.Item>
                            <Descriptions.Item label='Số điện thoại'>
                              {record?.HuongDanVien?.Sdt}
                            </Descriptions.Item>
                          </Descriptions>
                          <Typography.Title level={5}>Danh sách người đi</Typography.Title>
                          <Table
                            columns={subTableCols}
                            dataSource={record?.ChiTietThanhToans}
                            pagination={{ pageSize: 3 }}
                          />
                        </>
                      )}
                    </>
                  ),
                }}
              />
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
