import React from "react";
import './home.css';
import Graph from "../../component/graph/Graph";
import FeaturedInfoBottom from "../../component/temp/Temp";
import ChartInfo from "../../component/chart/ChartInfo";
import Water from "../../component/water/Water";
import LandWater from "../../component/landwater/LandWater";
import { Leaderboard, SensorDoor } from "@mui/icons-material";
import LedFanBool from "../../component/ledfanbool/LedFanBool";
import PumpBool from "../../component/pumpbool/PumpBool";


export default function Home({ LatestData, WeekData })
{
    return( 
        <div className="home">
            <div className="homeMargin">
                <Graph temp={LatestData.LatestTempData} />
                <Water humi={LatestData.LatestHumiData}/>
                <LandWater ground1={LatestData.LatestGround1Data} ground2={LatestData.LatestGround2Data}/>
                <LedFanBool ledbool={LatestData.LatestLedData} fanbool={LatestData.LatestFanData} pumpbool={LatestData.LatestPumpData}/>
            </div>
            <div>
                <ChartInfo 
                    WeekData={WeekData}
                />
            </div>
            
            <div className="homeMargin">
                
            </div>
        </div>
    )
}
