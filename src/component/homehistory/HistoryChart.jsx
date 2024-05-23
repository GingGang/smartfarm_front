import React, { useState } from "react";
import './homehistory.css';
import { Route, Routes, useNavigate } from "react-router-dom";


import ChartMonth from "../chart/chartmonth/ChartMonth";
import ChartHour from "../chart/charthour/ChartHour";
import ChartIndex from "../chart/chartindex/ChartIndex";
import ChartWeekInfo from "../chart/chartweek/ChartWeekInfo";

export default function HistoryChart({ MonthData, HourData, WeekData }) {
  let navigate = useNavigate();
  const [selected, setSelected] = useState(""); // 선택된 항목을 추적하는 상태

  // 항목이 클릭될 때 호출될 함수
  const handleSelect = (path) => {
    setSelected(path); // 선택된 항목을 상태로 저장
    navigate(path); // 해당 경로로 이동
  };

  // 특정 항목이 선택되었는지 확인하고, 해당되면 'selected' 클래스를 적용하는 함수
  const getClassName = (path) => {
    return selected === path ? "HomeHistoryFont selected" : "HomeHistoryFont";
  };

  return (
    <div className="HomeHistoryBox">
        <div className="HomeHistoryIn">
            <div className="HomeHistoryContainer">
                <Routes>
                    <Route path="month" element={<ChartMonth MonthData={MonthData} />} />
                    <Route path="hour" element={<ChartHour HourData={HourData} />} />
                    <Route path="week" element={<ChartWeekInfo WeekData={WeekData} />} />
                </Routes>
                <div className="HomeHistoryList">
                    <div className="HomeHistoryListItem">
                        <h3 onClick={() => handleSelect('hour')} className={getClassName('hour')}>Day</h3>
                    </div>

                    <div className="HomeHistoryListItem">
                        <h3 onClick={() => handleSelect('week')} className={getClassName('week')}>Week</h3>
                    </div>

                    <div className="HomeHistoryListItem">
                        <h3 onClick={() => handleSelect('month')} className={getClassName('month')}>Month</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
