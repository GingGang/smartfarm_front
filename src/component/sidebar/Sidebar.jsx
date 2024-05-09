import React from "react";
import './sidebar.css'
import imgLogo from './baekPro.jpg'
import imgLogo2 from './logo.png'
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';

export default function Sidebar(){
    let navigate = useNavigate(); // useHistory 훅을 사용하여 history 객체에 접근
=======

export default function Sidebar(){
>>>>>>> e6545f23545bb395cd7fe05e4be18f5ab81c621b

    return(        
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <img
                        src={imgLogo}
                        alt='logo image'
                        className="SideAvatar"
                    />
                </div>

                <div className="sidebarListItem">
<<<<<<< HEAD
                    <h3 onClick={() => navigate('/')} className="SidebarText">Dashboard</h3>
                </div>

                <div className="sidebarListItem">
                    <h3 onClick={() => navigate('/camera')} className="SidebarText">Camera</h3>
                </div>

                <div className="sidebarListItem">
                    <h3 onClick={() => navigate('/history')} className="SidebarText">History</h3>
=======
                    <h3 className="SidebarText">Dashboard</h3>
                </div>

                <div className="sidebarListItem">
                    <h3 className="SidebarText">Camera</h3>
                </div>

                <div className="sidebarListItem">
                    <h3 className="SidebarText">History</h3>
>>>>>>> e6545f23545bb395cd7fe05e4be18f5ab81c621b
                </div>
                
                <div className="SidebarLogo">
                <img
                        src={imgLogo2}
                        alt='logo image'
                    />
                </div>
                
            </div>
        </div>
    )
}