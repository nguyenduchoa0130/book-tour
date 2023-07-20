import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { UserSelectors } from '../../common/store/selectors';

import UpdateUserFormModal from '../../common/components/update-user-form-modal';
import styles from './styles.module.css';

const PersonalInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useSelector(UserSelectors.selectUser);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmitForm = (data) => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles['personal-info']}>
        <h2 className='pb-4 text-center text-uppercase'>Thông Tin Người dùng</h2>
        <div className='py-4 px-5 w-50 border rounded'>
          <div className='form-group'>
            <div className='flex-row-between'>
              <h6>Tài khoản:</h6>
              <span>{user.TenTaiKhoan}</span>
            </div>
          </div>
          <div className='form-group'>
            <div className='flex-row-between'>
              <h6>Mật khẩu:</h6>
              <span>********</span>
            </div>
          </div>
          <div className='form-group'>
            <div className='flex-row-between'>
              <h6>Họ và tên:</h6>
              <span>{user.HoVaTen}</span>
            </div>
          </div>
          <div className='form-group'>
            <div className='flex-row-between'>
              <h6>Email:</h6>
              <span>{user.Email}</span>
            </div>
          </div>
          <div className='form-group'>
            <div className='flex-row-between'>
              <h6>Số điện thoại:</h6>
              <span>{user.Sdt}</span>
            </div>
          </div>
          <div className='form-group'>
            <div className='flex-row-between'>
              <h6>Địa chỉ:</h6>
              <span>{user.DiaChi}</span>
            </div>
          </div>
          <div className='form-group text-center'>
            <Button type='primary' onClick={showModal} size='large'>
              Cập nhật
            </Button>
          </div>
        </div>
      </div>
      <Modal
        open={isModalOpen}
        title='Cập nhật thông tin'
        centered
        onCancel={handleCancel}
        footer={null}
        width={600}>
        <UpdateUserFormModal user={{ ...user }} onCancel={handleCancel} />
      </Modal>
    </>
  );
};

export default PersonalInfo;
