import React from 'react'
import './App.css'


const Counter = (props) => {

  const { days, hours, minutes, seconds } = props;

  const itIsFriday = days === 6 ? '0 days left' : "";
  const hideOrShow = days === 6 ? 'hide' : 'show';
  const dayOrDays = days === 1 ? 'day' : 'days';

  return (
    <div className='counter-container'>{itIsFriday}
        <p className= {`bold-time ${hideOrShow}`}>{days} {dayOrDays}</p>       
        <p className= {`bold-time ${hideOrShow}`}>{hours} hrs</p> 
        <p className= {hideOrShow}>{minutes} min</p> 
        <p className= {hideOrShow}>{seconds} sek</p> 
    </div>
  )
}

export default Counter


