import React from "react";
import './water.css';

export default function Water({humi}){
    return(
        <div className="WaterBox">
            <div className="WaterBoxIn">
                <div className="WaterBoxContainer">
                    <span className="WaterBoxFont">습도 : {humi} %</span>
                </div>
            </div>
        </div>
    )
}