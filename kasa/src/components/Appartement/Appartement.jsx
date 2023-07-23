import React from 'react'
import './Appartement.scss';
import { Link } from "react-router-dom";

function Appartement() {
  return (
    <Link to='/Appartement'>
      <div className='appartement__card'>Titre de la location</div>
    </Link>
  )
}

export default Appartement
