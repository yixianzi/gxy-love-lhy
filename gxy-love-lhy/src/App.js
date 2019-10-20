import React, { useState, useEffect } from 'react';
import { Carousel } from 'antd';

import './App.css'

function App() {

  const [result, setResult] = useState(
    <div>
      love forever
    </div>
  )

  function timeElapse() {
    let date = '2018-04-23 18:07:00';
    let current = Date();
    let seconds = (Date.parse(current) - Date.parse(date)) / 1000;
    let days = Math.floor(seconds / (3600 * 24));
    seconds = seconds % (3600 * 24);
    let hours = Math.floor(seconds / 3600);
    if (hours < 10) {
      hours = "0" + hours;
    }
    seconds = seconds % 3600;
    let minutes = Math.floor(seconds / 60);
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    seconds = seconds % 60;
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return (
      <div>
        <span className="digit">{days}</span><span className="des">天</span>
        <span className="digit">{hours}</span><span className="des">小时</span>
        <span className="digit">{minutes}</span><span className="des">分钟</span>
        <span className="digit">{seconds}</span><span className="des">秒</span>
      </div>
    )
  }


  useEffect(() => {
    const id = setInterval(
      () => {
        setResult(timeElapse())
      }, 500)
    return () => clearInterval(id)
  }, [])

  return (
    <div>
      <Carousel autoplay={true}>
      <div>
        <img src="1.jpg" alt=""/>
      </div>
    </Carousel>
    <img src="" alt=""/>
      <div className="love_time">
        <div>我们已经相爱了</div>
        {result}
        {result=== (   
          <div>
            love forever
          </div>)
            ? null :
          (<div>      
            <div>这个数字将会，一直一直，一直一直增加下去</div>
            <div>直到永远</div>
          </div>)
        }
      </div>
    </div>
  );
}



export default App;
