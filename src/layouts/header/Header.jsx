import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

const notLoggedInMenus = [
  {
    label: 'trang chủ',
    path: '/trang-chu'
  },
  {
    label: 'tour',
    path: '/tours'
  },
  {
    label: 'khách sạn',
    path: '/khach-san'
  }
];

function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.header__logo}>
          <NavLink to="/">
            <span>ivivu</span>
          </NavLink>
        </div>
        <div className={styles.header__nav}>
          <ul className={styles.header__nav__list}>
            {notLoggedInMenus.map((menu, idx) => (
              <li key={`menu-${idx}`} className={styles.header__nav__item}>
                <NavLink to={menu.path}>{menu.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
