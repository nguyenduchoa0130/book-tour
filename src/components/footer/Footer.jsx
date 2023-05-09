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
     
      <div>
        <div classname = 'logo'>
          <img src="//cdn1.ivivu.com/bocongthuong.png" alt ="ivivu"></img>
        </div>
        <div classname = "contact" style ={{ color : "#faad14"}} > 1900 2045</div>
        <div>
          <a href ='www.facebook.com'>
            <FacebookFilled style={{ fontSize: '30px', color :"#69b1ff"}} />
          </a>
        </div>
        <LinkedinFilled style={{ fontSize: '30px', color :"#0958d9"}}/>
        <InstagramFilled style={{ fontSize: '30px', color :"#cf1322"}}/>
        <FloatButton 
        icon = {<QuestionCircleFilled />}
        style ={{fontSize: '30px'}}
        />
      </div>
    
  </div>
   </>
  
    )
}


export default Footer
 //*<FacebookFilled style={{ fontSize: '30px', color :"grid"}} />*//