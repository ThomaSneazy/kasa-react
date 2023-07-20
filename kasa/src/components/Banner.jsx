import React from 'react'
import './Banner.css';

function Banner() {
  return (
    <div className='banner__container'>
      <h1>Chez vous, partout et ailleurs</h1>
      <img className='banner__img' src="src/assets/banner.png" alt="banner img" />
      <div className='banner__overlay'></div>
    </div>
  )
}

export default Banner
