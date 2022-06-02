import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import HeaderWeb from './components/section/Header';
import SiderWeb from './components/section/Sider';
import CheckingTicket from './pages/CheckingTicket';
import Home from './pages/Home';
import Service from './pages/Service';
import TicketManage from './pages/TicketManage';

const App = () => {
  
  return (
    <Layout style={{ minHeight: "100vh" }}>

      <SiderWeb/>

      <Layout
        className="site-layout"
        style={{ background: "#E5E5E5" }}
      >
        <HeaderWeb />

        <Switch>
          <Route path="/" component={Home} exact />

          <Route path="/ticket-manage/events" component={TicketManage} exact />
          <Route path="/ticket-manage/events/checkIn/:checkIn/status/:status/dayUsed/:dayUsed/dayEnd/:dayEnd" component={TicketManage} exact />
             
          <Route path="/checking-ticket" component={CheckingTicket} exact />
          <Route path="/checking-ticket/status/:status/dayStart/:dayStart/dayEnd/:dayEnd/select/:select" component={CheckingTicket} exact />
          
          <Route path="/setting/service" component={Service} exact />
        </Switch>
      </Layout>

    </Layout>
  );

}
export default App;
