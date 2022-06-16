
import { SearchOutlined } from '@ant-design/icons';
import { Input, Layout } from 'antd';
import { FC } from 'react';
import Avata from '../../images/Avata.png';
import Icon_bell from '../../images/Icon_bell.png';
import Icon_gmail from '../../images/Icon_gmail.png';

const { Header } = Layout;

const HeaderWeb: FC = () => {


  return (
    <Header
      className="site-layout-background"
      style={{
        padding: "17px 0px",
        height: "82px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>

        <Input
          placeholder="Tìm bằng số vé"
          className='Input-sreach'
          style={{width: 470}}
          suffix={<SearchOutlined style={{ fontSize: 24 }} />}
        />

      <div className="user-wrapper">
        <img src={Icon_gmail} width="24px" height="24px" alt="" />
        <img src={Icon_bell} width="24px" height="24px" alt="" />
          <img src={Avata} width="48px" height="48px" alt="Avatar" />
      </div>

    </Header>
  );
};

export default HeaderWeb;