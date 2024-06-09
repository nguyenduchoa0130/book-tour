import { Space, Divider } from 'antd';
import cx from 'classnames';
import styles from './styles.module.css';

const infoConfigs = [
  {
    key: 've-ivi-vu-com',
    title: 'Về iVIVU.com',
    contents: ['Chúng tôi', 'iVIVU Blog', 'PMS - Miễn phí']
  },
  {
    key: 'thong-tin-can-biet',
    title: 'Thông Tin Cần Biết',
    contents: ['Điều kiện & Điều khoản', 'Quy chế hoạt động', 'Câu hỏi thường gặp']
  },
  {
    key: 'doi-tac',
    title: 'Đối tác',
    contents: ['Quy chế bảo hiểm Cathay', 'Yêu cầu bồi thường Cathay', 'Quy chế trả góp']
  }
];

const Footer = () => {
  return (
    <div className={cx(styles.footer)}>
      <div className="row pb-3">
        <div className="col-12">
          <div className="row">
            {infoConfigs.map((info, idx) => (
              <div key={`footer-section-${idx}`} className="col-3">
                <Space size="small" direction="vertical">
                  <h6 className="text-uppercase font-weight-700">{info.title}</h6>
                  {info.contents.map((content, idx) => (
                    <p key={`footer-section-${idx}`}>{content}</p>
                  ))}
                </Space>
              </div>
            ))}
            <div className="col-3">
              <Space size="small" direction="vertical">
                <h6 className="text-uppercase font-weight-700">Được chứng nhận</h6>
                <img src="https://cdn1.ivivu.com/bocongthuong.png" alt="Cert Img" />
              </Space>
            </div>
          </div>
        </div>
      </div>
      <Divider plain style={{ backgroundColor: '#fff' }} />
      <div className={styles.footer_copyright}>
        <p className="text-center">&copy; Project {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default Footer;
