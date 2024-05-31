import React, { useEffect, useState } from "react";
import '../dashboard.css'
import styled from "styled-components";

//LED 이미지
import LedOn from './Led_on.gif'
import LedOff from './Led_off.gif'

//Fan 이미지
import FanOn from './Fan_on.gif'
import FanOff from './Fan_off.gif'

//Pump 이미지
import PumpOn from './Pump_on.gif'
import PumpOff from './Pump_off.gif'

const FontDiv = styled.div`
    font-family: 'SCDream', sans-serif;
`   ;

export default function SensorBool({ledbool,fanbool,pumpbool}) {
    // LED와 FAN의 상태를 관리하는 useState
    const [ledOn, setLedOn] = useState();
    const [fanOn, setFanOn] = useState();
    const [pumpOn, setPumpOn] = useState();

    useEffect(()=>{
        setLedOn(ledOn);
        setFanOn(fanOn);
        setPumpOn(pumpOn);
    })



    return (
        <div className="Box">
            <FontDiv>
            <div className="Box_In">
                <div className="Sensor_Box_Container">
                    <span className="Sensor_Font">
                        LED 
                        FAN 
                        펌프<br/>
                        {
                            ledOn
                            ? <img src={LedOn} alt='Led_on' style={{marginLeft: '0.3vw'}} />
                            : <img src={LedOff} alt='Led_off' style={{marginLeft: '0.3vw'}} />
                        }
                        {
                            fanOn 
                            ? <img src={FanOn} alt='Led_on' style={{marginLeft: '1vw'}} />
                            : <img src={FanOff} alt='Led_off' style={{marginLeft: '1vw'}} />
                        }
                        {
                            pumpOn 
                            ? <img src={PumpOn} alt='Pump_on' style={{marginLeft: '1.7vw'}} />
                            : <img src={PumpOff} alt='Pump_off' style={{marginLeft: '1.7vw'}} />
                        }
                    </span>
                </div>
            </div>
            </FontDiv>
        </div>
    );
}
