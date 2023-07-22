import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
import PersonalInfo from './pages/personal-info';
import Register from './pages/register';
import TourDetail from './pages/tour-detail';
import TourGuide from './pages/tour-guide';
import Tours from './pages/tours';

const App = () => {
  return (
    <>
      <header className={styles.layout__header}>
        <Header />
      </header>
      <main className={styles.layout__content}>
        <Routes>
          <Route
            path='/huong-dan-vien'
            element={
              <Auth rule={{ isLoggedIn: true, roles: [RolesEnum.HuongDanVien] }}>
                <TourGuide />
              </Auth>
            }
          />
          <Route
            path='/thong-tin-ca-nhan'
            element={
              <Auth rule={{ isLoggedIn: true, roles: [] }}>
                <PersonalInfo />
              </Auth>
            }
          />
          <Route
            path='/lich-su-dat-tour'
            element={
              <Auth rule={{ isLoggedIn: true, roles: [] }}>
                <History />
              </Auth>
            }
          />
          <Route
            path='/dang-xuat'
            element={
              <Auth rule={{ isLoggedIn: true, roles: [] }}>
                <Logout />
              </Auth>
            }
          />
          <Route
            path='/admin'
            element={
              <Auth rule={{ isLoggedIn: true, roles: [RolesEnum.NguoiQuanLy] }}>
                <Admin />
              </Auth>
            }>
            <Route index element={<Dashboard />} />
            <Route path='nguoi-dung/danh-sach' element={<ListUsers />} />
            <Route path='nguoi-dung/tao-moi' element={<AddUser />} />
            <Route path='tours/danh-sach' element={<ListTours />} />
            <Route path='tours/tao-moi' element={<AddTour />} />
            <Route path='quan-li-dat-tour' element={<ManageBookTour />} />
          </Route>
          <Route
            path='/dang-nhap'
            element={
              <Auth rule={[{ isLoggedIn: false, roles: [] }]}>
                <Login />
              </Auth>
            }
          />
          <Route
            path='/dang-ky'
            element={
              <Auth rule={[{ isLoggedIn: false, roles: [] }]}>
                <Register />
              </Auth>
            }
          />
          <Route path='/tours' element={<Tours />} />
          <Route path='/tours/:tourId' element={<TourDetail />} />
          <Route path='/thanh-toan' element={<Payment />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
      <footer className={styles.layout__footer}>
        <Footer />
      </footer>
      <LoadingSpinner />
    </>
  );
};

export default App;
