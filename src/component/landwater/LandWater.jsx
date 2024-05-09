import React from "react";
import './landwater.css';

export default function LandWater(){
    return(
        <div className="LandWaterBox">
            <div className="LandWaterBoxIn">
                <div className="LandWaterBoxContainer">
                    <span className="LandWaterBoxFont">토양습도[1] : 55 %<br/>토양습도[2] : 56%</span>
                </div>
            </div>
        </div>
    )
}