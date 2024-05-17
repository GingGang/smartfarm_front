import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend, PointElement, BarController, LineController } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  BarController,
  LineController
);

export const options = {
  responsive: true,
  layout: {
    padding: {
      top: 1,
      right: 0,
      bottom: 0,
      left: 40
    },
  },
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: '최근 나흘간 온도,습도,토양습도',
    },
  },
  maintainAspectRatio: false,
};

const labels = ['월', '화', '수', '목'];

export function MixedChart({ temp, humi, ground1, ground2 }) {
  const chartRef = React.useRef(null);
  
  const data = {
  labels,
  datasets: [
    {
      type: 'line',
      label: '온도',
      backgroundColor: 'rgb(25, 150, 200)',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 2,
      fill: false,
      data: [temp,temp,temp,temp], // temp 변수를 배열로 변환
    },
    {
      type: 'line',
      label: '습도',
      backgroundColor: 'rgb(25, 150, 200)',
      borderColor: 'rgb(70, 110, 244)',
      borderWidth: 2,
      fill: false,
      data: [humi,humi,humi,humi], // humi 변수를 배열로 변환
    },
    {
      type: 'line',
      label: '토양습도1,2',
      backgroundColor: 'rgb(31, 77, 170)',
      borderColor: 'rgb(31, 77, 170)',
      borderWidth: 2,
      fill: false,
      data: [(ground1+ground2)/2,(ground1+ground2)/2,(ground1+ground2)/2,(ground1+ground2)/2,], // ground1 변수를 배열로 변환
    },
  ],
};

  React.useEffect(() => {
    const chartInstance = new ChartJS(chartRef.current, {
      type: 'bar', // 차트의 기본 유형을 설정합니다. 필요에 따라 변경 가능합니다.
      options: options,
      data: data,
    });

    return () => {
      chartInstance.destroy();
    };
  }, [temp, humi, ground1, ground2]); // 의존성 배열에 prop 값을 포함하여 prop이 변경될 때마다 차트를 업데이트합니다.

  return <div style={{height: "13vw", width: "75vw"}}>
    <canvas ref={chartRef}></canvas>
  </div>;
}

export default MixedChart;
