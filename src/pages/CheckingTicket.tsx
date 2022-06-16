import { SearchOutlined } from '@ant-design/icons';
import { Button, Card, Col, Input, Layout, Radio, Row, Select, Space, Table } from 'antd';
import Form from 'antd/lib/form/Form';
import { FC, useEffect, useState } from 'react';
import { CSVLink } from 'react-csv';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import StylingCalendar from '../components/calendar/StyledCalendar';
import { columnsCheckingTicket } from '../config/colums';
import { headersTicket } from '../config/data';
import { dateToM_D_Y } from '../config/function';
import { RootState } from '../store';
import { getCheckingTicket, getCheckingTicketCheckbox } from '../store/actions/CheckingTicketAction';

const { Content } = Layout;
const { Option } = Select;

type Props = {
  [key: string]: any;
};

const CheckingTicket: FC<Props> = (props) => {
  const {
    status = 0,
    dayStart = 0,
    dayEnd = 0,
    select = '0'
  }: any = useParams();

  const [usageStatus, setUsageStatus] = useState<number>(0);
  const [dateStart, setDateStart] = useState<string>('');
  const [dateEnd, setDateEnd] = useState<string>('');
  const [valueSreach, setvalueSreach] = useState('')
  const [valueSelect, setValueSelect] = useState('0')

  const { ticket } = useSelector((state: RootState) => state.ticketCheck);
  const { ticketSelect } = useSelector((state: RootState) => state.ticketCheckSelect);

  // console.log('select', valueSelect)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCheckingTicket(status, dayStart, dayEnd, valueSreach, select));
    dispatch(getCheckingTicketCheckbox())
  }, [status, dayStart, dayEnd, valueSreach, select]);

  const onFinish = () => {
    const statusFiter = usageStatus
    const dateStartFiter = dateToM_D_Y(dateStart) === '-undefined-undefined' ? 0 : dateToM_D_Y(dateStart)
    const dateEndFiter = dateToM_D_Y(dateEnd) === '-undefined-undefined' ? 0 : dateToM_D_Y(dateEnd)
    const selectFiter = valueSelect
    return props.history.push(`/checking-ticket/status/${statusFiter}/dayStart/${dateStartFiter}/dayEnd/${dateEndFiter}/select/${selectFiter}`);
  };

  return (
    <Content
      className="site-layout-conten"
      style={{ padding: 24 }}
    >
      <Row>
        <Col span={17} style={{ borderRadius: "24px" }}>
          <Card title="Đổi soát vé" style={{ fontSize: 16, borderRadius: 24 }}>

            <Row style={{ marginTop: 10 }}>
              <Col span={12}>
                <Input
                  value={valueSreach}
                  onChange={(e: any) => setvalueSreach(e.target.value)}
                  placeholder="Tìm bằng số vé"
                  className='Input-sreach'
                  suffix={<SearchOutlined style={{ fontSize: 24 }} />}
                />
              </Col>

              <Col span={12} className="card-header"
                style={{ display: 'flex', justifyContent: 'flex-end' }}>
                {usageStatus === 2
                  ?
                  <Button
                    style={{
                      width: 181, fontWeight: 'bold',
                      fontSize: 18, color: '#FFFFFF', backgroundColor: '#FF993C'
                    }}
                  >
                    Chốt kiểm soát
                  </Button>
                  :
                  <CSVLink
                    data={ticket} headers={headersTicket} filename={"my-file.csv"}>
                    <Button
                      className="bt-fitter"
                      style={{ width: 181, fontWeight: 'bold', fontSize: 18, }}>
                      Xuất file (.csv)
                    </Button>
                  </CSVLink>
                }
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <Table
                  columns={columnsCheckingTicket}
                  pagination={{defaultPageSize: 8, position: ["bottomCenter"] }}
                  dataSource={ticket}
                  rowKey="id"
                />
              </Col>
            </Row>
          </Card>
        </Col>

        <Col span={6} style={{ marginLeft: 30 }}>
          <Card
            title="Lọc vé"
            style={{
              fontSize: 16,
              borderRadius: 24
            }}>
            <Form
              name="fitter ticket"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Row>
                <Col span={24}>
                  <Select defaultValue="0" style={{ width: 360 }} onChange={(e) => setValueSelect(e)}>
                    <Option value="0" key={0}>Tất cả</Option>
                    {ticketSelect.map((value: any, index: any) => (
                      <Option value={value} key={index + 1}>{value}</Option>
                    ))}
                  </Select>
                </Col>
              </Row><br />

              <Row>
                <Col span={12}>Tình trạng đổi soát</Col>
                <Col span={12}>
                  <Radio.Group
                    value={usageStatus}
                    onChange={(e) => setUsageStatus(e.target.value)}
                    style={{ fontSize: 24 }}
                  >
                    <Space direction="vertical">
                      <Radio value={0}>Tất cả</Radio>
                      <Radio value={1}>Đã đổi soát</Radio>
                      <Radio value={2}>Chưa đổi soát</Radio>
                    </Space>
                  </Radio.Group>
                </Col>
              </Row><br />

              <Row>
                <Col span={12}>Loại vé</Col>
                <Col span={12}>Vé cổng</Col>
              </Row><br />

              <Row>
                <Col span={12}>Từ ngày</Col>
                <Col span={12}
                ><StylingCalendar
                    valueDay={dateStart}
                    setValueDay={setDateStart}
                  />
                </Col>
              </Row><br />

              <Row>
                <Col span={12}>Đến ngày</Col>
                <Col span={12}>
                  <StylingCalendar
                    valueDay={dateEnd}
                    setValueDay={setDateEnd}
                  />
                </Col>
              </Row><br /><br />

              <Row className="enter">
                <Col span={24} offset={8} >
                  <Button
                    htmlType="submit"
                    className="btn-orange"
                    style={{ width: '160px', height: '48px', }}>
                    Lọc
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>

    </Content >
  )
};


export default CheckingTicket;
