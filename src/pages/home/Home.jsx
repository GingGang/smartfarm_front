import React from "react";
import './home.css';
<<<<<<< HEAD
import Graph from "../../component/graph/Graph";
import FeaturedInfoBottom from "../../component/temp/Temp";
import ChartInfo from "../../component/chartinfo/ChartInfo";
import Water from "../../component/water/Water";
import LandWater from "../../component/landwater/LandWater";
=======
import FeaturedInfo from "../../component/featuredinfo/FeaturedInfo";
import FeaturedInfoBottom from "../../component/featuredinfoBottom/FeaturedInfoBottom";
import ChartInfo from "../../component/chartinfo/ChartInfo";
>>>>>>> e6545f23545bb395cd7fe05e4be18f5ab81c621b


export default function Home(){
    return( 
        <div className="home">

            <div>
                <ChartInfo/>
            </div>
            <div className="homeMargin">
<<<<<<< HEAD
                <Graph/>
                <Water/>
                <LandWater/>
            </div>
            <div className="homeMargin">
                <Graph/>
                <Graph/>
                <Graph/>
=======
                <FeaturedInfoBottom/>
                <FeaturedInfoBottom/>
                <FeaturedInfoBottom/>
            </div>
            <div className="homeMargin">
                <FeaturedInfoBottom/>
                <FeaturedInfoBottom/>
                <FeaturedInfoBottom/>
>>>>>>> e6545f23545bb395cd7fe05e4be18f5ab81c621b
            </div>
        </div>
    )
}