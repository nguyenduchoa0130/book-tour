import { Tabs, Typography } from 'antd';
import React, { useState } from 'react';
import ConfirmedTours from './confirmed-tours';
import DeletedTours from './deleted-tours';
import InProgressTours from './in-progress-tours';

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
