import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const MyChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            data: [5250, 15000, 3000, 25250, 5250, 45000, 3500, 15250, 35250, 5000, 40000, 34000, ],
            backgroundColor: ['#fff'],
            hoverBackgroundColor: ["#eee"],
            barThickness: 30,
            borderColor: ['linear-gradient(180deg, #34CAA5 0%, rgba(52, 202, 165, 0.00) 100%)'],
            borderWidth: 1,
            borderRadius: 50,
          },
        ],
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <canvas
      ref={chartRef}
      className='w-full'
      width="800px"
      height={280}
    ></canvas>
  );
};

export default MyChart;
