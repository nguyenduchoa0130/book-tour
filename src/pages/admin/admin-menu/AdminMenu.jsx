import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import './styles.css';
import menuConfigs from './menuConfigs';

const AdminMenu = () => {
  return (
    <div className="admin-menu">
      <Menu theme="dark" mode="vertical">
        {menuConfigs.map(config => (
          <Menu.Item key={config.key}>
            <Link to={config.path}>{config.title}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};
export default AdminMenu;
