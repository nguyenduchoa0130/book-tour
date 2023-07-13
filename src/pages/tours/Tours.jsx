import React from 'react';
import Search from '../../components/search/Search';
import BookingCard from '../../common/components/booking-card';
import './style.css'
const Tours = () => {

  const dataTo = [
    {
      value: 'Mỹ',
      label: 'Mỹ',
    },
    {
      value: 'Úc',
      label: 'Úc',
    },
    {
      value: 'Canada',
      label: 'Canada',
    },
  ]

  const dataFrom = [
    {
      value: 'Hồ Chí Minh',
      label: 'Hồ Chí Minh',
    },
    {
      value: 'Hà Nội',
      label: 'Hà Nội',
    },
    {
      value: 'Đà Nẵng',
      label: 'Đà Nẵng',
    },
  ]
  const onResult = (value) => {
    console.log(value)
  }
  return <>
    <Search
      title="Du lịch theo cá tính"
      description="Trải nghiệm trọn vẹn - Giá cả phải chăng"
      searchTo={{ dataTo: dataTo, placeholderTo: "Bạn muốn đi đâu" }}
      searchFrom={{ dataFrom: dataFrom, placeholderFrom: "Bạn đến từ đâu" }}
      onResult={onResult}
    />
    <div className='tour-container'>
      <h2>Tour du lịch hè tốt</h2>
      <h5>Chơi hè thả ga, không lo về vé</h5>
      <div className='tour-gird'>
        <BookingCard
          title="Tour Phú Quốc 3 ngày 2 đêm - Đảo sư tử - Công viên Fort Caning"
          img="https://i.pinimg.com/736x/72/e2/ce/72e2ce79110644e6c37d9ccb31c648ad.jpg"
        />
        <BookingCard
          title="Tour Phú Quốc 3 ngày 2 đêm - Đảo sư tử - Công viên Fort Caning"
          img="https://i.pinimg.com/736x/72/e2/ce/72e2ce79110644e6c37d9ccb31c648ad.jpg"
        />
        <BookingCard
          title="Tour Phú Quốc 3 ngày 2 đêm - Đảo sư tử - Công viên Fort Caning"
          img="https://i.pinimg.com/736x/72/e2/ce/72e2ce79110644e6c37d9ccb31c648ad.jpg"
        />
        <BookingCard
          title="Tour Phú Quốc 3 ngày 2 đêm - Đảo sư tử - Công viên Fort Caning"
          img="https://i.pinimg.com/736x/72/e2/ce/72e2ce79110644e6c37d9ccb31c648ad.jpg"
        />
        <BookingCard
          title="Tour Phú Quốc 3 ngày 2 đêm - Đảo sư tử - Công viên Fort Caning"
          img="https://i.pinimg.com/736x/72/e2/ce/72e2ce79110644e6c37d9ccb31c648ad.jpg"
        />
      </div>
    </div>
  </>;
};

export default Tours;
