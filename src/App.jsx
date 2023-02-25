import { useState } from 'react'
import './App.css'
import './fonts/fonts.css'
import SocialMedia from './social-media'
import TextContent from './Text-content'
import Counter from './Counter'
import SideContent from './side-content'
import {intervalToDuration, startOfISOWeek, addDays } from 'date-fns'
import useInterval from 'use-interval'

function calculateNextFriday() {
  const today = new Date();
  const monday = startOfISOWeek(today); 
  const friday = addDays(monday, 4);
  if (today > friday) { 
    return addDays(friday, 7);
  }
  return friday;
}

function getTimeUntilNextFriday() {
  const today = new Date();
  const nextFriday = calculateNextFriday();
  const interval = intervalToDuration({
    start: today,
    end: nextFriday
  });
  return interval;
}

function App() {

  const [untilFriday, setUntilFriday] = useState(getTimeUntilNextFriday())
  const [count, setCount] = useState(0)

  useInterval(() => {
    const interval = getTimeUntilNextFriday()
    setUntilFriday(interval)
    setCount(count + 1);
  }, 1000);

  return (
    <div id='app' className="App">

      <SideContent />
      <SocialMedia />
      <TextContent 
      itIsFriday= {untilFriday.days === 6 ? 'i´ts' : 'Days left to'}
      />
      <Counter 
      days= {untilFriday.days}
      hours= {untilFriday.hours}
      minutes= {untilFriday.minutes}
      seconds= {untilFriday.seconds}
      />
    
    </div>
  )
}

export default App
