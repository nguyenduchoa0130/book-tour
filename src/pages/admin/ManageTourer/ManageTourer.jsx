import React from 'react';
import './style.css'
import { Space, Table, Input, Select, Button } from 'antd';

const ManageTourer = () => {
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Tên tour',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Điểm đến',
      dataIndex: 'addressTo',
      key: 'addressTo',
    },
    {
      title: 'Điểm đón',
      dataIndex: 'addressFrom',
      key: 'addressFrom',
    },
    {
      title: 'Người hướng dẫn',
      key: 'tourGuide',
      render: (_, record) => (
        <Space size="middle">
          {record.tourGuide ? <div>{record.tourGuide}</div> : <Select
            showSearch
            placeholder="Chọn người hướng dẫn"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: 'jack',
                label: 'Hòa',
              },
              {
                value: 'lucy',
                label: 'Hồng',
              },
              {
                value: 'tom',
                label: 'Hằng',
              },
              {
                value: 'tom1',
                label: 'Hưng',
              }
            ]}
          />
          }
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      id: '1',
      name: "3 ngày 2 đêm",
      addressTo: 'Singapore',
      addressFrom: 'Hồ Chí Minh',
      tourGuide: ''
    },
    {
      key: '2',
      id: '2',
      name: "hoho",
      addressTo: 'American',
      addressFrom: 'Hà Nội',
      tourGuide: 'Hòa'
    },
    {
      key: '3',
      id: '3',
      name: "haha",
      addressTo: 'Hội An',
      addressFrom: 'An Giang',
      tourGuide: ''
    },
    {
      key: '3',
      id: '3',
      name: "hehe",
      addressTo: 'China',
      addressFrom: 'Lào',
      tourGuide: 'Hồng'
    },
  ];
  return (
    <div className='manage'>
      <div className='title-manage'>Quản lý danh sách đặt tour</div>
      <div>Tìm kiếm tour: <Input placeholder="Nhập tên tour muốn tìm kiếm" style={{ width: '500px', marginLeft: '20px' }} /></div>
      <div style={{marginTop:'20px',textAlign:'right'}}>
        <Button>Lưu người hướng dẫn</Button>
      </div>
      <div style={{ width: '1300px', marginTop: '10px' }}>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default ManageTourer;
