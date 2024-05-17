import React, { useState } from "react";
import './pumpbool.css';
import SensorsIcon from '@mui/icons-material/Sensors';
import SensorsOffIcon from '@mui/icons-material/SensorsOff';

export default function PumpBool() {
    const [pumpOn, setPumpOn] = useState(false);

    return (
        <div className="PumpBox">
            <div className="PumpIn">
                <div className="PumpContainer">
                    <span className="PumpFont">
                        펌프 : {
                            pumpOn 
                            ? <SensorsIcon style={{ fontSize: '60px'}} />
                            : <SensorsOffIcon style={{ fontSize: '60px'}} />
                        }
                    </span>
                </div>
            </div>
        </div>
    );
}
