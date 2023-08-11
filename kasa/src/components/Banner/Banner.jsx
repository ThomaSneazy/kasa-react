import React, { useState } from "react";
import "./Banner.scss";
import PropTypes from "prop-types";

export function Banner(props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePreviousClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? props.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === props.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const positionText = `${currentImageIndex + 1} / ${props.images.length}`;

  // Vérifiez si le nombre d'images est égal à 1 pour masquer les boutons et la position
  if (props.images.length === 1) {
    return (
      <div className="banner__container">
        <img
          className="banner__img"
          src={props.images[0]}
          alt="banner img"
        />
        <div className="banner__overlay"></div>
      </div>
    );
  }

  return (
    <div className="banner__container">
      <h1>Chez vous, partout et ailleurs</h1>
      <img
        className="banner__img"
        src={props.images[currentImageIndex]}
        alt="banner img"
      />
      <div className="banner__overlay"></div>
      <div className="btn_previous" onClick={handlePreviousClick}>
        {"<"}
      </div>
      <div className="btn_next" onClick={handleNextClick}>
        {">"}
      </div>
      <div className="position-img-conainer">
        <p className="banner__position">{positionText}</p>
      </div>
    </div>
  );
}

Banner.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Banner;
