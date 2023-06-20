import React from 'react';
import './styles.css';
import { Radio, Space, Divider, Button, Col, Row } from 'antd';

import { useState } from 'react';

function Payment() {
  const [value, setValue] = useState(1);
  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <>
      <Row className="Row">
        <Col span={12}>
          <div className="pay">
            <h4> Tổng tiền</h4>
            <Divider />
            <h5 style={{ marginTop: '10px', marginBottom: '15px' }}>
              Chọn phương thức thanh toán{' '}
            </h5>
            <Radio.Group
              onChange={onChange}
              value={value}
              style={{ fontFamily: 'Time New Roman', marginTop: '10px' }}>
              <Space direction="vertical">
                <Radio value={1}>Chuyển khoản ngân hàng</Radio>
                <div className="nganhang">
                  <ul class="bank-logo">
                    <li
                      lang="42"
                      id="Vietcombank"
                      ng-click="ActiveBank('Vietcombank')"
                      class="bank-item active">
                      <a href="javascript:;">
                        <img
                          src="//res.ivivu.com/payment/img/banklogo/1.vietcombank.png"
                          alt="Vietcombank"
                        />
                      </a>
                    </li>
                    <li lang="41" id="ACB" ng-click="ActiveBank('ACB')" class="bank-item">
                      <a href="javascript:;">
                        <img src="//res.ivivu.com/payment/img/banklogo/2.acb.png" alt="ACB" />
                      </a>
                    </li>
                    <li
                      class="bank-item"
                      id="Viettinbank"
                      lang="45"
                      ng-click="ActiveBank('Viettinbank')">
                      <a href="javascript:;">
                        <img
                          src="//res.ivivu.com/payment/img/banklogo/3.viettinbank.png"
                          alt="Viettinbank"
                        />
                      </a>
                    </li>

                    <li
                      class="bank-item"
                      lang="44"
                      id="Techcombank"
                      ng-click="ActiveBank('Techcombank')">
                      <a href="javascript:;">
                        <img
                          src="//res.ivivu.com/payment/img/banklogo/4.techcombank.png"
                          alt="Techcombank"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <Radio value={2}>Thẻ ATM nội địa</Radio>
                <div className="nganghang2">
                  <ul class="bank-logo2">
                    <li
                      class="bank-item active"
                      ng-class="{'active': bankId == '9704491'}"
                      ng-click="activeBankOnePay('9704491')">
                      <img
                        alt="VietBank"
                        bankid="9704491"
                        src="//res.ivivu.com/payment/img/onepay/9704491.png"
                      />
                    </li>
                    <li
                      class="bank-item"
                      ng-class="{'active': bankId == '970422'}"
                      ng-click="activeBankOnePay('970422')">
                      <img
                        alt="MB"
                        bankid="970422"
                        src="//res.ivivu.com/payment/img/onepay/Bank-Icons-11.jpg"
                      />
                    </li>
                    <li
                      class="bank-item"
                      lang="46"
                      id="Sacombank"
                      ng-click="ActiveBank('Sacombank')">
                      <a href="javascript:;">
                        <img
                          src="//res.ivivu.com/payment/img/banklogo/8.sacombank.png"
                          alt="Sacombank"
                        />
                      </a>
                    </li>
                    <li
                      lang="47"
                      class="bank-item active"
                      id="Agribank"
                      ng-click="ActiveBank('Agribank')">
                      <a href="javascript:;">
                        <img
                          src="//res.ivivu.com/payment/img/banklogo/6.agribank.png"
                          alt="Agribank"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <Radio value={3}>
                  Thanh toán bằng QR Momo
                  <img
                    src="//res.ivivu.com/payment/img/momo/logo.png"
                    style={{ width: '40px', marginLeft: '10px' }}></img>
                </Radio>
                <Radio value={4} style={{ marginTop: '20px', marginBottom: '20px' }}>
                  Mua trước trả sau
                  <img
                    src="//res.ivivu.com/payment/img/onepay/logo-home-credit.png"
                    style={{
                      width: '54px',
                      verticalAlign: 'baseline',
                      marginLeft: '15px',
                      marginBottom: '-10px'
                    }}></img>
                </Radio>
                <Radio value={5} style={{ marginTop: '10px' }}>
                  Trực tiếp tại văn phòng
                </Radio>
              </Space>
            </Radio.Group>

            <p>
              <Button type="primary" block style={{ width: '300px', marginTop: '10px' }}>
                Thanh toán
              </Button>
            </p>
          </div>
        </Col>

        <Col span={12}>
          {' '}
          <div className="gia">
            <h3>Tên tour</h3>
            <Divider />
            <p>Content below the divider</p>
            <Divider />
            <p>Bạn có mã khuyến mãi?</p>
            <p>
              <u style={{ color: '#1890ff' }}>
                <a href=""> Chọn hoặc nhập mã khuyến mãi</a>
              </u>
            </p>
            <Divider />
            <p>Tổng cộng </p>
            <p>
              <i>Giá đã bao gồm thuế & phí.</i>
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
}
export default Payment;
