import {
  BankOutlined,
  CompassOutlined,
  HomeOutlined,
  UserOutlined,
  HddOutlined,
  LoginOutlined,
  UserAddOutlined,
  InfoOutlined,
  HistoryOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { RolesEnum } from '../../common/enums';

const menuConfigs = {
  HomePage: {
    label: <NavLink to='/'>Trang chủ</NavLink>,
    key: '/',
    icon: <HomeOutlined />,
    isDefault: true,
    isLoggedIn: false,
    permissions: [],
    children: null,
  },
  ToursPage: {
    label: <NavLink to='/tours'>Tours</NavLink>,
    key: '/tours',
    icon: <CompassOutlined />,
    isDefault: true,
    isLoggedIn: false,
    permissions: [],
    children: null,
  },
  HotelsPage: {
    label: <NavLink to='/khach-san'>Khách sạn</NavLink>,
    key: '/khach-san',
    icon: <BankOutlined />,
    isDefault: true,
    isLoggedIn: false,
    permissions: [],
    children: null,
  },
  Admin: {
    label: <NavLink to='/admin'>Admin</NavLink>,
    key: '/admin',
    icon: <HddOutlined />,
    isDefault: true,
    isLoggedIn: false,
    permissions: [RolesEnum.NguoiQuanLy],
    children: null,
  },
  NotLoggedInMenu: {
    label: 'Bạn chưa đăng nhập?',
    key: 'auth',
    icon: <UserOutlined />,
    isDefault: false,
    isLoggedIn: false,
    permissions: [],
    children: [
      {
        label: <NavLink to='/dang-nhap'>Đăng nhập</NavLink>,
        icon: <LoginOutlined />,
        key: '/dang-nhap',
      },
      {
        label: <NavLink to='/dang-ky'>Đăng ký</NavLink>,
        icon: <UserAddOutlined />,
        key: '/dang-ky',
      },
    ],
  },
  LoggedInMenu: {
    label: '',
    key: 'user',
    icon: <UserOutlined />,
    isDefault: false,
    isLoggedIn: true,
    permissions: [],
    children: [
      {
        label: <NavLink to='/thong-tin-ca-nhan'>Thông tin cá nhân</NavLink>,
        icon: <InfoOutlined />,
        key: '/thong-tin-ca-nhan',
      },
      {
        label: <NavLink to='/lich-su-giao-dich'>Lịch sử giao dịch</NavLink>,
        icon: <HistoryOutlined />,
        key: '/lich-su-giao-dich',
      },
      {
        label: <NavLink to='/dang-xuat'>Đăng xuất</NavLink>,
        icon: <LogoutOutlined />,
        key: '/dang-xuat',
      },
    ],
  },
};
export default menuConfigs;
