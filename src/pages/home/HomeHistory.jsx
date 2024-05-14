import React from "react";
import './home.css';
import FeaturedInfo from "../../component/graph/Graph";
import FeaturedInfoBottom from "../../component/temp/Temp";
import ChartInfo from "../../component/chartinfo/ChartInfo";



export default function HomeHistory(){
    
    const sendDataToServer = async () => {
        try {
          const response = await fetch('http://220.85.199.216:8008/api/senddata', {
            method: 'POST', // 또는 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              LED: "TRUE",
              SYSFAN: "TRUE"
            })
          });
          if (!response.ok) {
            throw new Error('서버 응답 오류');
          }
          const jsonResponse = await response.json();
          console.log('서버로부터의 응답:', jsonResponse);
        } catch (error) {
          console.error('에러:', error);
        }
      };
      
      // 함수 호출 예시
      sendDataToServer();
      

    return(

        <div className="home">
            <div>
                <ChartInfo/>
            </div>

        </div>
    )
}