import React from 'react';
import './styles.css';
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
