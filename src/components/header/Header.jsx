import React from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://res.ivivu.com/hotel/img/logo-2023n.svg" alt="ivivu" />
      </div>
      <div className="menu">
        <ul>
          <li>
            <NavLink to="/hotel">Khách sạn</NavLink>
          </li>
          <li>
            <NavLink to="/tours">Tours</NavLink>
          </li>
          <li>
            <a href="!#">Cẩm nang du lịch</a>
          </li>
          <li>
            <a href="!#">More</a>
            <ul class="subnav">
              <li>
                <a href="">Giới thiệu</a>
              </li>
              <li>
                <a href="">Hỏi đáp</a>
              </li>
              <li>
                <a href="">Hỗ trợ</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="account">
        <div className="avatar">
          <img
            src="https://res.ivivu.com/hotel/img/avatars/avatar-default-white.svg"
            alt="avatar"
          />
          <div className="taikhoan">
            Tài khoản
            <ul class="user-account">
              <li class="btn-login-header">
                <btn type="button" class="btn-login">
                  Đăng nhập
                </btn>
              </li>
              <li class="register-text">
                "Chưa có tài khoản? "<span class="register-link">Đăng ký </span>
                ngay
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="contact">1900 2045</div>
    </div>
  );
}

export default Header;
