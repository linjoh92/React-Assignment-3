import { useState } from 'react'
import './App.css'
import './fonts/fonts.css'
import SocialMedia from './social-media'
import TextContent from './Text-content'
import Counter from './Counter'
import SideContent from './side-content'
import {parseISO, intervalToDuration} from 'date-fns'
import useInterval from 'use-interval'


function getInterval () {
    const today = new Date()
    const friday = parseISO('2023-02-17T00:00:00')
    if (today > friday) {
      friday.setDate(friday.getDate() + 7);
    }
    const interval = intervalToDuration({
    start: today,
    end: friday
  })
  return interval
}

function App() {

  const [untilFriday, setUntilFriday] = useState(getInterval())
  const [count, setCount] = useState(0)

  useInterval(() => {
    const interval = getInterval()
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
