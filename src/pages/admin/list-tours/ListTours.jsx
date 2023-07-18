import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import React from 'react';
import styles from './styles.module.css';

const ListTours = () => {
  return (
    <>
      <h2>Danh sách tour</h2>
      <hr />
      <div className='py-2'>
        <Input prefix={<SearchOutlined />} size='large' placeholder='Tìm kiếm' />
      </div>
      <div className={styles['tours-grid']}></div>
    </>
  );
};

export default ListTours;
