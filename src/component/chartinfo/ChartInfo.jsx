import React from 'react';
import './chartinfo.css';
import MixedChart from './ChartMain';

function ChartInfo({ WeekData }) {
    return(

      <div className="ChartBottom">
          <div className="ChartBottomItem">
              <div className="ChartBottomContainer">
                  <div className="ChartBottomFont">
                    <MixedChart WeekData={WeekData}>

                    </MixedChart>
                  </div>
              </div>
          </div>
      </div>
    )
}

export default ChartInfo;