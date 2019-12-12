import React from 'react';
import './Timer.css';

const Timer = (props)=> {
    let hours =Math.floor((props.data / 3600000)%24)
    let minute=Math.floor((props.data/60000)%60)
    let seconds=Math.floor((props.data/1000)%60)
    return(<div className="time"><div className="time-items"><p>{hours<=9?'0'+hours:hours}</p><span >Hours</span></div> <div className="time-items"><p>  :{minute<=9?'0'+minute:minute}</p><span>Minutes</span></div><div className="time-items"><p>   :{seconds<=9?'0'+seconds:seconds}</p><span>  Seconds</span></div></div>
  
    )
}



export default Timer;