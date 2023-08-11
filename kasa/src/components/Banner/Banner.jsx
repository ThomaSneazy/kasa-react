import React from "react";
import "./Banner.scss";
import PropTypes from "prop-types";

export function Banner(props) {
  return (
    <div className="banner__container">
      <h1>Chez vous, partout et ailleurs</h1>
      <img className="banner__img" src={props.image} alt="banner img" />
      <div className="banner__overlay"></div>
    </div>
  );
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
};
export default Banner;
