import React from "react";
import './home.css';
import FeaturedInfo from "../../component/graph/Graph";
import FeaturedInfoBottom from "../../component/temp/Temp";
import ChartInfo from "../../component/chartinfo/ChartInfo";


export default function HomeHistory(){
    return(

        <div className="home">
            <div>
                <ChartInfo/>
            </div>

        </div>
    )
}