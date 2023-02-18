import React from 'react'
import './App.css'
import facebook from './assets/facebook.svg'
import instagram from './assets/instagram2.svg'
import youtube from './assets/youtube.svg'


const SocialMedia = () => {
  return (
  <div className='socialamedia-icons'>
    <img src={facebook} alt="facebook-icon" className='icon' height='18px'/>
    <img src={instagram} alt="instagram-icon" className='icon' height='18px'/>
    <img src={youtube} alt="youtube-icon" className='icon' height='18px'/>
  </div>
  )
}

export default SocialMedia
