import { Button, Checkbox, Col, DatePicker, Form, Input, Modal, Row, Select } from 'antd';
import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createService } from '../../store/actions/ServiceAction';
import StylingCalendar from '../calendar/StyledCalendar';

const Option = Select.Option;

const ModelCreate: FC = () => {

  const [visible, setVisible] = useState(false);

  const [Price, setPrice] = useState('');
  const [Qty, setQty] = useState('');

  const [DateUsedDMY, setDateUsedDMY] = useState('');
  const [DateUsedhms, setDateUsedhms] = useState('');

  const [DateEndDMY, setDateEndDMY] = useState('');
  const [DateEndhms, setDateEndhms] = useState('');

  const [Status, setStatus] = useState(1);
  const [TicketName, setTicketName] = useState('');
  const [TicketPrice, setTicketPrice] = useState('');

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const [Clieck1, setClieck1] = useState(true);
  const [Clieck2, setClieck2] = useState(true);

  const onChange1 = (checkedValues: any) => {
    if (checkedValues.target.checked) setClieck1(false)
    else setClieck1(true)
  }

  const onChange2 = (checkedValues: any) => {
    if (checkedValues.target.checked) setClieck2(false)
    else setClieck2(true)
  }
  const dispatch = useDispatch();

  useEffect(() => {

  }, [Clieck1, Clieck2]);

  const ComboPrice = ({ Price: Number(Price), Qty: Number(Qty) });

  const DateUsed = new Date(
    (new Date(DateUsedDMY).getTime() ) +
    ((+DateUsedhms.split(':')[0]) * 60 * 60 
    + (+DateUsedhms.split(':')[1]) * 60
    + (+DateUsedhms.split(':')[2]))*1000
  );

  // DateEndDMY
  const DateEnd = new Date(
    (new Date(DateEndDMY).getTime()) +
    (+DateEndhms.split(':')[0]) * 60 * 60
    + (+DateEndhms.split(':')[1]) * 60
    + (+DateEndhms.split(':')[2])
  );
  // BookingCode
  const BookingCode = 'AL'+ Number(Math.random().toPrecision(8))*100000000
    
  const onFinish = () => {
    dispatch(createService({
      BookingCode,
      TicketName,
      TicketPrice,
      ComboPrice,
      DateUsed,
      DateEnd,
      Status,
    }))
  };

  return (
    <>
      <Button
        type="ghost"
        style={{
          color: "#ffffff",
          background: "#FF993C",
          border: "1px solid #FF993C",
          fontWeight: 'bold',
          fontSize: 18
        }}
        onClick={() => setVisible(true)}>
        Th??m g??i v??
      </Button>

      <Modal
        title="Th??m g??i v??"
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
            <Col span={24} style={{ fontWeight: 600 }}>
              T??n g??i v??
            </Col>
            <Col span={24} style={{ marginTop: 5 }}>
              <Input
                className="molde-input"
                style={{ width: 367 }}
                placeholder="Nh???p t??n g??i v??"
                value={TicketName}
                onChange={(e) => setTicketName(e.target.value)}
              />
            </Col>
          </Row>

          <Row style={{ marginTop: 25 }}>
            <Col span={12}>
              <Row >
                <Col span={24} style={{ fontWeight: 600, marginBottom: 5 }}>Ng??y ??p d???ng</Col>
                <Col span={10}>
                  <StylingCalendar
                    valueDay={DateUsedDMY}
                    setValueDay={setDateUsedDMY}
                  />
                </Col>
                <Col span={12}>
                  <DatePicker
                    size="large"
                    picker='time'
                    placeholder="hh:mm:ss"
                    className="input-calendar"
                    // defaultValue={moment('00:00:00', 'hh:mm:ss')}
                    onChange={(a, b) => setDateUsedhms(b)}
                  />
                </Col>
              </Row>
            </Col>

            <Col span={12}>
              <Row >
                <Col span={24} style={{ fontWeight: 600, marginBottom: 5 }}>Ng??y h???t h???n</Col>
                <Col span={10}>
                  <StylingCalendar
                    valueDay={DateEndDMY}
                    setValueDay={setDateEndDMY}
                  />
                </Col>

                <Col span={12}>
                  <DatePicker
                    size="large"
                    picker='time'
                    placeholder="hh:mm:ss"
                    className="input-calendar"
                    // defaultValue={moment('00:00:00', 'hh:mm:ss')}
                    onChange={(a, b) => setDateEndhms(b)}
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row style={{ marginTop: 25 }}>
            <Col span={24} style={{ fontWeight: 600 }}>
              Gi?? v?? ??p d???ng
            </Col>

            <Col span={24}>
              <Checkbox style={{ fontSize: 16 }} onChange={onChange1}>
                <span> V?? l??? (vn??/v??) v???i gi??</span>
                <span>
                  <Input
                    className="molde-input-money"
                    type='number'
                    placeholder="Gi?? v??"
                    disabled={Clieck1}
                    value={TicketPrice}
                    onChange={(e) => setTicketPrice(e.target.value)}
                  />
                  <span >/ v??</span>
                </span>
              </Checkbox>
            </Col>

            <Col span={24}>
              <Checkbox style={{ fontSize: 16, marginTop: 12 }} onChange={onChange2}>
                <span> Combo v?? v???i gi?? </span>
                <span>
                  <Input
                    className="molde-input-money"
                    type='number'
                    placeholder="Gi?? v??"
                    value={Price}
                    disabled={Clieck2}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <span>/</span>
                  <Input
                    className="molde-input-money"
                    type='number'
                    style={{ width: 80 }}
                    placeholder="S??? v??"
                    value={Qty}
                    disabled={Clieck2}
                    onChange={(e) => setQty(e.target.value)}
                  />
                  <span >v??</span>
                </span>
              </Checkbox>
            </Col>
          </Row>

          <Row style={{ marginTop: 25 }}>
            <Col span={24} style={{ fontWeight: 600 }}>
              T??nh tr???ng
            </Col>
            <Col span={24}>
              <Select
                value={Status}
                style={{ width: 176, height: 40, fontSize: 16, borderRadius: 8, marginTop: 5 }}
                onChange={(e) => setStatus(e)}>
                <Option value={1} style={{ fontSize: 16 }}>??ang ??p d???ng</Option>
                <Option value={2} style={{ fontSize: 16 }}>H???t h???n</Option>
              </Select>
            </Col>

            <Col span={24} style={{ marginTop: 5 }}>
              <span className='star-red'>*</span>
              <span className='font-faint'>
                l?? th??ng tin b???t bu???c
              </span>
            </Col>
          </Row>

          <Row style={{ marginTop: 30, fontWeight: 600 }}>
            <Col span={24} offset={6}>
              <Button onClick={() => setVisible(false)} className="bt-cancel">
                H???y
              </Button>

              <Button className="bt-save" htmlType="submit" onClick={() => setVisible(false)}>
                L??u
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  )
};


export default ModelCreate;
