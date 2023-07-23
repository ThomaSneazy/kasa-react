import React from 'react'
import './Navbar.scss';
import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <nav className='navbar__component'>
      <NavLink to='/'>
      <div className='navbar__logo'>
        <img className='navbar__img__logo' src="src/assets/LOGO.svg" alt="logo Kasa" />
      </div>
      </NavLink>

      <div className='navbar__right__container'>
        <NavLink to='/'>
          Accueil
          </NavLink>
        <NavLink to= '/about'>
        <div>À propos</div>
        </NavLink>
      </div>
    </nav>
    )
}

export default Navbar
