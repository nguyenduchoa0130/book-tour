import React from 'react';
import './style.css';
function Trip() {
  return (
    <>
      <div className="trip">
        <h3>Tour Hồng Kông 4N3Đ: Khám Phá Hồng Kông - Kết Hợp Tự Do Mua Sắm</h3>

        <div className="phuongtien">
          <ul>Hà Nội</ul>
          <ul>Phương tiện</ul>
          <ul> 4 ngày 3 đêm</ul>
        </div>
        <frame>
          <div className="gioithieu">
            <h4>Lạc lối giữa chốn Hương Cảng</h4>
            <p>
              Là 1 trong 10 địa điểm hấp dẫn khách du lịch nhất trên thế giới, Hong Kong là một điểm
              du lịch an toàn và thú vị cho khách du lịch khắp nơi. Hong Kong được chia thành 4 khu:
              đảo Hong Kong, Cửu Long, Lạn Đầu và Tân Giới. Đảo Hong Kong và Cửu Long có các địa
              điểm du lịch nổi tiếng như Công viên Disneyland, Vịnh Vitoria, đỉnh núi Thái Bình,
              Miếu Huỳnh Đại Tiên, Đại lộ Ngôi Sao. Tha hồ cho bạn vui chơi và ngắm cảnh đẹp. Hong
              Kong còn là thiên đường mua sắm đầy thú vị với hàng trăm siêu thị và những con phố mua
              sắm nổi tiếng như chợ cho quý bà, chợ hoa, chợ cá vàng, chợ ngọc bán cẩm thạch. Cùng
              iVIVU khám phá thành phố Hương Cảng ngay hôm nay!
            </p>
            <h4>Những trải nghiệm thú vị trong chương trình</h4>
            <p>
              <b>- Miếu Huỳnh Đại Tiên:</b> điểm đến linh thiêng, biểu tượng cho sự tín ngưỡng trong
              công việc làm ăn và cầu mong tài lộc.{' '}
            </p>
            <p>
              <b> - Đại lộ ngôi sao:</b> nơi tôn vinh những người có đóng góp đặc biệt cho nền điện
              ảnh Hongkong.
            </p>{' '}
            <p>
              <b>- Đỉnh núi Thái Bình:</b> du khách được phóng xa tầm mắt, ôm trọn toàn cảnh Hong
              Kong từ trên cao trong một không gian yên tĩnh, trầm lắng.
            </p>{' '}
            <p>
              <b>- Đại Nhĩ Sơn: </b>còn được biết là đảo Lantau hay Lantao theo tiếng Trung Quốc,
              đây là hòn đảo ngoài xa lớn nhất của Hồng Kông, nằm ở cửa sông Châu Giang.
            </p>
          </div>
        </frame>
        <frame>
          <div className="chitiet">
            <h4>Chương trình tour</h4>
            <h5>NGÀY 01: TPHCM – HONGKONG (ĂN TỐI)</h5>

            <img
              class=""
              src="//cdn2.ivivu.com/2016/09/02/18/ivivu-tour-hong-kong-4n3d-disney-land-cau-thanh-ma-2.jpg"
              data-src="//cdn2.ivivu.com/2016/09/02/18/ivivu-tour-hong-kong-4n3d-disney-land-cau-thanh-ma-2.jpg"
              alt=""
              width="710"
              height="399"></img>
            <p style={{ textAlign: 'center' }}>
              <i>Dạo Phố Hồng Kông</i>
            </p>
            <h4>NGÀY 02: HONG KONG -CITY TOUR ( ĂN SÁNG, TRƯA, TỐI)</h4>
          </div>
        </frame>
      </div>
    </>
  );
}

export default Trip;
