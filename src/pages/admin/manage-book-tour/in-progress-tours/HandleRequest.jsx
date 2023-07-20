import { Button, Form, Input, Select, Space, Table } from 'antd';
import React from 'react';
import DateUtils from '../../../../common/utils/date.util';

const HandleRequest = ({ bookingTour, onClose }) => {
  const cols = [
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

  const handleSubmit = (data) => {};

  const handleCancel = () => {};

  const sendToServer = () => {};

  return (
    <>
      <Form layout='vertical'>
        <Form.Item label='Tour'>
          <Input readOnly value={bookingTour?.Tour?.TenTour} />
        </Form.Item>
        <Form.Item label='Địa điểm'>
          <Input readOnly value={bookingTour?.Tour?.DiaDiem} />
        </Form.Item>
        <div className='row'>
          <div className='col-md-6 col-xs-12'>
            <Form.Item label='Từ ngày'>
              <Input
                readOnly
                value={DateUtils.parseDateTime(new Date(bookingTour?.Tour?.NgayBatDau))}
              />
            </Form.Item>
          </div>
          <div className='col-md-6 col-xs-12'>
            <Form.Item label='Từ ngày'>
              <Input
                readOnly
                value={DateUtils.parseDateTime(new Date(bookingTour?.Tour?.NgayKetThuc))}
              />
            </Form.Item>
          </div>
        </div>
        <Form.Item label='Chi tiết thời gian'>
          <Input readOnly value={bookingTour?.Tour?.ChiTietThoiGian} />
        </Form.Item>
        <Form.Item label='Danh sách người đi'>
          <Table
            columns={cols}
            dataSource={bookingTour?.ChiTietThanhToans || []}
            pagination={{ pageSize: 3 }}
          />
        </Form.Item>
        <Form.Item label='Hướng dẫn viên'>
          <Select placeholder='Chọn hướng dẫn viên' />
        </Form.Item>
        <Form.Item>
          <Space size='middle' className='w-100' style={{ justifyContent: 'flex-end' }}>
            <Button type='primary' onClick={onClose}>
              Huỷ
            </Button>
            <Button type='primary' danger>
              Từ chối
            </Button>
            <Button type='primary' className='btn-success'>
              Xác nhận
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};

export default HandleRequest;
