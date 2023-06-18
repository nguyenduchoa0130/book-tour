import React from 'react';
import './styles.css';
import {BsFillTelephoneFill} from 'react-icons/bs'

function Header() {
  return (
    <div className='header'>
      <div className='logo'>
        <img src='https://res.ivivu.com/hotel/img/logo-2023n.svg' alt='ivivu' />
      </div>
      <div className='menu'>
        <ul>
          <li>
            <a href='!#'>Khách sạn</a>
          </li>
          <li>
            <a href='!#'>Tours</a>
          </li>
          <li>
            <a href='!#'>Vé máy bay</a>
          </li>
          <li>
            <a href='!#'>Cẩm nang du lịch</a>
          </li>
          <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">More
            <span class="caret"></span></a>
            <ul class="dropdown-menu">
                 <li><a href="#">Giới thiệu</a></li>
                 <li><a href="#">Hỏi đáp</a></li>
                 <li><a href="#">Hỗ trợ</a></li>        
            </ul>
          </li>
        </ul>
      </div>

      <div className='account'>
        <div className='avatar'>
          <img
            src='https://res.ivivu.com/hotel/img/avatars/avatar-default-white.svg'
            alt='avatar'
          />
          <span>Sign in</span>
        </div>
      </div>

      <div className='contact flex'>
        <BsFillTelephoneFill className="icon"/>
        <span>1900 2045</span>  
    </div>
    </div>
    
  );
}

export default Header;

