import { dataPie } from "./data";

export const configArea = {
  xField: 'Date',
  yField: 'scales',
  color: '#FF8A48',
  colorField: 'type',
  xAxis: {
    range: [0, 1],
    tickCount: 5,
  },
  areaStyle: () => {
    return {
      fill: 'l(270) 0:#ffffff 0.5:#FAA05F 1:#FFFFFF',
    };
  },
};



export const configPie = {
  data: dataPie,
  appendPadding: 10,
  angleField: 'value',
  color: ['#FF8A48', '#4F75FF'],
  colorField: 'type',
  radius: 1,
  innerRadius: 0.6,
  label: {
    type: 'inner',
    offset: '-50%',
    content: '{value}',
    style: {
      textAlign: 'center',
      fontSize: 22,
      color: '#111111',
    },
  },

  interactions: [
    {
      type: 'element-selected',
    },
    {
      type: 'element-active',
    },
  ],
  statistic: {
    title: false,
    content: {
      style: {
        whiteSpace: 'pre-wrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
      content: '',
    }
  },
};