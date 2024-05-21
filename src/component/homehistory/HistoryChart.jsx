import React from "react";      
import './homehistory.css';
import ChartMonth from "../chart/chartmonth/ChartMonth";
import ChartHour from "../chart/charthour/ChartHour";

// props 객체에서 tempData를 구조 분해 할당
export default function HistoryChart({MonthData, HourData}){

    return(
        <div className="HomeHistoryBox">
            <div className="HomeHistoryIn">
                <div className="HomeHistoryContainer">
                    <span className="HomeHistoryFont"><ChartMonth MonthData={MonthData}/></span>
                    <span className="HomeHistoryFont"><ChartHour HourData={HourData}/></span>
                    
                </div>
            </div>
        </div>
    )
}
