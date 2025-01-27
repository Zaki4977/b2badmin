import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const Barchart = () => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: 'bar',
      height: 350,
      background: '#ffffff', // Set the background color here

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadius: 5,
        borderRadiusApplication: 'end',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
      title: {
        text: '$ (thousands)',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return `$ ${val} thousands`;
        },
      },
    },
  });

  const [chartSeries, setChartSeries] = useState([
    {
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: 'Free Cash Flow',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ]);

  return (
    <div>
      
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height={550}
      />
    </div>
  );
};

export default Barchart;
