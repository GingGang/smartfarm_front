import React from 'react';
import './chartinfo.css';
import MixedChart from './ChartMain';

function ChartInfo({ temp, humi, ground1, ground2 }) {
    console. log(ground2)
    return(

      <div className="ChartBottom">
          <div className="ChartBottomItem">
              <div className="ChartBottomContainer">
                  <div className="ChartBottomFont">

                    <MixedChart
                      temp={temp}
                      humi={humi}
                      ground1={ground1}
                      ground2={ground2}
                    />
                  </div>
              </div>
          </div>
      </div>
    )
}

export default ChartInfo;