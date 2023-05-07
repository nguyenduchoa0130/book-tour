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
    <List
    grid={{ gutter: 30, column: 1 }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <Card 
         style={{right :24,}}// 20-23khong dich sang phai ?
         title={item.title}>
         Bạn cần trợ giúp hãy liên lạc với chúng tôi:
         <p><b>0865081605</b></p>
        </Card>
        <FacebookFilled style={{ fontSize: '30px', color :"#4096ff", right: 24}} /> 
        <LinkedinFilled style={{ fontSize: '30px', color :"#0958d9"}}/>
        <InstagramFilled style={{ fontSize: '30px', color :"#ff4d4f"}}/>
        <FloatButton 
        icon = {<QuestionCircleFilled />}
        style ={{fontSize: '30px'}}
        />
      </List.Item>
    )}
  />
   </>

    )
}


export default Footer
 //*<FacebookFilled style={{ fontSize: '30px', color :"grid"}} />*//