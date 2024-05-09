import React from "react";
import './water.css';

export default function Water(){
    return(
        <div className="WaterBox">
            <div className="WaterBoxIn">
                <div className="WaterBoxContainer">
                    <span className="WaterBoxFont">습도 : 40 %</span>
                </div>
            </div>
        </div>
    )
}