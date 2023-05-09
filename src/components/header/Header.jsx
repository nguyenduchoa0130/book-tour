import React from 'react';
import './styles.css';
/*import { Layout, Menu, Avatar, Badge, Space } from 'antd';
import { UserOutlined, PhoneOutlined } from '@ant-design/icons';
import logo from './public/logo192.png';
const { Header} = Layout;*/

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://res.ivivu.com/hotel/img/logo-2023n.svg" alt="ivivu" />
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="#">Khách sạn</a>
          </li>
          <li>
            <a href="#">Tours</a>
          </li>
          <li>
            <a href="#">Vé máy bay</a>
          </li>
          <li>
            <a href="#">Cẩm nang du lịch</a>
          </li>
          <li>
            <a href="#">More</a>
          </li>
        </ul>
      </div>

      <div className="account">
          <div className="avatar">
             <img src="https://res.ivivu.com/hotel/img/avatars/avatar-default-white.svg" alt="avatar" />  
          </div>
          <div className="signin">Tài khoản</div>    
      </div>
      <div className="contact">1900 2045</div>
      
  </div>
  );
}

export default Header;

