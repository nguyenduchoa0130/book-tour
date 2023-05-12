import React from "react";
import "./styles.css";
import { Card, FloatButton, List } from "antd";
import {
  LinkedinFilled,
  FacebookFilled,
  InstagramFilled,
  QuestionCircleFilled,
} from "@ant-design/icons";
import { Col, Row } from "antd";
function Footer() {
  return (
    <>
      <div className="footer">
        <div>
          <Row>
            <Col span={12}>
              <div className="center-box">
                <p>
                  <img
                    src="https://res.ivivu.com/hotel/img/ivv-agency-winner.svg"
                    width="55"
                    class="loading"
                    data-was-processed="true"
                  ></img>
                </p>
                <b>Được chứng nhận</b>
              </div>
            </Col>
            <Col span={12}>
              <div className="center-box">
                <img
                  class="loading"
                  width="25"
                  src="https://res.ivivu.com/hotel/img/apea.png"
                ></img>
                <b>APEA Inspirational Brand Award</b>
              </div>
            </Col>
          </Row>
        </div>

        <div>
          <Row>
            <Col span={12}>
              <div className="center-box">
                <ul>
                  <p>
                    <b>HN: </b> Đại học Bách Khoa Hà Nội{" "}
                  </p>
                  <p>
                    <b>HCM: </b>Lầu 2, Tòa nhà Anh Đăng, Quận 3, Tp. Hồ Chí Minh{" "}
                  </p>
                  <p>
                    <b>HCM: </b>Tầng 7 - Toà Nha Q. Ninh Kiều, TP. Cần Thơ
                  </p>
                  <p>
                    <a href="https://facebook.com">
                      <FacebookFilled
                        style={{ fontSize: "30px", color: "#4267b2" }}
                      />
                    </a>

                    <a href="https://linkedin.com">
                      <LinkedinFilled
                        style={{ fontSize: "30px", color: "#0958d9" }}
                      />
                    </a>

                    <a href="https://instagram.com">
                      <InstagramFilled
                        style={{ fontSize: "30px", color: "#E95950" }}
                      />
                    </a>
                  </p>
                </ul>
              </div>
            </Col>
            <Col span={12}>
              <div className="center-box">
                <ul>
                  <b style={{ fontSize: "16px" }}>
                    Bạn cần trợ giúp? Hãy gọi ngay
                  </b>
                  <p>
                    <a
                      href="#"
                      style={{
                        fontSize: "40px",
                        face: "Comic sans MS",
                        color: "#f79321",
                      }}
                    >
                      1900 2045
                    </a>
                  </p>
                </ul>
              </div>
            </Col>
          </Row>
        </div>

        <div>
          <FloatButton
            icon={<QuestionCircleFilled />}
            style={{ fontSize: "10px" }}
          />
        </div>
      </div>
    </>
    /*style ={{ }}*/
  );
}

export default Footer;
