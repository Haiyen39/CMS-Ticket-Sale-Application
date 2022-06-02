import { Button, Checkbox, Col, Form, Modal, Radio, Row } from 'antd';
import { FC, useState } from 'react';
import { dateToM_D_Y } from '../../config/function';
import Icon_fitter from '../../images/Icon_fitter.png';
import StylingCalendar from '../calendar/StyledCalendar';

const RadioGroup = Radio.Group;

type Props = {
  [key: string]: any;
};

const ModelFilterTicket: FC<Props> = (props) => {
  const [visible, setVisible] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const [checkInTicket, setCheckInTicket] = useState<number[]>([]);
  const [usageStatus, setUsageStatus] = useState<number>(0);

  const [dayUsed, setDayUsed] = useState('');
  const [dayEnd, setDayEnd] = useState('');

  const hanleCheckAll = () => {
    setDisabled(!disabled);
  }
  // console.log('dayUsed', dayUsed)

  const onFinish = () => {
    const checkInFilter = checkInTicket.includes(0) ? [0] : checkInTicket
    const statusFiter = usageStatus
    const dayUsedFiter = dateToM_D_Y(dayUsed) === '-undefined-undefined' ? 0 :  dateToM_D_Y(dayUsed)
    const dayEndFiter = dateToM_D_Y(dayEnd) === '-undefined-undefined' ? 0 :  dateToM_D_Y(dayEnd)
    // dayTicket
    return props.history.push(`/ticket-manage/events/checkIn/${checkInFilter[0] ? checkInFilter : 0}/status/${statusFiter}/dayUsed/${dayUsedFiter}/dayEnd/${dayEndFiter}`) || setVisible(false);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Button
        className="bt-bold-18"
        icon={<img src={Icon_fitter} style={{ marginRight: '5px' }} />}
        style={{ width: 127, fontWeight: 'bold', fontSize: 18, }}
        onClick={() => setVisible(true)}
      >lọc vé</Button>

      <Modal
        title="Lọc vé"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={634}
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
            <Col span={12}>
              <Row style={{ fontWeight: 600 }}> Từ ngày</Row>
              <Row style={{ marginTop: 5 }}>
                <StylingCalendar
                  valueDay={dayUsed}
                  setValueDay={setDayUsed}
                />
              </Row>
            </Col>
            <Col span={12}>
              <Row style={{ fontWeight: 600 }}>Đến ngày</Row>
              <Row style={{ marginTop: 5 }}>
                <StylingCalendar
                  valueDay={dayEnd}
                  setValueDay={setDayEnd}
                />
              </Row>
            </Col>
          </Row>

          <Row style={{ marginTop: 20 }}>
            <Col span={24} style={{ fontWeight: 600 }}>
              Tình trạng sự dụng
            </Col>
            <Col span={24} style={{ marginTop: 5 }}>
              <RadioGroup
                value={usageStatus}
                onChange={(e) => setUsageStatus(e.target.value)}
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <Radio value={0}>Tất cả</Radio>
                <Radio value={1}>Chưa sự dụng</Radio>
                <Radio value={2}>Đã sự dụng</Radio>
                <Radio value={3}>Hết hạn</Radio>
              </RadioGroup>
            </Col>
          </Row>

          <Row style={{ marginTop: 20 }}>
            <Col span={24} style={{ fontWeight: 600 }}>
              Cổng check-in
            </Col>
            <Col span={24}>
              <Checkbox.Group
                value={checkInTicket}
                onChange={(e: any) => setCheckInTicket(e)}
                style={{ marginTop: 5, fontSize: 16 }}>
                <Row style={{ marginTop: 5, width: '600px' }}>
                  <Col span={8}><Checkbox value={0} onChange={hanleCheckAll}>Tất cả</Checkbox></Col>
                  <Col span={8}><Checkbox value={1} disabled={disabled}>Cổng 1</Checkbox></Col>
                  <Col span={8}><Checkbox value={2} disabled={disabled}>Cổng 2</Checkbox></Col>
                </Row>
                <Row style={{ marginTop: 5 }}>
                  <Col span={8}><Checkbox value={3} disabled={disabled}>Cổng 3</Checkbox></Col>
                  <Col span={8}><Checkbox value={4} disabled={disabled}>Cổng 4</Checkbox></Col>
                  <Col span={8}><Checkbox value={5} disabled={disabled}>Cổng 5</Checkbox></Col>
                </Row>
              </Checkbox.Group>
            </Col>
          </Row>

          <Row style={{ marginTop: 30, fontWeight: 600 }}>
            <Col span={24} offset={8}>
              <Button className="bt-cancel" htmlType="submit">
                Lọc
              </Button>
            </Col>
          </Row>
        </Form>

      </Modal>
    </>
  )
};


export default ModelFilterTicket;
