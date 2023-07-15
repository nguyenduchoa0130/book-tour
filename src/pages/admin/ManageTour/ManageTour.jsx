import React from 'react';
import './style.css'
import { Button } from 'antd';

const ManageTour = () => {
  return (
    <div className='manage'>
      <div className='title-manage'>Quản lý tour</div>
      <div className='grid-content'>

        <div className='card'>
          <img src='https://i.pinimg.com/736x/72/e2/ce/72e2ce79110644e6c37d9ccb31c648ad.jpg' alt="title" width="100%" height="180px" />
          <div className='card-content'>
            <div className='title-card'>Tour 3 ngay 2 dem phu quoc</div>
            <div className='action-card'>
              <Button size='large'>Sửa</Button>
              <Button size='large' danger>Xóa</Button>
            </div>
          </div>
        </div>

        <div className='card'>
          <img src='https://i.pinimg.com/736x/72/e2/ce/72e2ce79110644e6c37d9ccb31c648ad.jpg' alt="title" width="100%" height="180px" />
          <div className='card-content'>
            <div className='title-card'>Tour 3 ngay 2 dem phu quoc</div>
            <div className='action-card'>
              <Button size='large'>Sửa</Button>
              <Button size='large' danger>Xóa</Button>
            </div>
          </div>
        </div>

        <div className='card'>
          <img src='https://i.pinimg.com/736x/72/e2/ce/72e2ce79110644e6c37d9ccb31c648ad.jpg' alt="title" width="100%" height="180px" />
          <div className='card-content'>
            <div className='title-card'>Tour 3 ngay 2 dem phu quoc</div>
            <div className='action-card'>
              <Button size='large'>Sửa</Button>
              <Button size='large' danger>Xóa</Button>
            </div>
          </div>
        </div>

        <div className='card'>
          <img src='https://i.pinimg.com/736x/72/e2/ce/72e2ce79110644e6c37d9ccb31c648ad.jpg' alt="title" width="100%" height="180px" />
          <div className='card-content'>
            <div className='title-card'>Tour 3 ngay 2 dem phu quoc</div>
            <div className='action-card'>
              <Button size='large'>Sửa</Button>
              <Button size='large' danger>Xóa</Button>
            </div>
          </div>
        </div>

        <div className='card'>
          <img src='https://i.pinimg.com/736x/72/e2/ce/72e2ce79110644e6c37d9ccb31c648ad.jpg' alt="title" width="100%" height="180px" />
          <div className='card-content'>
            <div className='title-card'>Tour 3 ngay 2 dem phu quoc</div>
            <div className='action-card'>
              <Button size='large'>Sửa</Button>
              <Button size='large' danger>Xóa</Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ManageTour;
