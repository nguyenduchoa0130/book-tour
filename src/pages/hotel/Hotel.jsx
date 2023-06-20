import React from 'react';
import './styles.css';
import video from '../../Assets/audio/ocean.mp4';
import { HiFilter } from 'react-icons/hi';

const Hotel = () => {
  return (
    <section className="hotel grid">
      <video className="background-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>

      <div className="hotelContent container ">
        <div className="textDiv">
          <h1 className="smallText">Trải nghiệm kỳ nghỉ tuyệt vời</h1>

          <h2 className="hotelTitle">
            Combo khách sạn - vé máy bay - đưa đón sân bay giá tốt nhất
          </h2>
        </div>

        <div className="cardDiv">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination:</label>
            <div className="input flex">
              <input
                className="inputtext"
                type="text"
                placeholder="Enter your destination here ..."
              />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select your date:</label>
            <div className="input flex">
              <input className="inputdate" type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="inputrange flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>MORE FILTERS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hotel;
