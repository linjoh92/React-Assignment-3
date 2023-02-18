import React from 'react'
import './App.css'
import facebook from './assets/facebook.svg'
import instagram from './assets/instagram2.svg'
import youtube from './assets/youtube.svg'


const SocialMedia = () => {
  return (
  <div className='socialamedia-icons'>
    <a href="https://www.instagram.com/dayslefttofriday/" target="_blank"><img src={facebook} alt="facebook-icon" className='icon' height='18px'/></a>
    <a href="https://www.instagram.com/dayslefttofriday/" target="_blank"><img src={instagram} alt="instagram-icon" className='icon' height='18px'/></a>
    <a href="https://www.instagram.com/dayslefttofriday/" target="_blank"><img src={youtube} alt="youtube-icon" className='icon' height='18px'/></a>
  </div>
  )
}

export default SocialMedia
