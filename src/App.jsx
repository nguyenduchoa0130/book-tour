import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './styles.module.css';

// Layouts
import Footer from './layouts/footer';
import Header from './layouts/header';
import Auth from './layouts/auth';
import LoadingSpinner from './layouts/loading-spinner';

// Pages
import Admin from './pages/admin';
import History from './pages/history';
import Home from './pages/home';
import Login from './pages/login';
import Logout from './pages/logout';
import PersonalInfo from './pages/personal-info';
import Register from './pages/register';
import Tours from './pages/tours';
import { AuthRulesEnum, RolesEnum } from './common/enums';

const checkIsLoggedRule = {
  name: AuthRulesEnum.CHECK_IS_LOGGED_IN,
  value: true,
  message: 'Bạn chưa đăng nhập !!',
};

const checkIsNotLoggedInRule = {
  name: AuthRulesEnum.CHECK_IS_NOT_LOGGED,
  value: false,
  message: 'Bạn đã đăng nhập !!',
};

const checkNQLRole = {
  name: AuthRulesEnum.CHECK_ROLES,
  value: [RolesEnum.NguoiQuanLy],
  message: 'Bạn có thể truy cập trang này do chưa được cấp phép !!',
};

const App = () => {
  return (
    <>
      <header className={styles.layout__header}>
        <Header />
      </header>
      <main className={styles.layout__content}>
        <Routes>
          <Route
            path='/thong-tin-ca-nhan'
            element={
              <Auth rules={[checkIsLoggedRule]}>
                <PersonalInfo />
              </Auth>
            }
          />
          <Route
            path='/lich-su-giao-dich'
            element={
              <Auth rules={[checkIsLoggedRule]}>
                <History />
              </Auth>
            }
          />
          <Route
            path='/dang-xuat'
            element={
              <Auth rules={[checkIsLoggedRule]}>
                <Logout />
              </Auth>
            }
          />
          <Route
            path='/admin/*'
            element={
              <Auth rules={[checkNQLRole]}>
                <Admin />
              </Auth>
            }
          />
          <Route
            path='/dang-nhap'
            element={
              <Auth rules={[checkIsNotLoggedInRule]}>
                <Login />
              </Auth>
            }
          />
          <Route
            path='/dang-ky'
            element={
              <Auth rules={[checkIsNotLoggedInRule]}>
                <Register />
              </Auth>
            }
          />
          <Route path='/tours' element={<Tours />} />
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
