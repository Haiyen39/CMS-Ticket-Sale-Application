import { Tag } from 'antd';
import ModelChangeDate from '../components/Modal/ModelChangeDate';
import ModelChangeDateFml from '../components/Modal/ModelChangeDateFml';
import ModelUpdate from '../components/Modal/ModelUpdate';
import { formatNumber, SecondsToM_D_Y, SecondsToM_D_Y_h_m_s } from './function';

export const columnsCheckingTicket = [
  {
    title: 'STT',
    dataIndex: 'id',
    key: 'id',
    render: (text: any, record: any, index: any) => <span>{index + 1}</span>,
  },
  {
    title: 'Số vé',
    dataIndex: 'TicketNember',
    key: 'TicketNember',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: 'Tên sự kiện',
    dataIndex: 'EventName',
    key: 'EventName',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: 'Ngày áp dụng',
    dataIndex: 'DateUsed',
    key: 'DateUsed',
    render: (text: any) => <span>{SecondsToM_D_Y(text.seconds)}</span>,
  },
  {
    title: 'Tên Loại vé',
    dataIndex: 'TicketName',
    key: 'TicketName',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: 'Cổng check In',
    dataIndex: 'CheckIn',
    key: 'CheckIn',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: '',
    dataIndex: 'UsageStatus',
    key: 'UsageStatus',
    render: (tags: any) => (
      <span  >
        {tags === 1 ?
          <span
            style={{ color: "#A5A8B1", fontStyle: 'italic' }}
          >
            Đã đổi soát
          </span>
          :
          <span
            style={{ color: "#FD5959", fontStyle: 'italic' }}
          >
            Chưa đổi soát
          </span>
        }
      </span>
    ),
  }
];




export const columnsTicketManage = [
  {
    title: 'STT',
    dataIndex: 'id',
    key: 'id',
    render: (text: any, record: any, index: any) => <span>{index + 1}</span>,
  },
  {
    title: 'Booking Code',
    dataIndex: 'BookingCode',
    key: 'BookingCode',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: 'Số vé',
    dataIndex: 'TicketNember',
    key: 'TicketNember',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: 'Tên sự kiện',
    dataIndex: 'eventName',
    key: 'eventName',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: 'Tình trạng sử dụng',
    key: 'UsageStatus',
    dataIndex: 'UsageStatus',
    render: (tags: any) => (
      <span  >
        {tags === 1 ?
          <Tag className="bt-tag button-green">
            <span className="status green"></span>
            Chưa sự dụng
          </Tag>

          : tags === 2 ?
            <Tag className="bt-tag button-gray">
              <span className="status gray"></span>
              Đã sự dụng
            </Tag>
            : <Tag className="bt-tag button-red">
              <span className="status red"></span>
              Hết hạn
            </Tag>
        }
      </span>
    ),
  },
  {
    title: 'Ngày sự dụng',
    dataIndex: 'DateUsed',
    key: 'DateUsed',
    render: (text: any) => <span >{SecondsToM_D_Y(text.seconds)}</span>,
  },
  {
    title: 'Ngày xuất vé',
    dataIndex: 'DateTicket',
    key: 'DateTicket',
    render: (text: any) => <span>{SecondsToM_D_Y(text.seconds)}</span>,
  },
  {
    title: 'Cổng check in',
    dataIndex: 'CheckIn',
    key: 'CheckIn',
    render: (text: any) => <span>{text}</span>,
  },
  {
    dataIndex: 'id',
    key: 'id',
    render: (text: any, record: any) =>
      <ModelChangeDate data={record} />
  }
];




export const columnsTicketFamily = [
  {
    title: 'STT',
    dataIndex: 'id',
    key: 'id',
    render: (text: any, record: any, index: any) => <span>{index + 1}</span>,
  },
  {
    title: 'Booking Code',
    dataIndex: 'BookingCode',
    key: 'BookingCode',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: 'Số vé',
    dataIndex: 'TicketNember',
    key: 'TicketNember',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: 'Tên sự kiện',
    dataIndex: 'eventName',
    key: 'eventName',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: 'Tình trạng sử dụng',
    key: 'UsageStatus',
    dataIndex: 'UsageStatus',
    render: (tags: any) => (
      <span  >
        {tags === 1 ?
          <Tag className="bt-tag button-green">
            <span className="status green"></span>
            Chưa sự dụng
          </Tag>

          : tags === 2 ?
            <Tag className="bt-tag button-gray">
              <span className="status gray"></span>
              Đã sự dụng
            </Tag>
            : <Tag className="bt-tag button-red">
              <span className="status red"></span>
              Hết hạn
            </Tag>
        }
      </span>
    ),
  },
  {
    title: 'Ngày sự dụng',
    dataIndex: 'DateUsed',
    key: 'DateUsed',
    render: (text: any) => <span >{SecondsToM_D_Y(text.seconds)}</span>,
  },
  {
    title: 'Ngày xuất vé',
    dataIndex: 'DateTicket',
    key: 'DateTicket',
    render: (text: any) => <span>{SecondsToM_D_Y(text.seconds)}</span>,
  },
  {
    title: 'Cổng check in',
    dataIndex: 'CheckIn',
    key: 'CheckIn',
    render: (text: any) => <span>{text}</span>,
  },
  {
    dataIndex: 'id',
    key: 'id',
    render: (text: any, record: any) =>
      <ModelChangeDateFml data={record} />
  }
];

export const columnsService = [
  {
    title: 'STT',
    dataIndex: 'id',
    key: 'id',
    render: (text: any, record: any, index: any) => <span>{index + 1}</span>,
  },
  {
    title: 'Mã gói',
    dataIndex: 'BookingCode',
    key: 'BookingCode',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: 'Tên gói vé',
    dataIndex: 'TicketName',
    key: 'TicketName',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: 'Ngày áp dụng',
    dataIndex: 'DateUsed',
    key: 'DateUsed',
    render: (text: any) => <span>{SecondsToM_D_Y_h_m_s(text.seconds)}</span>,
  },
  {
    title: 'Ngày hết hạn',
    dataIndex: 'DateEnd',
    key: 'DateEnd',
    render: (text: any) => <span>{SecondsToM_D_Y_h_m_s(text.seconds)}</span>,
  },
  {
    title: 'Giá vé',
    dataIndex: 'TicketPrice',
    key: 'TicketPrice',
    render: (text: any) => <span>{formatNumber(text)}</span>,
    // render: (text: any) => <span>{text}</span>,
  },
  {
    title: 'Giá Combo',
    dataIndex: 'ComboPrice',
    key: 'ComboPrice',
    render: (text: any) => <span>{formatNumber(text.Price)}/{text.Qty}</span>,
  },
  {
    title: 'Tình trạng',
    key: 'Status',
    dataIndex: 'Status',
    render: (tags: any) => (
      <span  >
        {tags === 1 ?
          <Tag
            className="bt-tag button-green"
          >
            <span className="status green"></span>
            Đang áp dụng
          </Tag>
          :
          <Tag
            className="bt-tag button-red"
          >
            <span className="status red"></span>
            Tắt
          </Tag>
        }
      </span>
    ),
  },
  {
    dataIndex: 'id',
    key: 'id',
    render: (text: any, record: any) =>
      <ModelUpdate data={record} />,
  }
];