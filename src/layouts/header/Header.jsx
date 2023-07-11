import { Menu } from 'antd';
import cx from 'classnames';
import { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { UserSelectors } from '../../common/store/selectors';
import menuConfigs from './menu.configs';
import styles from './styles.module.css';

function Header() {
  // Declare variables
  const [current, setCurrent] = useState('');
  const [menuItems, setMenuItems] = useState([]);
  const location = useLocation();
  const user = useSelector(UserSelectors.selectUser);

  // Declare method
  const navigate = (e) => {
    setCurrent(e.key);
  };

  // Declare hook
  useEffect(() => {
    setCurrent(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const buildMenu = () => {
      return Object.keys(menuConfigs).reduce((items, field) => {
        const menuItem = menuConfigs[field];
        if (menuItem.isDefault) {
          items.push(menuItem);
        } else {
          const isLoggedIn = !!user;
          if (isLoggedIn && menuItem.isLoggedIn) {
            isLoggedIn && (menuItem.label = `${user.HoVaTen}`);
            items.push(menuItem);
          }
        }
        return items;
      }, []);
    };
    const items = buildMenu();
    setMenuItems(items);
  }, [user]);

  return (
    <>
      <div className={cx('d-flex justify-content-between align-items-center', styles.header)}>
        <NavLink to='/'>
          <span className={cx('text-uppercase font-weight-bold', styles.header__logo)}>IVIVU</span>
        </NavLink>
        <Menu
          onClick={navigate}
          selectedKeys={[current]}
          mode='horizontal'
          items={menuItems}
          theme='dark'
          className={styles.header__nav}
          style={{ flexBasis: '50%' }}
        />
      </div>
    </>
  );
}

export default memo(Header);
