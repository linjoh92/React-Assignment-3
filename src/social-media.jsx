import React from 'react'
import './App.css'
import facebook from './assets/facebook.svg'
import instagram from './assets/instagram2.svg'
import youtube from './assets/youtube.svg'


const SocialMedia = () => {
  return (
  <div className='socialamedia-icons'>
    <img src={facebook} alt="facebook-icon" className='icon'/>
    <img src={instagram} alt="instagram-icon" className='icon'/>
    <img src={youtube} alt="youtube-icon" className='icon'/>
  </div>
  )
}

export default SocialMedia
