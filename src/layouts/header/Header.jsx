import { Menu } from 'antd';
import cx from 'classnames';
import { useState, memo, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import MenuUtils from '../../common/utils/menu.util';
import MenuConfigs from './menu.configs';
import styles from './styles.module.css';

function Header() {
  const [current, setCurrent] = useState('');
  const location = useLocation();

  const navigate = e => {
    setCurrent(e.key);
  };

  useEffect(() => {
    setCurrent(location.pathname);
  }, []);

  return (
    <>
      <div className={cx('d-flex justify-content-between align-items-center', styles.header)}>
        <NavLink to="/">
          <span className={cx('text-uppercase font-weight-bold', styles.header__logo)}>IVIVU</span>
        </NavLink>
        <Menu
          onClick={navigate}
          selectedKeys={[current]}
          mode="horizontal"
          items={MenuUtils.constructMenu(MenuConfigs, null)}
          theme="dark"
          className={styles.header__nav}
        />
      </div>
    </>
  );
}

export default memo(Header);
