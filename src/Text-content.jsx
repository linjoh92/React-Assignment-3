import React from 'react'
import './App.css'


const TextContent = (props) => {
  const {itIsFriday} = props;

  return (
    <div className='content-container'>
        <h1 className='content-rubrik'>{itIsFriday} friday</h1>
        <p className='content-text'>Fridays are universally loved. It's the end of the work or school week and the start of the weekend, which means leisure time, social activities, and relaxation.</p>
    </div>
  )
}

export default TextContent