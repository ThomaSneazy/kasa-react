import React from 'react'
import './Navbar.css';

function Navbar() {
  return (
    <nav className='navbar__component'>
      <div className='navbar__logo'>
        <img className='navbar__img__logo' src="src/assets/LOGO.svg" alt="logo Kasa" />
      </div>
      <div className='navbar__right__container'>
        <a href="#">Accueil</a>
        <a href="#">À propos</a>
      </div>
    </nav>
    )
}

export default Navbar
