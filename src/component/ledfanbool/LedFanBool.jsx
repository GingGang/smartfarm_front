import React, { useState } from "react";
import './ledfanbool.css';
import WbIncandescentOutlinedIcon from '@mui/icons-material/WbIncandescentOutlined';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import ModeFanOffIcon from '@mui/icons-material/ModeFanOff';
import AirIcon from '@mui/icons-material/Air';

export default function LedFanBool() {
    // LED와 FAN의 상태를 관리하는 useState
    const [ledOn, setLedOn] = useState(false);
    const [fanOn, setFanOn] = useState(false);

    return (
        <div className="LedFanBox">
            <div className="LedFanIn">
                <div className="LedFanContainer">
                    <span className="LedFanFont">
                        LED : {
                            ledOn 
                            ? <WbIncandescentOutlinedIcon style={{ fontSize: '50px'}} />
                            : <WbIncandescentIcon style={{ fontSize: '50px'}} />
                        }
                        <br />
                        FAN : {
                            fanOn 
                            ? <AirIcon style={{ fontSize: '50px'}} />
                            : <ModeFanOffIcon style={{ fontSize: '50px'}} />
                        }
                    </span>
                </div>
            </div>
        </div>
    );
}
