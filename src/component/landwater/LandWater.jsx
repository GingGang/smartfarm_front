import React from "react";
import './landwater.css';

export default function LandWater({ground1,ground2}){
    return(
        <div className="LandWaterBox">
            <div className="LandWaterBoxIn">
                <div className="LandWaterBoxContainer">
                    <span className="LandWaterBoxFont">토양습도[1] : {ground1} %<br/>토양습도[2] : {ground2}%</span>
                </div>
            </div>
        </div>
    )
}