import React, { useEffect, useState } from "react";
import '../dashboard.css';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import styled from "styled-components";

const FontDiv = styled.div`
  font-family: 'SCDream', sans-serif;
`;

export default function Graph({ temp, IdxData }) {
  const [tempAverage, setTempAverage] = useState(0);

  useEffect(() => {
    let totalTemp = 0;

    for(let i=0; i < IdxData.length; i++){
        totalTemp += IdxData[i].IdxTempData;
    }
    
    const average = totalTemp / IdxData.length;
    setTempAverage(average);
  }, [IdxData]);


  return (
    <div className="Box">
      <FontDiv>
        <div className="Box_In">
          <div className="Box_Container">
            <div className="Box_Container_Text">
              <span className="Box_Font_Top">온도</span>
              <span className="Box_Font_Bottom">{temp}°C</span>
            </div>
            <ThermostatIcon style={{ fontSize: '3vw', marginLeft: '4vw' }} />
          </div>
          <div className="Box_Font_LowBottom">
            평균 온도 : {tempAverage.toFixed(1)}°C
          </div>
        </div>
      </FontDiv>
    </div>
  );
}
