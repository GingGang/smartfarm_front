import React from "react";
import '../dashboard.css';

import WavesIcon from '@mui/icons-material/Waves';
import styled from "styled-components";

const FontDiv = styled.div`
font-family: 'SCDream', sans-serif;
`;


export default function LandWater({ground1,ground2}){


    return(
        <div className="Box">
            <FontDiv>
                <div className="Box_In">
                    <div className="Box_Container">
                        <div className="Box_Contaier_Text">
                            <span className="Box_Font_Top">토양습도</span><br/>
                            <span className="Box_Font_Bottom">{(ground1+ground2)/2}%</span>
                        </div>
                        <WavesIcon style = {{ fontSize: '3vw', marginLeft: '3.5vw' }}/>
                    </div>
                    <div className="Box_Font_LowBottom">
                        평균 습도 : 44%
                    </div>
                </div> 
            </FontDiv>
        </div>
    )
}