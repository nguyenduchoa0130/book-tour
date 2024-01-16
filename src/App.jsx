import React from 'react';
import { Outlet, useRoutes } from 'react-router-dom';
import { RolesEnum } from './common/enums';
import styles from './styles.module.css';

// Layouts
import Auth from './layouts/auth';
import Footer from './layouts/footer';
import Header from './layouts/header';
import LoadingSpinner from './layouts/loading-spinner';

// Pages
import Admin from './pages/admin';
import AddTour from './pages/admin/add-tour';
import AddUser from './pages/admin/add-user';
import Dashboard from './pages/admin/dashboard';
import ListTours from './pages/admin/list-tours';
import ListUsers from './pages/admin/list-users';
import ManageBookTour from './pages/admin/manage-book-tour';
import History from './pages/history';
import Home from './pages/home';
import Login from './pages/login';
import Logout from './pages/logout';
import Payment from './pages/payment';
import Register from './pages/register';
import TourDetail from './pages/tour-detail';
import TourGuide from './pages/tour-guide';
import Tours from './pages/tours';

const App = () => {
  const routes = useRoutes([
    {
      path: '/admin',
      element: (
        <Auth rule={{ isLoggedIn: true, roles: [RolesEnum.NguoiQuanLy] }}>
          <Admin />
        </Auth>
      ),
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: 'nguoi-dung/danh-sach',
          element: <ListUsers />,
        },
        {
          path: 'nguoi-dung/tao-moi',
          element: <AddUser />,
        },
        {
          path: 'tours/danh-sach',
          element: <ListTours />,
        },
        {
          path: 'tours/tao-moi',
          element: <AddTour />,
        },
        {
          path: 'quan-li-dat-tour',
          element: <ManageBookTour />,
        },
      ],
    },
    {
      path: '/huong-dan-vien',
      element: (
        <Auth rule={{ isLoggedIn: true, roles: [RolesEnum.HuongDanVien] }}>
          <TourGuide />
        </Auth>
      ),
    },
    {
      path: '/sale',
      element: null,
    },
    {
      path: '',
      element: <Outlet />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'thong-tin-ca-nhan',
          element: (
            <Auth rule={{ isLoggedIn: true, roles: [RolesEnum.HuongDanVien] }}>
              <TourGuide />
            </Auth>
          ),
        },
        {
          path: 'lich-su-dat-tour',
          element: (
            <Auth rule={{ isLoggedIn: true, roles: [] }}>
              <History />
            </Auth>
          ),
        },
        {
          path: 'dang-xuat',
          element: (
            <Auth rule={{ isLoggedIn: true, roles: [] }}>
              <Logout />
            </Auth>
          ),
        },
        {
          path: 'dang-nhap',
          element: (
            <Auth rule={[{ isLoggedIn: false, roles: [] }]}>
              <Login />
            </Auth>
          ),
        },
        {
          path: 'dang-ky',
          element: (
            <Auth rule={[{ isLoggedIn: false, roles: [] }]}>
              <Register />
            </Auth>
          ),
        },
        {
          path: 'tours/:tourId',
          element: <TourDetail />,
        },
        {
          path: 'tours',
          element: <Tours />,
        },
        {
          path: 'thanh-toan',
          element: <Payment />,
        },
      ],
    },
  ]);
  return (
    <>
      <header className={styles.layout__header}>
        <Header />
      </header>
      <main className={styles.layout__content}>{routes}</main>
      <footer className={styles.layout__footer}>
        <Footer />
      </footer>
      <LoadingSpinner />
    </>
  );
};

export default App;
