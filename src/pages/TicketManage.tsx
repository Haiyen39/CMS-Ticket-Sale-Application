import { SearchOutlined } from '@ant-design/icons';
import { Button, Card, Col, Input, Layout, Row, Table, Tabs } from 'antd';
import { FC, useEffect, useState } from 'react';
import { CSVLink } from "react-csv";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ModelFilterTicket from '../components/Modal/ModelFilterTicket';
import { columnsTicketFamily, columnsTicketManage } from '../config/colums';
import { headersMn } from '../config/data';
import { RootState } from '../store';
import { getTicketFamily, getTicketMn } from '../store/actions/TicketManageActions';

const { Content } = Layout;
const { TabPane } = Tabs;

type Props = {
  [key: string]: any;
};

const TicketManage: FC = (props: Props) => {

  const {
    checkIn = 0,
    status = 0,
    dayUsed = 0,
    dayEnd = 0,
  }: any = useParams();

  function callback(key: any) {
    console.log(key);
  }

  const { ticket } = useSelector((state: RootState) => state.ticket);
  const { ticket: ticketFamily } = useSelector((state: RootState) => state.ticketFamily);
  const dispatch = useDispatch();
  const [valueSreachEvent, setvalueSreachEvent] = useState('')
  const [valueSreachFamily, setvalueSreachFamily] = useState('')

  useEffect(() => {
    dispatch(getTicketMn({ checkIn, status, dayUsed, dayEnd, valueSreachEvent }));
    dispatch(getTicketFamily({ checkIn, status, dayUsed, dayEnd, valueSreachFamily }));
  }, [dispatch, checkIn, status, dayUsed, dayEnd, valueSreachEvent]);

  return (
    <Content
      className="site-layout-conten"
      style={{ marginRight: '33px', padding: 24, minHeight: 280, }}>
      <Card title="Danh sách vé" bordered={false} style={{ fontSize: 20, borderRadius: 24 }}>
        <Tabs
          defaultActiveKey="1"
          onChange={callback}
          style={{ fontSize: 16 }}
        >

          {/*  Gói sự kiện */}
          <TabPane tab="Gói sự kiện" key="1">
            <Row style={{ marginTop: 10 }}>
              <Col span={12}>
                <Input
                  value={valueSreachEvent}
                  onChange={(e: any) => setvalueSreachEvent(e.target.value)}
                  placeholder="Tìm bằng số vé"
                  className='Input-sreach'
                  suffix={<SearchOutlined style={{ fontSize: 24 }} />}
                />
              </Col>

              <Col span={12} className="card-header"
                style={{ display: 'flex', justifyContent: 'flex-end' }}
              >
                <ModelFilterTicket {...props} />

                <CSVLink
                  data={ticket} headers={headersMn} filename={"my-file.csv"}
                >
                  <Button
                    className="bt-fitter"
                    style={{ width: 181, fontWeight: 'bold', fontSize: 18, }}>
                    Xuất file (.csv)
                  </Button>
                </CSVLink>

              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <Table
                  columns={columnsTicketManage}
                  pagination={{ defaultPageSize: 8, position: ["bottomCenter"] }}
                  dataSource={ticket}
                  rowKey="id"
                />
              </Col>
            </Row>
          </TabPane>

          {/* Gói gia đình */}
          <TabPane tab="Gói gia đình" key="2">

            <Row style={{ marginTop: 10 }}>
              <Col span={12}>
                <Input
                  value={valueSreachFamily}
                  onChange={(e: any) => setvalueSreachFamily(e.target.value)}
                  placeholder="Tìm bằng số vé"
                  className='Input-sreach'
                  suffix={<SearchOutlined style={{ fontSize: 24 }} />}
                />
              </Col>

              <Col
                span={12} className="card-header"
                style={{ display: 'flex', justifyContent: 'flex-end' }}
              >
                <ModelFilterTicket {...props} />

                <CSVLink
                  data={ticketFamily} headers={headersMn} filename={"my-file.csv"}>
                  <Button
                    className="bt-fitter"
                    style={{ width: 181, fontWeight: 'bold', fontSize: 18, }}>
                    Xuất file (.csv)
                  </Button>
                </CSVLink>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <Table
                  columns={columnsTicketFamily}
                  pagination={{ defaultPageSize: 8, position: ["bottomCenter"] }}
                  dataSource={ticketFamily}
                  rowKey="id"
                />
              </Col>
            </Row>

          </TabPane>

        </Tabs>

      </Card>
    </Content>
  )
};

export default TicketManage;
