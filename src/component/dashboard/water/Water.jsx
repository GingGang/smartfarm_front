import React, { useEffect, useState } from "react";
import '../dashboard.css';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import styled from "styled-components";

const FontDiv = styled.div`
    font-family: 'SCDream', sans-serif;
`;

export default function Water({humi, IdxData}){

    const [humiAverage, setHumiAverage] = useState(0);
      
    useEffect(() => {
        let totalHumi = 0;
    
        for(let i=0; i < IdxData.length; i++){
            totalHumi += IdxData[i].IdxHumiData;
        }
        
        const average = totalHumi / IdxData.length;
        setHumiAverage(average);
    }, [IdxData]);
        
    return(
        <div className="Box">        
            <FontDiv>
                <div className="Box_In">
                    <div className="Box_Container">
                        <div className="Box_Container_Text">
                            <span className="Box_Font_Top">습도</span>
                            <span className="Box_Font_Bottom">{humi}%</span>
                        </div>
                        <WaterDropIcon style={{ fontSize: '3vw' , marginLeft: '3.5vw'}}/>
                    </div>    
                    <div className="Box_Font_LowBottom">
                        평균 습도 : {humiAverage.toFixed(1)}%
                    </div>
                </div>
            </FontDiv>
        </div>
    )
}