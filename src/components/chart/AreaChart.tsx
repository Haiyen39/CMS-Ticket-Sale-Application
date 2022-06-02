import ReactApexChart from "react-apexcharts";

type AreaChartProps = {
  data: Array<number>

}

const AreaChart = ({data}:AreaChartProps) => {
  const xList = ["Thứ 2","Thứ 3" ,"Thứ 4","Thứ 5", "Thứ 6", "Thứ 7", "CN"];
  const yList = [...data];

  const chartSeries = [
    {
      name: "Doanh thu",
      data: yList
    }
  ];

  const chartOptions:any = {
    chart: { toolbar: "false" },
    dataLabels: { enabled: !1},
    stroke: { curve: "smooth", width: 2 },
    markers: { size: 0, style: "hollow" },
    xaxis: {
      categories: xList,
      
    },
    yaxis: {
      tickAmount: 3,
      min: 10,
      max: 100,
      labels: {
        formatter: (value:any) => { return value + "tr"},
      }
      
    },
    colors: ["#FF993C"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.05,
        stops: [50, 100, 100, 100]
      }
    }
  };

  return (
    <ReactApexChart
      options={chartOptions}
      series={chartSeries}
      type="area"
      height={300}
    />
  );
};

export default AreaChart