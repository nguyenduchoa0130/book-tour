import React from 'react';
import './styles.css';
import { DatePicker, Space, Divider, Row, Col, Button } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
function Tours() {
  const { RangePicker } = DatePicker;
  const dateFormat = 'YYYY/MM/DD';
  const weekFormat = 'MM/DD';
  const monthFormat = 'YYYY/MM';
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
  const customFormat = value => `custom format: ${value.format(dateFormat)}`;
  const customWeekStartEndFormat = value =>
    `${dayjs(value).startOf('week').format(weekFormat)} ~ ${dayjs(value)
      .endOf('week')
      .format(weekFormat)}`;
  return (
    <>
      <form1>
        <div className="imageContent">
          <h1>Du lịch theo cá tính</h1>
          <p>Trải nghiệm trọn vẹn - Giá cả phải chăng</p>

          <div className="inf" target="_blank">
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder=" Bạn muốn đi đâu ?
              "
              style={{
                width: '700px',
                height: '40px'
              }}
            />
            <br />
            <div className="ant-picker-input ">
              <Space direction="vertical" size={12}>
                <DatePicker placeholder="Chọn ngày" style={{ height: '40px' }} />
              </Space>
              <input
                type="text"
                placeholder=" Khởi hành từ"
                style={{ width: '430px', height: '40px' }}></input>

              <input
                type="submit"
                value="Tìm"
                style={{
                  width: '50px',
                  height: '40px'
                }}></input>
            </div>
          </div>
        </div>
      </form1>
      <form1>
        <div>
          <img
            class=""
            data-src="/du-lich/content/img/icon-support.svg"
            alt="Tư Vấn Chuyên Nghiệp"
            src="/du-lich/content/img/icon-support.svg"></img>

          <p>Hỗ trợ nhiệt tình, chăm sóc chu đáo</p>
        </div>
        <div>
          <img
            class=""
            data-src="/du-lich/content/img/icon-location.svg"
            alt="Trải nghiệm đa dạng"
            src="/du-lich/content/img/icon-location.svg"
          />

          <p>Chọn tour phù hợp, giá tour hợp lý</p>
        </div>
        <div>
          <img
            class=""
            data-src="/du-lich/content/img/icon-payment.svg"
            alt="Thanh Toán An Toàn"
            src="/du-lich/content/img/icon-payment.svg"></img>
          <p>Linh hoạt, rõ ràng, bảo mật</p>
        </div>
      </form1>
      <div className="font">
        <Divider orientation="left"></Divider>
        <div style={{ marginLeft: '50px' }}>
          <h5>Tour Du Lịch Hè Giá Tốt</h5>
          <p>Chơi Hè Thả Ga, Không Lo Về Giá</p>
        </div>
        <Row justify="space-around">
          <Col span={4}>
            <Button className="button" onclick="document.location='default.asp'">
              <img
                className="img"
                src="https://data.webnhiepanh.com/wp-content/uploads/2020/11/21105453/phong-canh-1.jpg"
                alt="Tour"></img>
              <div className="image-overlay">
                <p className="image-text">
                  <h4>Tour</h4>
                  <h6>Giá rẻ</h6>
                </p>
              </div>
            </Button>
          </Col>

          <Col span={4}>
            <Button className="button">
              <img
                className="img"
                src="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Ảnh"></img>
              <div className="image-overlay">
                <p className="image-text">
                  <h4>Tour</h4>
                  <h6>Giá rẻ</h6>
                </p>
              </div>
            </Button>
          </Col>
          <Col span={4}>
            <Button className="button">
              <img
                className="img"
                src="https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Ảnh"></img>
              <div className="image-overlay">
                <p className="image-text">
                  <h4>Tour</h4>
                  <h6>Giá rẻ</h6>
                </p>
              </div>
            </Button>
          </Col>
          <Col span={4}>
            <Button className="button">
              <img
                className="img"
                src="https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Ảnh"></img>
              <div className="image-overlay">
                <p className="image-text">
                  <p>Tour</p>
                  <p>Giá rẻ</p>
                  <p>Tổng tiền </p>
                </p>
              </div>
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tours;
