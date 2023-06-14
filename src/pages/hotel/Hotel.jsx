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
const Hotel = () => {
  return (
    <section className='hotelpage'>
        <div className='banner-container'>
            <div className="banner-content">
          
                 <h1 className="smallText">
                  Trải nghiệm kỳ nghỉ tuyệt vời
                 </h1>
                 <h2 className="hotelTitle">
                  Combo khách sạn - vé máy bay - đưa đón sân bay giá tốt nhất
                 </h2>
             
            </div>

            <div className="card-content">
                 <div className="destinationInput">
                    <input className= "inputcity" type="text" placeholder="Bạn muốn đi đâu ?" />
                 </div>

                 <div className="inputdate">
                    <input  type="date" />
                    <input  type="date" />
                    <button type="button" className="btn">Search</button>
                 </div>
                 
            </div>

            

         </div>

         <div className="hotel-content">
         </div>


  </section>
  );
};

export default Hotel;
