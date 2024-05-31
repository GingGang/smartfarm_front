import React, { useEffect } from "react";
import './Topbar.css';
import LoginImage from './GoogleLogin.png'

export default function Topbar(){

    const fetchLogin = async () => {
        try {
          const response_Latest = await fetch('http://61.79.252.245:8000/login');

          console.log('Response:', response_Latest);
        } catch (error) {
          console.error('Error fetching sensor data:', error);
        }
    };

    return(
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topleft">
                    <span className="logo">DASHBOARD</span>
                    <div className="login">
                        <img onClick={()=>fetchLogin()} 
                            src={LoginImage} alt='login image' style={{width : '1.3vw',height:'1.3vw',marginTop:'0.2vw',marginRight:'0.2vw', marginLeft:'0.2vw'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}