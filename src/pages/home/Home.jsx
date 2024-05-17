import React from "react";
import './home.css';
import Graph from "../../component/graph/Graph";
import FeaturedInfoBottom from "../../component/temp/Temp";
import ChartInfo from "../../component/chartinfo/ChartInfo";
import Water from "../../component/water/Water";
import LandWater from "../../component/landwater/LandWater";
import { SensorDoor } from "@mui/icons-material";
import LedFanBool from "../../component/ledfanbool/LedFanBool";
import PumpBool from "../../component/pumpbool/PumpBool";

export default function Home({ data }){
    return( 
        <div className="home">
            <div>
                <ChartInfo 
                    temp={data.tempData}
                    humi={data.humiData}
                    ground1={data.ground1Data}
                    ground2={data.ground2Data}
                />
            </div>
            <div className="homeMargin">
                <Graph temp={data.tempData} />
                <Water humi={data.humiData}/>
                <LandWater ground1={data.ground1Data} ground2={data.ground2Data}/>
            </div>
            <div className="homeMargin">
                <LedFanBool/>
                <PumpBool/>
                <Graph tempData={data.tempData}/> 
            </div>
        </div>
    )
}
