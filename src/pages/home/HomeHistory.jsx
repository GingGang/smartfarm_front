import React from "react";
import './home.css';
import ChartInfo from "../../component/chartinfo/ChartInfo";
import HistroyTemp from "../../component/homehistory/HistoryTemp";
import HistroyWater from "../../component/homehistory/HistoryWater";
import HistroyBool from "../../component/homehistory/HistoryBool";



export default function HomeHistory(){
    return(

        <div className="home">
            <div>
                <HistroyTemp/>
                <HistroyWater/>
                <HistroyBool/>
            </div>

        </div>
    )
}