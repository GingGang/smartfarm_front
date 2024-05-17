import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";

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
    LatesthumiData: [],
    Latestground1Data: [],
    Latestground2Data: []
  });

  const [WeekSensorData, setWeekSensorData] = useState({
    weekTempData: [],
    weekthumiData: [],
    weektground1Data: [],
    weektground2Data: []
  });

  useEffect(() => {
    async function fetchSensorData() {
      try {
        const response_Latest = await fetch('http://61.84.41.231:8008/api/latest');
        const response_week = await fetch('http://61.84.41.231:8008/api/week?year=2024&month=05&week=2');

        const jsonResponse_Latest = await response_Latest.json();
        const jsonResponse_week = await response_week.json();

        const { Latest_temperature, Latest_humidity, Latest_ground1, Latest_ground2 } = jsonResponse_Latest;
        const { Week_temperature, Week_humidity, Week_ground1, Week_ground2 } = jsonResponse_week;

        setLatestSensorData({
          LatestTempData: Latest_temperature,
          LatestHumiData: Latest_humidity,
          LatestGround1Data: Latest_ground1,
          LatestGround2Data: Latest_ground2
        });

        setWeekSensorData({
          weekTempData : Week_temperature,
          weekthumiData : Week_humidity,
          weektground1Data : Week_ground1,
          weektground2Data : Week_ground2
        });

      } catch (error) {
        console.error('Error fetching sensor data:', error);
      }
    }

    fetchSensorData();
  }, []);

  console. log(WeekSensorData);

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
