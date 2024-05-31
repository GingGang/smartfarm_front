import React from "react";
import './home.css';
import Graph from "../../component/dashboard/graph/Graph";
import Water from "../../component/dashboard/water/Water";
import LandWater from "../../component/dashboard/landwater/LandWater";
import LedFanBool from "../../component/dashboard/sensor/SensorBool";
import ChartIndex from "../../component/chart/chartindex/ChartIndex";


export default function Home({ LatestData, IdxData })
{
    return( 
        <div className="home">
            <div className="homeMargin">
                <Graph temp={LatestData.LatestTempData} IdxData={IdxData} />
                <Water humi={LatestData.LatestHumiData} IdxData={IdxData}/>
                <LandWater ground1={LatestData.LatestGround1Data} ground2={LatestData.LatestGround2Data} IdxData={IdxData}/>
                <LedFanBool ledbool={LatestData.LatestLedData} fanbool={LatestData.LatestFanData} pumpbool={LatestData.LatestPumpData} IdxData={IdxData}/>
            </div>
            <div className="homeChartMargin">
                <ChartIndex 
                    IdxData={IdxData}
                />
            </div>
            
            <div className="homeMargin">
                
            </div>
        </div>
    )
}
