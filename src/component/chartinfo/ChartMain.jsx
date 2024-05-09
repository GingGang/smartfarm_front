import React from 'react';
<<<<<<< HEAD
=======
// 'Chart' 대신 'ChartJS'를 사용하고, 'registerables' 임포트는 제거합니다.
>>>>>>> e6545f23545bb395cd7fe05e4be18f5ab81c621b
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend, PointElement, BarController, LineController } from 'chart.js';
import { Margin } from '@mui/icons-material';

// 'Chart' 컴포넌트 임포트를 제거하고, 'ChartJS.register'를 사용하여 컴포넌트 등록합니다.
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
<<<<<<< HEAD
      text: '최근 일주일간 온도,습도,토양습도',
=======
      text: '복합 차트 예제',
>>>>>>> e6545f23545bb395cd7fe05e4be18f5ab81c621b
    },
  },
  maintainAspectRatio: false,
};

<<<<<<< HEAD
const labels = ['월', '화', '수', '목', '금', '토', '일'];
=======
const labels = ['1월', '2월', '3월', '4월', '5월', '6월', '7월'];
>>>>>>> e6545f23545bb395cd7fe05e4be18f5ab81c621b

export const data = {
  labels,
  datasets: [
    {
      type: 'line',
<<<<<<< HEAD
      label: '온도',
=======
      label: '데이터셋 1',
>>>>>>> e6545f23545bb395cd7fe05e4be18f5ab81c621b
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 2,
      fill: false,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
    {
<<<<<<< HEAD
      type: 'line',
      label: '습도',
      backgroundColor: 'rgb(25, 150, 200)',
      data: [45, 49, 60, 70, 46, 33, 44],
      borderColor: 'rgb(70, 110, 244)',
      fill:false,
      borderWidth: 2,
    },
    {
      type: 'line',
      label: '토양습도',
      backgroundColor: 'rgb(31, 77, 170)',
      borderColor: 'rgb(31, 77, 170)',
      fill:false,
      data: [28, 48, 40, 19, 66, 27, 80],
      borderWidth: 2,
=======
      type: 'bar',
      label: '데이터셋 2',
      backgroundColor: 'rgb(255, 99, 132)',
      data: [45, 49, 60, 70, 46, 33, 44],
      borderColor: 'white',
      borderWidth: 2,
    },
    {
      type: 'bar',
      label: '데이터셋 3',
      backgroundColor: 'rgb(75, 192, 192)',
      data: [28, 48, 40, 19, 66, 27, 80],
>>>>>>> e6545f23545bb395cd7fe05e4be18f5ab81c621b
    },
  ],
};

export function MixedChart() {
  const chartRef = React.useRef(null);
  
  React.useEffect(() => {
    const chartInstance = new ChartJS(chartRef.current, {
      options: options,
      data: data,
    });

    return () => {
      chartInstance.destroy();
    };
  }, []);

  return <div style={{height: "13vw", width: "75vw"}}>
    <canvas ref={chartRef}></canvas>
  </div>;
}

export default MixedChart;
