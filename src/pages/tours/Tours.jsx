import React from 'react';
import './styles.css';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import beach1 from '../../Assets/image/beach1.jpg';
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
      <form>
        <div className="imageContent">
          <h1>Du lịch theo cá tính</h1>
          <p>Trải nghiệm trọn vẹn - Giá cả phải chăng</p>

          <div className="inf" target="_blank">
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Bạn muốn đi đâu ?
              "
              style={{
                width: '360px'
              }}
            />
            <br />
            <Space direction="vertical" size={12}>
              <DatePicker placeholder="Chọn ngày" />
            </Space>
            <input type="text" placeholder="Khởi hành từ"></input>

            <input
              type="submit"
              value="Tìm"
              style={{
                width: '50px'
              }}></input>
          </div>
        </div>
      </form>
      <form>
        <div>
          <h5>Tư Vấn Chuyên Nghiệp</h5>
          <p>Hỗ trợ nhiệt tình, chăm sóc chu đáo</p>
        </div>
        <div>
          <h5>Trải Nghiệm Đa Dạng</h5>
          <p>Chọn tour phù hợp, giá tour hợp lý</p>
        </div>
        <div>
          <h5>Thanh Toán An Toàn</h5>
          <p>Linh hoạt, rõ ràng, bảo mật</p>
        </div>
      </form>
      <form>
        <div>
          <h5 class="card-title">
            Tour Singapore 3N2Đ: Khám Phá Quốc Đảo Sư Tử - Công Viên Fort Canning
          </h5>
          <p class="card-content">This is the content of the card.</p>
        </div>
      </form>
    </>
  );
}

export default Tours;
