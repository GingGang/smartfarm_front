import React, { useEffect, useState } from "react";
import '../dashboard.css';

import WavesIcon from '@mui/icons-material/Waves';
import styled from "styled-components";

const FontDiv = styled.div`
font-family: 'SCDream', sans-serif;
`;


export default function LandWater({ground1,ground2,IdxData}){
    const [groudAverage, setGorudAverage] = useState(0);

    useEffect(() => {
      let totalGround = 0;
  
      for(let i=0; i < IdxData.length; i++){
          totalGround += IdxData[i].IdxGround1Data;
          totalGround += IdxData[i].IdxGround2Data;
      }
      
      const average = totalGround / (IdxData.length*2);

      setGorudAverage(average);
    }, [IdxData]);

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
                        평균 습도 : {groudAverage.toFixed(1)}%
                    </div>
                </div> 
            </FontDiv>
        </div>
    )
}