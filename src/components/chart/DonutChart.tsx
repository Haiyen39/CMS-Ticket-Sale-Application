import ApexChart from "react-apexcharts";

type DonutChartProps = {
  data: number[],
}

const DonutChart = ({data}:DonutChartProps) => {

  
  const series = [...data];

  const options: any = {
    chart: {
      type: 'donut'
    },
    plotOptions: {
      pie: {
        customScale: 0.4,
        donut: {
          size: 225,
          
        }
      }
    },
    labels: ["Vé chưa sử dụng", "Vé đã sử dụng"],
    colors: ["#FF8A48", "#4F75FF"],
    dataLabels: {
      enabled: true,
      offsetX: 50,
      offsetY: 50,
      right: 10,
      background: {
        enabled: true,
        borderWidth: 10,
        borderRadius: "4px",
        foreColor: '#000',
        borderColor: '#fff',
        opacity: 1,
        padding: 10,
      },
      style: {
        border: "1px solid black",
        fontFamily: "Montserrat, sans-serif",
        fontWeight: 400,
        fontSize: '40px',
      },
      formatter: function (val:any,{ seriesIndex, dataPointIndex, w }:any) {
        let total = 0
        console.log(w.series)
        w.config.series.forEach((e:any)=>{
          total = total+e
        })
        const value = (val/100) * total
        if(value-Math.floor(value) < 0.5){
          return Math.floor(value)
        }else {
          return Math.ceil(value)
        }
      }
    },
    legend: {
      show: false
    },
  };

  return (
    <ApexChart
      options={options}
      series={series}
      type="donut"
      width="100%"
      height={300}
    />
  );
};

export default DonutChart;