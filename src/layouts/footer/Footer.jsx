import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  PhoneFilled,
  QuestionCircleFilled
} from '@ant-design/icons';
import { Col, FloatButton, Row } from 'antd';
import React from 'react';
import { useLocation } from 'react-router-dom';
import 'layouts/footer/styles.css';

const HIDDEN_HEADERS = ['/admin', '/register'];

function Footer() {
  const location = useLocation();
  return (
    <>
      <div className={`footer ${HIDDEN_HEADERS.includes(location.pathname) ? 'hidden' : ''}`}>
        <div>
          <Row>
            <Col span={12}>
              <div className="center-box">
                <p style={{ marginTop: '10px' }}>
                  <img
                    src="https://res.ivivu.com/hotel/img/ivv-agency-winner.svg"
                    width="55"
                    className="loading"
                    data-was-processed="true"></img>
                </p>
                <b style={{ marginTop: '15px' }}>Được chứng nhận</b>
              </div>
            </Col>
            <Col span={12}>
              <div className="center-box">
                <img
                  className="loading"
                  width="25"
                  src="https://res.ivivu.com/hotel/img/apea.png"></img>
                <b>APEA Inspirational Brand Award</b>
              </div>
            </Col>
          </Row>
        </div>

        <div>
          <Row>
            <Col span={12}>
              <div className="center-box" style={{ fontFamily: 'VNI-Pagon', fontSize: '20px' }}>
                <ul>
                  <p>
                    <b>HN: </b> Đại học Bách Khoa Hà Nội{' '}
                  </p>
                  <p>
                    <b> HCM: </b>
                    Lầu 2, Tòa nhà Anh Đăng, Quận 3, Tp. Hồ Chí Minh{' '}
                  </p>
                  <p>
                    <b>Đà Nẵng: </b>Tầng 7 - Toà Nha Q. Ninh Kiều, TP. Đà Nẵng
                  </p>
                  <p style={{ margin: '0 auto' }}>
                    <a href="https://facebook.com">
                      <FacebookFilled style={{ fontSize: '30px', color: '#4267b2' }} />
                    </a>

                    <a href="https://linkedin.com">
                      <LinkedinFilled style={{ fontSize: '30px', color: '#0958d9' }} />
                    </a>

                    <a href="https://instagram.com">
                      <InstagramFilled style={{ fontSize: '30px', color: '#E95950' }} />
                    </a>
                  </p>
                </ul>
              </div>
            </Col>
            <Col span={12}>
              <div className="center-box">
                <ul>
                  <b>Bạn cần trợ giúp? Hãy gọi ngay</b>
                  <p>
                    <a className="hover " href="#">
                      <PhoneFilled className="name" />
                      1900 2045
                    </a>
                  </p>
                </ul>
              </div>
            </Col>
          </Row>
        </div>

        <div>
          <FloatButton icon={<QuestionCircleFilled />} style={{ fontSize: '10px' }} />
        </div>
      </div>
    </>
    /*style ={{ }}*/
  );
}

export default Footer;
