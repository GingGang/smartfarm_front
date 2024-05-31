import React from "react";
import '../dashboard.css';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import styled from "styled-components";


const FontDiv = styled.div`
font-family: 'SCDream', sans-serif;
`;

// props 객체에서 tempData를 구조 분해 할당
export default function Graph({ temp }){

     
    return(
        <div className="Box">
            <FontDiv>
                <div className="Box_In">
                    <div className="Box_Container">
                        <div className="Box_Container_Text">
                            <span className="Box_Font_Top">온도</span>
                            <span className="Box_Font_Bottom">{temp}°C</span>
                        </div>
                        <ThermostatIcon style={{ fontSize: '3vw' , marginLeft: '4vw'}} />
                    </div>
                    <div className="Box_Font_LowBottom">
                            직전 온도 : 23°C
                    </div>
                </div>
            </FontDiv>
        </div>
    )
}
