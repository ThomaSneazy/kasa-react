import React from 'react';
import PropTypes from 'prop-types';
import './Appartement.scss';
import { Link } from "react-router-dom";

function Appartement(props) {
  return (
    <Link to={`/appartement/${props.id}`}>
      <div className='appartement__card'>
        <img className='img__appartement' src={props.cover} alt={props.title} />
        <div className="overlay__img"></div>
        <div className='title__appartement'>{props.title}</div>
      </div>
    </Link>
  );
}

Appartement.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Appartement;
