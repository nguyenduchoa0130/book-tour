import { Layout } from 'antd';
import React from 'react';
import LoadingSpinner from './layouts/loading-spinner';
import styles from './styles.module.css';
import Header from './layouts/header';
import Footer from './layouts/footer';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Layout className={styles.layout}>
        <Layout.Header className={styles.layout__header}>
          <Header />
        </Layout.Header>
        <Layout.Content className={styles.layout__content}>
          <Routes></Routes>
        </Layout.Content>
        <Layout.Footer className={styles.layout__footer}>
          <Footer />
        </Layout.Footer>
      </Layout>
      <LoadingSpinner />
    </>
  );
};

export default App;
