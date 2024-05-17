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
import { wait } from '@testing-library/user-event/dist/utils';

function App() {
  const [sensorData, setSensorData] = useState({
    tempData: [],
    humiData: [],
    ground1Data: [],
    ground2Data: []
  });

  useEffect(() => {
    async function fetchSensorData() {
      try {
        const response = await fetch('http://192.168.219.112:8008/api/latest');
        const response_week = await fetch('http://192.168.219.102:8008/api/week');

        const jsonResponse = await response.json();
        const jsonResponse_week = await response_week.json();

        const { temperature, humidity, ground1, ground2 } = jsonResponse;
       // const { temperature, humidity, ground1, ground2 } = jsonResponse_week;

        setSensorData({
          tempData: temperature,
          humiData: humidity,
          ground1Data: ground1,
          ground2Data: ground2
        });

      } catch (error) {
        console.error('Error fetching sensor data:', error);
      }
    }

    fetchSensorData();
  }, []);

  const { tempData, humiData, ground1Data, ground2Data } = sensorData;

  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home data={sensorData}/>} />
          <Route path="/camera" element={<HomeCamera />} />
          <Route path="/history" element={<HomeHistory />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
