import React from "react";
import './water.css';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

export default function Water({humi}){
    return(
        <div className="WaterBox">
            <div className="WaterBoxIn">
                <div className="WaterBoxContainer">
                    <WaterDropIcon style={{ fontSize: '50px' }}/>
                    <span className="WaterBoxFont">습도 : {humi} %</span>
                </div>
            </div>
        </div>
    )
}