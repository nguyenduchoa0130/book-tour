import { Col, Row } from 'antd';
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import AdminMenu from './admin-menu/AdminMenu';
import './styles.css';

const Admin = () => {
  useEffect(() => {}, []);

  return (
    <>
      <div className="full-size admin">
        <Row className="full-size">
          <Col span={4}>
            <div className="full-size">
              <AdminMenu />
            </div>
          </Col>
          <Col span={20}>
            <div className="full-size">
              <div className="admin-content">
                <Outlet />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Admin;
