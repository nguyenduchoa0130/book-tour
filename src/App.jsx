import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './layouts/footer';
import Header from './layouts/header';
import LoadingSpinner from './layouts/loading-spinner';
import styles from './styles.module.css';

// Pages
import Home from './pages/home';
import Hotels from './pages/hotels';
import Login from './pages/login';
import Register from './pages/register';
import Tours from './pages/tours';
import Admin from './pages/admin';

const App = () => {
  return (
    <>
      <header className={styles.layout__header}>
        <Header />
      </header>
      <main className={styles.layout__content}>
        <Routes>
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/dang-nhap" element={<Login />} />
          <Route path="/dang-ky" element={<Register />} />
          <Route path="/khach-san" element={<Hotels />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/" element={<Home />} />
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
