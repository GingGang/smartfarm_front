import React from "react";
import './sidebar.css'

import imgLogo from './baekPro.jpg'
import imgLogo2 from './logo.gif'
import dashboard from './sidebar_dashboard.gif'
import camera from './sidebar_camera.gif'
import history from './sidebar_history.gif'

import { useNavigate } from 'react-router-dom';

export default function Sidebar(){
    let navigate = useNavigate();

    return(        
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <div className="SidebarLogo">
                        <img src={imgLogo2} alt='logo image'/>

                        <div className="SidebarLogoText">JMO</div>


                    </div>
                    <img src={imgLogo} alt='logo image' className="SideAvatar"/>
                    </div>
                <div className="sidebarListItem">
                    <div className="SidebarLogo">
                        <img src={dashboard} alt='logo image' style={{marginTop:'0.2vw'}}/>
                        <h3 onClick={() => navigate('/')} className="SidebarText">Dashboard</h3>
                    </div>
                </div>

                <div className="sidebarListItem">
                    <div className="SidebarLogo">
                        <img src={camera} alt='logo image' style={{marginRight:'0.2vw'}}/>
                        <h3 onClick={() => navigate('/camera')} className="SidebarText">Camera</h3>
                    </div>
                </div>

                <div className="sidebarListItem">
                    <div className="SidebarLogo">
                        <img src={history} alt='logo image' style={{marginRight:'0.2vw', marginTop: '0.2vw'}}/>
                        <h3 onClick={() => navigate('/history')} className="SidebarText">History</h3>
                    </div>
                </div>
                
                
                
            </div>
        </div>
    )
}