import { MoreOutlined } from '@ant-design/icons';
import { Button, Col, Form, Modal, Row } from 'antd';
import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SecondsToM_D_Y } from '../../config/function';
import { UpdateDayEndTicketEventFml } from '../../store/actions/TicketManageActions';
import StylingCalendar from '../calendar/StyledCalendar';

type Props = {
  [key: string]: any;
};

const ModelChangeDateFml: FC<Props> = (props) => {
  const [visible, setVisible] = useState(false);

  const [DateEnd, setDateEnd] = useState(SecondsToM_D_Y(props.data.DateEnd.seconds))
  const dispatch = useDispatch();

  useEffect(() => {
  }, [dispatch, DateEnd])

  const onFinish = () => {
    dispatch(UpdateDayEndTicketEventFml(DateEnd, props.data.id));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log(errorInfo);
  };

  return (
    <>
        <MoreOutlined onClick={() => setVisible(true)} />
      <Modal
        title="Đổi ngày sự dụng vé"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={758}
        style={{ fontSize: 16 }}
        footer={null}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >

          <Row>
            <Col span={6} style={{ fontWeight: 600 }}>
              <span> Tên gói vé</span>
            </Col>
            <Col span={14} style={{ marginTop: 5 }}>
              <span>PKG20210502</span>
            </Col>
          </Row>

          <Row style={{ marginTop: 23 }}>
            <Col span={6} style={{ fontWeight: 600 }}>
              <span> Số vé</span>
            </Col>
            <Col span={14} style={{ marginTop: 5 }}>
              <span>Vé cổng - Gói sự kiện</span>
            </Col>
          </Row>

          <Row style={{ marginTop: 23 }}>
            <Col span={6} style={{ fontWeight: 600 }}>
              <span> Tên sự kiện</span>
            </Col>
            <Col span={14} style={{ marginTop: 5 }}>
              <span>Hội trợ triển lãm hàng tiêu dùng 2021</span>
            </Col>
          </Row>

          <Row style={{ marginTop: 23 }}>
            <Col span={6} style={{ fontWeight: 600 }}>
              <span> Hạn sử dụng</span>
            </Col>
            <Col span={14} style={{ marginTop: 5 }}>
              <span>
                <StylingCalendar
                  valueDay={DateEnd}
                  setValueDay={setDateEnd}
                />
              </span>
            </Col>
          </Row>

          <Row style={{ marginTop: 30, fontWeight: 600 }}>
            <Col span={24} offset={6}>
              <Button onClick={() => setVisible(false)} className="bt-cancel">
                Hủy
              </Button>

              <Button className="bt-save" htmlType="submit">
                Lưu
              </Button>
            </Col>
          </Row>
        </Form>

      </Modal>
    </>
  )
};


export default (ModelChangeDateFml);
