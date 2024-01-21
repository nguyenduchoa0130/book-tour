import {
  CompassOutlined,
  HistoryOutlined,
  HomeOutlined,
  InfoOutlined,
  LoginOutlined,
  LogoutOutlined,
  SettingOutlined,
  UnorderedListOutlined,
  UserAddOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { RolesEnum } from '../../common/enums';

const menuConfigs = {
  HomePage: {
    props: {
      label: <NavLink to='/'>Trang chủ</NavLink>,
      key: '/',
      icon: <HomeOutlined />,
    },
    isDefault: true,
    isLoggedIn: false,
    permissions: [],
  },
  ToursPage: {
    props: {
      label: <NavLink to='/tours'>Tours</NavLink>,
      key: '/tours',
      icon: <CompassOutlined />,
    },
    isDefault: true,
    isLoggedIn: false,
    permissions: [],
  },
  TourGuide: {
    props: {
      label: <NavLink to='/huong-dan-vien'>Hướng Dẫn Viên</NavLink>,
      key: '/huong-dan-vien',
      icon: <UnorderedListOutlined />,
    },
    isDefault: false,
    isLoggedIn: true,
    permissions: [RolesEnum.HuongDanVien],
  },
  Admin: {
    props: {
      label: <NavLink to='/admin'>Admin</NavLink>,
      key: '/admin',
      icon: <SettingOutlined />,
    },
    isDefault: false,
    isLoggedIn: true,
    permissions: [RolesEnum.NguoiQuanLy],
  },
  Sale: {
    props: {
      label: <NavLink to='/sale'>Sale</NavLink>,
      key: '/sale',
      icon: <SettingOutlined />,
    },
    isDefault: false,
    isLoggedIn: true,
    permissions: [RolesEnum.Sale],
  },
  NotLoggedInMenu: {
    props: {
      label: 'Bạn chưa đăng nhập?',
      key: 'auth',
      icon: <UserOutlined />,
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
    isDefault: false,
    isLoggedIn: false,
    permissions: [],
  },
  LoggedInMenu: {
    props: {
      label: '',
      key: 'user',
      icon: <UserOutlined />,
      children: [
        {
          label: <NavLink to='/thong-tin-ca-nhan'>Thông tin cá nhân</NavLink>,
          icon: <InfoOutlined />,
          key: '/thong-tin-ca-nhan',
        },
        {
          label: <NavLink to='/lich-su-dat-tour'>Lịch sử đặt tour</NavLink>,
          icon: <HistoryOutlined />,
          key: '/lich-su-dat-tour',
        },
        {
          label: <NavLink to='/dang-xuat'>Đăng xuất</NavLink>,
          icon: <LogoutOutlined />,
          key: '/dang-xuat',
        },
      ],
    },
    isDefault: false,
    isLoggedIn: true,
    permissions: [],
  },
};

export default menuConfigs;
