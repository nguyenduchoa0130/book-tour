import { Layout } from 'antd';
import React from 'react';
import LoadingSpinner from './layouts/loading-spinner';
import styles from './styles.module.css';
import Header from './layouts/header';
import Footer from './layouts/footer';

const App = () => {
  return (
    <>
      <Layout className={styles.layout}>
        <Layout.Header className={styles.layout__header}>
          <Header />
        </Layout.Header>
        <Layout.Content className={styles.layout__content}>content</Layout.Content>
        <Layout.Footer className={styles.layout__footer}>
          <Footer />
        </Layout.Footer>
      </Layout>
      <LoadingSpinner />
    </>
  );
};

export default App;
