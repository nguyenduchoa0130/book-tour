import React from 'react';
import './styles.css';
// import img from '../../Assets/hotelimg.png';

const Hotel = () => {
  return (
    <section className="hotel">
      <div className="hotelContent">
        <div className="textDiv">
          <span className="smallText">Trải nghiệm kỳ nghỉ tuyệt vời</span>

          <h1 className="hotelTitle">
            Combo khách sạn - vé máy bay - đưa đón sân bay giá tốt nhất
          </h1>
        </div>

        <div className="cardDiv">
          <div className="con">
            <div className="destinationInput">
              <label htmlFor="city">Bạn muốn đi đâu?</label>
            </div>
            <div className="input">
              <input type="text" placeholder="Nhập địa điểm bạn muốn đến ..." />
            </div>

            <div className="dateInput">
              <label htmlFor="date">Lựa chọn ngày </label>
            </div>
            <div className="input">
              <input type="date flex" />
            </div>

            <div className="priceInput">
              <label htmlFor="price">Max price:</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hotel;
