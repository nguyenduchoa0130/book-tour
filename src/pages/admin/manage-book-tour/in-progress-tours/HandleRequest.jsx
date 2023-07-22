import { Button, Descriptions, Form, Select, Space, Table, Tag } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { paymentService, userServices } from '../../../../common/services';
import { GlobalActions } from '../../../../common/store/actions';
import AlertUtil from '../../../../common/utils/alert.util';
import { UserSelectors } from '../../../../common/store/selectors';

const HandleRequest = ({ bookingTour, onClose, onAfterHandling }) => {
  const [tourGuides, setTourGuides] = useState([]);
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: { tourGuide: null } });
  const user = useSelector(UserSelectors.selectUser);

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
      NguoiQuanLyId: user?.id,
    };
    try {
      dispatch(GlobalActions.showLoading());
      await paymentService.updatePayment(bookingTour.id, payload);
      AlertUtil.showSuccess('Xử lý thành công');
      onAfterHandling();
      onClose();
    } catch (error) {
      AlertUtil.showError(error?.response?.data?.message || error.message);
    } finally {
      dispatch(GlobalActions.hideLoading());
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
          NguoiQuanLyId: user?.id,
        };
        try {
          dispatch(GlobalActions.showLoading());
          await paymentService.updatePayment(bookingTour.id, payload);
          AlertUtil.showSuccess('Xử lý thành công');
          onAfterHandling();
          onClose();
        } catch (error) {
          AlertUtil.showError(error?.response?.data?.message || error.message);
        } finally {
          dispatch(GlobalActions.hideLoading());
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
        <div className='bg-light'>
          <Descriptions title='' className='p-3'>
            <Descriptions.Item label='Tên tour'>{bookingTour?.Tour?.TenTour}</Descriptions.Item>
            <Descriptions.Item label='Địa điểm'>{bookingTour?.Tour?.DiaDiem}</Descriptions.Item>
            <Descriptions.Item label='Từ ngày'>
              {moment(bookingTour?.NgayBatDau).format('DD-MM-YYYY')}
            </Descriptions.Item>
            <Descriptions.Item label='Đến ngày'>
              {moment(bookingTour?.NgayKetThuc).format('DD-MM-YYYY')}
            </Descriptions.Item>
            <Descriptions.Item label='Thời lượng'>
              {bookingTour?.Tour?.ChiTietThoiGian}
            </Descriptions.Item>
          </Descriptions>
        </div>

        <div className='pt-2'>
          <Descriptions title='Thông tin thanh toán' column={1}>
            <Descriptions.Item label='Mã giao dịch'>{bookingTour?.UUID}</Descriptions.Item>
            <Descriptions.Item label='Trạng thái'>
              <Tag color='#87d068'>Đã thanh toán</Tag>
            </Descriptions.Item>
            <Descriptions.Item label='Vào lúc'>
              {moment(bookingTour?.NgayDat).format('HH:mm A, DD-MM-YYYY')}
            </Descriptions.Item>
          </Descriptions>
        </div>

        <div className='pt-2'>
          <Form.Item label='Danh sách người đi' className='mb-0'>
            <Table
              columns={cols}
              dataSource={bookingTour?.ChiTietThanhToans || []}
              pagination={{ pageSize: 3 }}
            />
          </Form.Item>
        </div>

        <Form.Item
          label='Hướng dẫn viên'
          name='tourGuide'
          validateStatus={errors.tourGuide ? 'error' : ''}
          help={errors.tourGuide && errors.tourGuide.message}>
          <Controller
            name='tourGuide'
            control={control}
            rules={{ required: 'Vui lòng chọn hướng dẫn viên' }}
            render={({ field }) => (
              <Select
                {...field}
                options={tourGuides.map((item) => ({ label: item.HoVaTen, value: item.id }))}
                placeholder='Chọn hướng dẫn viên'
              />
            )}
          />
        </Form.Item>

        <Form.Item className='mb-0'>
          <div className='flex-row-between'>
            <Button type='dashed' onClick={onClose} htmlType='button'>
              Huỷ
            </Button>
            <Space size='middle' className='w-100' style={{ justifyContent: 'flex-end' }}>
              <Button type='primary' danger htmlType='button' onClick={handleCancel}>
                Từ chối
              </Button>
              <Button type='primary' htmlType='submit'>
                Xác nhận
              </Button>
            </Space>
          </div>
        </Form.Item>
      </Form>
    </>
  );
};

export default HandleRequest;
