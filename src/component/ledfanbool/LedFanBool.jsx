import React, { useState } from "react";
import './ledfanbool.css';

import WbIncandescentOutlinedIcon from '@mui/icons-material/WbIncandescentOutlined';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';

import ModeFanOffIcon from '@mui/icons-material/ModeFanOff';
import AirIcon from '@mui/icons-material/Air';

import SensorsIcon from '@mui/icons-material/Sensors';
import SensorsOffIcon from '@mui/icons-material/SensorsOff';

export default function LedFanBool() {
    // LED와 FAN의 상태를 관리하는 useState
    const [ledOn, setLedOn] = useState(false);
    const [fanOn, setFanOn] = useState(false);
    const [pumpOn, setPumpOn] = useState(false);

    return (
        <div className="LedFanBox">
            <div className="LedFanIn">
                <div className="LedFanContainer">
                    <span className="LedFanFont">
                        LED : {
                            ledOn 
                            ? <WbIncandescentOutlinedIcon style={{ fontSize: '35px'}} />
                            : <WbIncandescentIcon style={{ fontSize: '35px'}} />
                        }
                        <br />
                        FAN : {
                            fanOn 
                            ? <AirIcon style={{ fontSize: '35px', marginRight: '10px'}} />
                            : <ModeFanOffIcon style={{ fontSize: '35px', marginRight: '10px'}} />
                            
                        }
                        펌프 : {
                            pumpOn 
                            ? <SensorsIcon style={{ fontSize: '35px'}} />
                            : <SensorsOffIcon style={{ fontSize: '35px'}} />
                        }
                    </span>
                </div>
            </div>
        </div>
    );
}
