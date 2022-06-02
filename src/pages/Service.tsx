import { SearchOutlined } from '@ant-design/icons';
import { Button, Card, Col, Input, Layout, Row, Table } from 'antd';
import { FC, useEffect, useState } from 'react';
import { CSVLink } from 'react-csv';
import { useDispatch, useSelector } from 'react-redux';
import ModelCreate from '../components/Modal/ModelCreate';
import { columnsService } from '../config/colums';
import { RootState } from '../store';
import { getService } from '../store/actions/ServiceAction';

const { Content } = Layout;

const Service: FC = () => {
  const [valueSreach, setValueSreach] = useState('')

  const dispatch = useDispatch();
  const { ticket, ticket_create, ticket_update } = useSelector((state: RootState) => state.service);

  useEffect(() => {
    dispatch(getService({ valueSreach }));
  }, [dispatch, valueSreach, ticket_create, ticket_update]);

  return (
    <Content
      className="site-layout-conten"
      style={{ marginRight: '33px', padding: 24, minHeight: 280, }}
    >
      <Card title="Danh sách gói vé" style={{ fontSize: 16, borderRadius: 24 }}>
        <Row style={{ marginTop: 10 }}>
          <Col span={12}>
            <Input
              value={valueSreach}
              onChange={(e: any) => setValueSreach(e.target.value)}
              placeholder="Tìm bằng mã gói"
              className='Input-sreach'
              suffix={<SearchOutlined style={{ fontSize: 24 }} />}
            />
          </Col>

          <Col span={12} className="card-header"
            style={{ display: 'flex', justifyContent: 'flex-end' }}>
            {/* <CSVLink
              data={ticket} headers={headerSer} filename={"my-file.csv"}
            > */}
            <Button
              className="bt-fitter"
              style={{ width: 181, fontWeight: 'bold', fontSize: 18, }}>
              Xuất file (.csv)
            </Button>
            {/* </CSVLink> */}
            <ModelCreate />
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Table
              columns={columnsService}
              pagination={{ defaultPageSize: 8, position: ["bottomCenter"] }}
              dataSource={ticket}
              rowKey="id"
            />
          </Col>
        </Row>
      </Card>
    </Content>
  )
};

export default Service;
