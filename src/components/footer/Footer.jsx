import React from 'react'
import './styles.css';
import { Card, FloatButton, List } from 'antd';
import {LinkedinFilled,FacebookFilled, InstagramFilled, QuestionCircleFilled } from '@ant-design/icons';
function Footer() {
  const data = [
    {
      title: 'Thông tin về chúng tôi ',  
    },
  ]
  return (
   <>
   <div className='footer'> 

       <a href ='www.facebook.com'>
        <FacebookFilled style={{ fontSize: '30px', color :"#4267b2"}} />
       </a>

        <a href ='www.linkedin.com'>
        <LinkedinFilled style={{ fontSize: '30px', color :"#0958d9"}}/>
        </a>

        <a href = 'wwww.instagram.com'>
        <InstagramFilled style={{ fontSize: '30px', color :"#E95950"}}/>
        </a>

        <FloatButton 
          icon = {<QuestionCircleFilled  />}
          style ={{fontSize: '10px'}}/>

        <div classname = 'logo'>
          <ul> Chứng chỉ kèm theo </ul>
          <img src="//cdn1.ivivu.com/bocongthuong.png" alt ="ivivu"></img>
        </div>
        
        <div classname = "contact">
          <ul> <b> Bạn cần trợ giúp? Hãy gọi ngay</b></ul>
          <div style ={{ color : "#faad14", fontSize :"30px"}}>1900 2045 </div>
        </div>
 
  </div>
   </>
  
    )
}


export default Footer
 //*<FacebookFilled style={{ fontSize: '30px', color :"grid"}} />*//