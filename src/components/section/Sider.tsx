
import { Layout, Menu } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon_control from '../../images/Icon_control.png';
import Icon_home from '../../images/Icon_home.png';
import Icon_manage from '../../images/Icon_manage.png';
import Icon_setting from '../../images/Icon_setting.png';
import Logo from '../../images/Logo_insight.png';


const { Sider } = Layout;

const { SubMenu } = Menu;
const SiderWeb = () => {

  const [collapsed, setCollapsed] = useState(false);

  return (

    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width="321px"
      className="Sider"
      style={{ background: "#E5E5E5" }}
    >
      <img src={Logo} className="logo" />
      <Menu
        style={{ background: "#E5E5E5", fontSize: "24px" }}
        mode="inline"
        defaultSelectedKeys={['1']}
      >
        <Menu.Item key="1" icon={<img src={Icon_home} />}>
          <Link to="/">
            Trang chủ
          </Link>
        </Menu.Item>

        <Menu.Item key="2" icon={<img src={Icon_manage} />}>
          <Link to="/ticket-manage/events">
            Quản lý vé
          </Link>
        </Menu.Item>

        <Menu.Item key="3" icon={<img src={Icon_control} />}>
          <Link to="/checking-ticket">
            Đổi soát vé
          </Link>
        </Menu.Item>

        <SubMenu key="sub3" title="Cài đặt" icon={<img src={Icon_setting} />}>
          <Menu.Item key="11">
            <Link to="/setting/service">
              Gói dịch vụ
            </Link>
          </Menu.Item>
        </SubMenu>

      </Menu>
    </Sider>
  );

}
export default SiderWeb;
