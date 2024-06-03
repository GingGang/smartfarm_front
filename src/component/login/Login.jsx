import React, { useEffect, useState } from "react";
import Logo from './logo.gif';
import './login.css'

export default function Login() {
  return (
    <div className="LoginMain">
    <div className="LoginBox">
        <div className="LoginLogoContainer">
            <div className="LoginText">JMPlants SmartFarm</div>
        </div>
        <div className="LoginBottomContainer">
            <div className="SignInWithGoogle">
            <div className="GoogleIcon">
                <i className="fab fa-google"></i>
            </div>
            <div className="GoogleText">Sign in with Google</div>
            </div>
        </div>
      </div>
    </div>
  );
}
