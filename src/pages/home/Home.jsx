import React from "react";
import './home.css';
import Graph from "../../component/graph/Graph";
import FeaturedInfoBottom from "../../component/temp/Temp";
import ChartInfo from "../../component/chartinfo/ChartInfo";
import Water from "../../component/water/Water";
import LandWater from "../../component/landwater/LandWater";
import { SensorDoor } from "@mui/icons-material";

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
                {/* 이 부분을 수정했습니다. */}
                <Graph tempData={data.tempData}/> 
                <Graph tempData={data.tempData}/> 
                <Graph tempData={data.tempData}/> 
            </div>
        </div>
    )
}
