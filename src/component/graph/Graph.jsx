import React from "react";
import './graph.css';
import ThermostatIcon from '@mui/icons-material/Thermostat';

// props 객체에서 tempData를 구조 분해 할당
export default function Graph({ temp }){
    return(
        <div className="GraphBox">
            <div className="GraphBoxIn">
                <div className="GraphBoxContainer">
                    <ThermostatIcon style={{ fontSize: '35px' , marginLeft:'1vw'}} />
                    <span className="GraphBoxFont">온도 : {temp} °C</span>
                </div>
            </div>
        </div>
    )
}
