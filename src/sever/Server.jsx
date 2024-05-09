import React, { useState, useEffect } from 'react';

function SmartFarmComponent() {
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    async function fetchSensorData() {
      try {
        const response = await fetch('http://192.168.219.107:8008/api/latest');
        const data = await response.json();
        // 데이터를 상태로 설정
        setSensorData(Object.entries(data));
      } catch (error) {
        console.error('Error fetching sensor data:', error);
      }
    }

    fetchSensorData();
  }, []);

  return (
    <div id="sensorData">
      {sensorData.map(([sensorId, sensorDetails], index) => (
        <div key={index}>
          <h3>Sensor ID: {sensorId}</h3>
          <p>Temperature: {sensorDetails.temperature}°C</p>
          <p>Humidity: {sensorDetails.humidity}%</p>
          <p>Ground1: {sensorDetails.ground1}</p>
          <p>Ground2: {sensorDetails.ground2}</p>
        </div>
      ))}
    </div>
  );
}

export default SmartFarmComponent;
