import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { ActiveContext } from './ActiveContext';

// Components import
import Topbar from './component/topbar/Topbar';
import Sidebar from './component/sidebar/Sidebar';
import Home from './pages/home/Home';
import HomeCamera from './component/homecamera/HomeCamera';
import HomeHistory from './pages/home/HomeHistory';
import MixedChart from './component/chartinfo/ChartMain';

// Stylesheet import
import './app.css';

function App() {
  const [LatestSensorData, setLatestSensorData] = useState({
    LatestTempData: [],
    LatestHumiData: [],
    LatestGround1Data: [],
    LatestGround2Data: []
  });

  const [WeekSensorData, setWeekSensorData] = useState({
    weekTempData: [],
    weekthumiData: [],
    weektground1Data: [],
    weektground2Data: []
  });

  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가

  useEffect(() => {
    async function fetchSensorData() {
      setIsLoading(true); // 데이터를 가져오기 시작할 때 로딩 상태를 true로 설정
      try {
        const response_Latest = await fetch('http://122.45.4.113:80/api/latest');
        const response_week = await fetch('http://122.45.4.113:80/api/week', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            year: 2024,
            month: 5,
            week: 2
          })
        });
  
        const jsonResponse_Latest = await response_Latest.json();
        const jsonResponse_week = await response_week.json();
  
        const { Latest_temperature, Latest_humidity, Latest_ground1, Latest_ground2 } = jsonResponse_Latest;
        
        let weekSensorDataArray = []; // 2차원 배열을 초기화합니다.
  
        for (let i = 0; i < jsonResponse_week.length; i++) {
          const tempData = jsonResponse_week[i].Week_temperature || 0;
          const humiData = jsonResponse_week[i].Week_humidity || 0;
          const ground1Data = jsonResponse_week[i].Week_ground1 || 0;
          const ground2Data = jsonResponse_week[i].Week_ground2 || 0;
  
          weekSensorDataArray.push({
            weekTempData: tempData,
            weekHumiData: humiData,
            weekGround1Data: ground1Data,
            weekGround2Data: ground2Data
          });
        }
  
        setLatestSensorData({
          LatestTempData: Latest_temperature,
          LatestHumiData: Latest_humidity,
          LatestGround1Data: Latest_ground1,
          LatestGround2Data: Latest_ground2
        });
  
        setWeekSensorData(weekSensorDataArray);
  
      } catch (error) {
        console.error('Error fetching sensor data:', error);
      } finally {
        setIsLoading(false); // 데이터를 모두 가져온 후에 로딩 상태를 false로 설정
      }
    }
    const intervalId = setInterval(fetchSensorData, 1000); // 5초마다 센서 데이터 갱신

    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 인터벌 정리
  }, []);
  console. log('sos');

  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others">
          <Routes>
            <Route exact path="/" element={<Home LatestData={LatestSensorData} WeekData={WeekSensorData} />} />
            <Route path="/camera" element={<HomeCamera />} />
            <Route path="/history" element={<HomeHistory />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
