import React, { useState } from "react";
import Chart from "react-apexcharts";

const MyApexChart = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
        type: "bar",
        height: 230,
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      colors: ["#eafaf6"], // Change the color to #eaf9a5
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 15,
          columnWidth: '30px',
          borderRadiusApplication: 'end',
          borderRadiusWhenStacked: 'last',
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        fontWeight: 600,
        fontSize: '12px',
        markers: {
          radius: 99,
          strokeColor: '#737373',
        },
      },
    },
    series: [
      {
        name: "series-1",
        data: [14000, 24000, 8000, 33000, 16000, 45000, 16000, 27000, 37000, 10000, 35000, 31000],
      },
    ],
  });

  return (
    <div className="app w-full flex flex-col items-center justify-center">
      <div className="row w-full flex flex-col items-center justify-center">
        <div className="mixed-chart w-full">
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="100%"
            height="300"
          />
        </div>
      </div>
    </div>
  );
};

export default MyApexChart;
