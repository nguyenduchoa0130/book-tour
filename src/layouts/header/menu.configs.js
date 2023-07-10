import { BankOutlined, CompassOutlined, HomeOutlined, UserOutlined, HddOutlined, LoginOutlined, UserAddOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const MenuConfigs = {
  HomePage: {
    label: <NavLink to='/'>Trang chủ</NavLink>,
    key: '/',
    icon: <HomeOutlined />,
    isLoggedIn: false,
    permissions: []
  },
  ToursPage: {
    label: <NavLink to='/tours'>Tours</NavLink>,
    key: '/tours',
    icon: <CompassOutlined />,
    isLoggedIn: false,
    permissions: []
  },
  HotelsPage: {
    label: <NavLink to='/khach-san'>Khách sạn</NavLink>,
    key: '/khach-san',
    icon: <BankOutlined />,
    isLoggedIn: false,
    permissions: []
  },
  Admin: {
    label: <NavLink to='/admin'>Admin</NavLink>,
    key: '/admin',
    icon: <HddOutlined />,
    isLoggedIn: false,
    permissions: [],
  },
  AuthMenu: {
    label: 'Bạn chưa đăng nhập?',
    key: 'auth',
    icon: <UserOutlined />,
    isLoggedIn: false,
    permissions: [],
    children: [
      {
        label: <NavLink to='/dang-nhap'>Đăng nhập</NavLink>,
        icon: <LoginOutlined />,
        key: '/dang-nhap'
      },
      {
        label: <NavLink to='/dang-ky'>Đăng ký</NavLink>,
        icon: <UserAddOutlined />,
        key: '/dang-ky'
      }
    ]
  },
};
export default MenuConfigs;