import { Card, Col, Layout, Row } from 'antd';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StylingCalendar from '../components/calendar/StyledCalendar';
import AreaChart from '../components/chart/AreaChart';
import DonutChart from '../components/chart/DonutChart';
import { formatNumber } from '../config/function';
import { RootState } from '../store';
import { getDataTableDoanhThu, getDataTableSoVe } from '../store/actions/ChartAction';

const { Content } = Layout;

const dataDonut1 = [13568, 56024];
const dataDonut2 = [28302, 30256];


const getWeeks = (d: any) => {
  let first: any = new Date(d.getFullYear(), 0, 1);
  let dayms = 1000 * 60 * 60 * 24;
  let numday = ((d - first) / dayms)
  let weeks = Math.ceil((numday + first.getDay() + 1) / 7);
  return weeks
}

function convertDate(inputFormat: any) {
  function pad(s: any) { return (s < 10) ? '0' + s : s; }
  let d = new Date(inputFormat)
  return [pad(d.getMonth() + 1), pad(d.getDate()), d.getFullYear()].join('/')
}

export const dateYear = (day: string) => {
  let datearray = day.split("/");
  return datearray[2];
}

const Home: FC = () => {

  const [dateDonut, setDateDonut] = useState<string>(convertDate(new Date()));
  const [dateArea, setDateArea] = useState<string>(convertDate(new Date()));
  const chartSeries = [14, 17, 59, 21, 22, 95, 18];

  const dispatch = useDispatch();
  const { dataTable, dataTableSoVe } = useSelector((state: RootState) => state.doanhthu)
  const chartSeri: any = Object.values(dataTable)[0]

  // console.log('dataTableSoVe',dataTableSoVe)
  const dataDon1: any = dataTableSoVe[0] ? Object.values(dataTableSoVe[0])[0] : dataDonut1
  const dataDon2: any = dataTableSoVe[0] ? Object.values(dataTableSoVe[1])[0] : dataDonut2

  useEffect(() => {
    dispatch(getDataTableDoanhThu(getWeeks(new Date(dateDonut)), dateYear(dateDonut)))
    dispatch(getDataTableSoVe(getWeeks(new Date(dateArea)), dateYear(dateArea)))
  }, [dispatch, dateDonut, dateArea]);

  return (
    <Content
      className="site-layout-conten"
      style={{
        padding: 24,
        minHeight: 280,
        marginRight: 33,
      }}
    >
      <Card title="Thống kê" bordered={false} style={{ fontSize: 20, borderRadius: 24 }}>

        <Row style={{ display: 'flex', justifyContent: 'space-between', marginRight: 30 }}>
          <span style={{ fontWeight: 600, fontSize: '18px', lineHeight: '28px' }}>Doanh Thu</span>
          <span>
            <StylingCalendar
              valueDay={dateDonut}
              setValueDay={setDateDonut}
            />
          </span>
        </Row>

        <Row style={{ marginTop: "40px" }}>
          <Col span={24}>
            {chartSeri
              ? <AreaChart data={chartSeri} ></AreaChart>
              : <AreaChart data={chartSeries} ></AreaChart>
            }
          </Col>
        </Row>

        <Row style={{ marginTop: "40px" }}>
          <Col span={24} style={{ fontSize: "14px" }}>
            Tổng danh thu theo tuần
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <span style={{ fontSize: "24px", fontWeight: "bold" }}>
              {chartSeri
                ? formatNumber(chartSeri.reduce((a: number, b: number) => a + b, 0) * 1000000)
                : 0}
              {" "}
            </span>
            <span style={{ fontSize: "14px", fontWeight: 500 }}>đồng</span>
          </Col>
        </Row>

        <Row style={{ marginTop: "40px" }}>
          <Col span={3}>
            <span>
              <StylingCalendar
                valueDay={dateArea}
                setValueDay={setDateArea}
              /></span>
          </Col>

          <Col span={8}>
            <Row style={{ display: 'flex', justifyContent: 'center', fontSize: 18, fontWeight: 600 }}>Gói gia đình</Row>
            <Row style={{ display: 'flex', justifyContent: 'center' }}>
              {dataDon1
                ? <DonutChart data={dataDon1} ></DonutChart>
                : <DonutChart data={dataDonut1}></DonutChart>
              }
            </Row>
          </Col>

          <Col span={8}>
            <Row style={{ display: 'flex', justifyContent: 'center', fontSize: 18, fontWeight: 600 }}>Gói sự kiện</Row>
            <Row style={{ display: 'flex', justifyContent: 'center' }}>
              {dataDon2
                ? <DonutChart data={dataDon2} ></DonutChart>
                : <DonutChart data={dataDonut2}></DonutChart>
              }
            </Row>
          </Col>

          <Col span={5}>
            <br /> <br />
            <Row style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ width: 44, height: 20, borderRadius: 4, background: '#4F75FF', marginRight: 8 }}></span>
              <span>Vé đã sự dụng</span>
            </Row>
            <Row style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ width: 44, height: 20, borderRadius: 4, background: '#FF8A48', marginRight: 8 }}></span>
              <span>Vé đã sự dụng</span>
            </Row>
          </Col>

        </Row>
      </Card>

    </Content>
  )
};

export default Home;
