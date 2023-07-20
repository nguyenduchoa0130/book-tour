import { Button, Form, Input, Select, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { paymentService, userServices } from '../../../../common/services';
import { GlobalActions } from '../../../../common/store/actions';
import AlertUtil from '../../../../common/utils/alert.util';
import DateUtils from '../../../../common/utils/date.util';

const HandleRequest = ({ bookingTour, onClose, onAfterHandling }) => {
  const [tourGuides, setTourGuides] = useState([]);
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: { tourGuide: null } });

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

  const handleConfirmPayment = async (data) => {
    const payload = {
      HuongDanVienId: data.tourGuide,
      isSuccess: true,
      LyDo: null,
    };
    try {
      await paymentService.updatePayment(bookingTour.id, payload);
      AlertUtil.showSuccess('Xử lý thành công');
      onAfterHandling();
      onClose();
    } catch (error) {
      AlertUtil.showError(error?.response?.data?.message || error.message);
    }
  };

  const handleCancel = async () => {
    const { value: reason, isConfirmed } = await Swal.fire({
      title: 'Xác Nhận Huỷ Đơn',
      input: 'textarea',
      inputLabel: 'Lý do',
      inputPlaceholder: 'Nhập lý do huỷ',
      showCancelButton: true,
    });

    if (isConfirmed) {
      if (!reason) {
        return AlertUtil.showWarning('Vui lòng điền lý do huỷ !!!');
      } else {
        const payload = {
          isSuccess: false,
          LyDo: reason,
        };
        try {
          await paymentService.updatePayment(bookingTour.id, payload);
          AlertUtil.showSuccess('Xử lý thành công');
          onAfterHandling();
          onClose();
        } catch (error) {
          AlertUtil.showError(error?.response?.data?.message || error.message);
        }
      }
    }
  };

  useEffect(() => {
    const getTourGuides = async () => {
      try {
        dispatch(GlobalActions.showLoading());
        const tourGuides = await userServices.getTourGuides();
        setTourGuides(tourGuides);
      } catch (error) {
        AlertUtil.showError(error?.response?.data?.message || error.message);
      } finally {
        dispatch(GlobalActions.hideLoading());
      }
    };
    getTourGuides();

    return () => {
      reset();
    };
  }, []);

  return (
    <>
      <Form layout='vertical' onFinish={handleSubmit(handleConfirmPayment)}>
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

        <Form.Item
          label='Hướng dẫn viên'
          name='tourGuide'
          validateStatus={errors.tourGuide ? 'error' : ''}
          help={errors.tourGuide && errors.tourGuide.message}>
          <Controller
            name='tourGuide'
            control={control}
            rules={{ required: 'Không được để trống !!' }}
            render={({ field }) => (
              <Select
                {...field}
                options={tourGuides.map((item) => ({ label: item.HoVaTen, value: item.id }))}
                placeholder='Chọn hướng dẫn viên'
              />
            )}
          />
        </Form.Item>

        <Form.Item>
          <Space size='middle' className='w-100' style={{ justifyContent: 'flex-end' }}>
            <Button type='primary' onClick={onClose} htmlType='button'>
              Huỷ
            </Button>
            <Button type='primary' danger htmlType='button' onClick={handleCancel}>
              Từ chối
            </Button>
            <Button type='primary' className='btn-success' htmlType='submit'>
              Xác nhận
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};

export default HandleRequest;
