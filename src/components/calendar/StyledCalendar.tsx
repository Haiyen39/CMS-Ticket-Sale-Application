import {
  CalendarOutlined,
  LeftOutlined,
  RightOutlined
} from '@ant-design/icons';
import { Col, Input, Popover, Radio, Row } from 'antd';
import moment from 'moment';
import { FC, useEffect, useState } from 'react';
import {
  dayOfWeekStyle,
  daySelectedStyle, dayStyle, formatMonthAndYear, setup, weekStyle
} from "./setup";
import "./style.scss";

const weekDay = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']
type Props = {
  valueDay?: any;
  setValueDay?: any;

};

const StylingCalendar: FC<Props> = (props) => {
  const [calendar, setCalendar] = useState<any>([]);
  const [value, setValue] = useState(moment());
  // const [valueDay, setValueDay] = useState();

  const [valueSave, setValueSave] = useState(moment())
  const [buttonRadio, setButtonRadio] = useState<String>("theongay");

  const handleDayClick = (day: any) => {
    setValue(day);
    setValueSave(day);
    // props.setValueDay(day.format("DD/MM/YYYY"))
    props.setValueDay(day.format("MM/DD/YYYY"))
  }

  useEffect(() => {
    setCalendar(setup(value));
  }, [value]);

  const content = (
    <div className="Calendar">
      <Row gutter={8} style={{ fontSize: 18, fontWeight: 'bold' }}>
        <Col>
          <LeftOutlined onClick={() => setValue(value.clone().subtract(1, "month"))} />
        </Col>

        <Col >
          {formatMonthAndYear(value)}
        </Col>

        <Col>
          <RightOutlined onClick={() => setValue(value.clone().add(1, "month"))} />
        </Col>

      </Row>
      <Row >
        <Col span={24} >
          <Radio.Group
            name="radiogroup"
            value={buttonRadio}
            onChange={(e: any) => setButtonRadio(e.target.value)}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              margin: '14px 0'
            }}
          >
            <Radio value={"theongay"}>Theo ngày</Radio>
            <Radio value={"theotuan"}>Theo tuần</Radio>
          </Radio.Group>
        </Col>

        <Col span={24}>
          <div className="Calendar-wrap">
            <div className="Calendar-header">
              {weekDay.map((day: any, index: number) => (<div className="Calendar-header-item" key={index}>{day}</div>))}
            </div>

            {calendar.map((week: any, index: number) => (
              <div
                className={`Calendar-week Calendar-week-${weekStyle(valueSave, week, buttonRadio)}`}
                key={index}
              >

                {week.map((day: any, index: number) => (
                  <div onClick={() => handleDayClick(day)} key={index}>
                    <div
                      className={`Calendar-day Calendar-day-${dayStyle(
                        value,
                        day
                      )} Calendar-day-${daySelectedStyle(
                        valueSave,
                        day,
                        buttonRadio
                      )} Calendar-week-${dayOfWeekStyle(
                        valueSave,
                        day,
                        buttonRadio
                      )} `}
                    >
                      {day.format("D").toString()}
                    </div>
                  </div>
                ))}

              </div>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  )

  return (
    <div>
      <Popover placement="bottomRight" content={content} trigger="click">
        <Input
          className="input-calendar"
          placeholder="DD/MM/YY"
          style={{ borderRadius: 8, fontSize: ' 10px !important ' }}
          value={props.valueDay}
          suffix={
            <CalendarOutlined
              style={{ color: '#FF993C' }}
            />
          }
        />
      </Popover>
    </div>

  )
};

export default StylingCalendar;
