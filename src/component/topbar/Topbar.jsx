import React, { useEffect } from "react";
import './Topbar.css';
import LoginImage from './GoogleLogin.png';
import { useSearchParams } from 'react-router-dom';

export default function Topbar({ topbarTitle }) { // props로 topbarTitle을 받음
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const code = searchParams.get('code');
        if (code) {
            // 구글 로그인 콜백 처리
            fetch(`http://59.16.82.65:8000/login/google/callback?code=${code}`)
                .then(response => response.json())
                .then(data => {
                    // 로그인 성공 후 처리 로직 작성
                    console.log('Login successful:', data);
                    // 쿠키 설정
                    setLoginCookie(data.token, 3600); // 1시간 동안 유효한 쿠키 설정
                })
                .catch(error => {
                    console.error('Error handling login callback:', error);
                });
        }
    }, [searchParams]);

    const fetchLogin = async (event) => {
        try {
            const response = await fetch('http://59.16.82.65:8000/login/google');
            const data = await response.json();
            removeCookies();
            window.location.href = data.url; // 구글 로그인 페이지로 리디렉션
        } catch (error) {
            console.error('Error fetching login data:', error);
        }
    };

    // 로그인 쿠키 설정 함수
    const setLoginCookie = (token, expirationSeconds) => {
        const expirationDate = new Date(Date.now() + expirationSeconds * 1000);
        document.cookie = `token=${token};expires=${expirationDate.toUTCString()};path=/;domain=example.com;HttpOnly;Secure`;
    };

    // 쿠키 제거 함수
    const removeCookies = () => {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=example.com`;
        }
    };

    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topleft">
                    <span className="logo">{topbarTitle}</span> {/* topbarTitle을 사용 */}
                    <div className="login">
                        <img onClick={fetchLogin}
                            src={LoginImage} alt='login image' style={{width : '1.3vw',height:'1.3vw',marginTop:'0.2vw',marginRight:'0.2vw', marginLeft:'0.2vw'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
