import { Tabs, Typography } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import InProgressTours from './in-progress-tours';
import ConfirmedTours from './confirmed-tours';
import RequestCancelationTours from './request-cancelation-tours/RequestCancelationTours';
import DeletedTours from './deleted-tours';

const ManageBookTour = () => {
  const [activeTab, setActiveTab] = useState('cho-xac-nhan');
  const tabs = [
    {
      key: 'cho-xac-nhan',
      label: 'Chờ Xác Nhận',
      children: <InProgressTours />,
    },
    {
      key: 'thanh-cong',
      label: `Thành Công`,
      children: <ConfirmedTours />,
    },
    {
      key: 'yeu-cau-huy',
      label: `Yêu Cầu Huỷ`,
      children: <RequestCancelationTours />,
    },
    {
      key: 'da-huy',
      label: `Đã Huỷ`,
      children: <DeletedTours />,
    },
  ];
  // Methods
  const handleChangeTab = (e) => {
    setActiveTab(e.key);
  };
  return (
    <>
      <Typography.Title>Quản lý đặt tour</Typography.Title>
      <hr />
      <Tabs defaultActiveKey={activeTab} items={tabs} centered onChange={handleChangeTab} />
    </>
  );
};

export default ManageBookTour;
