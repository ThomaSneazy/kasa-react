import React, { useState } from "react";
import PropTypes from "prop-types"; // Import de PropTypes
import "./DropDown.scss";

export default function DropDown(props) {
  const [contentVisible, setContentVisible] = useState(false);
  const showContent = () => {
    setContentVisible(!contentVisible);
  };
  return (
    <div className="dropdown__wrapper">
      <div className="dropdown__content__container">
        <div className="dropdown__title__container" onClick={showContent}>
          <h3 title="">
            {props.title}{" "}
            <img
              src="/src/assets/arrow-dropdown.svg"
              className={contentVisible ? "rotated" : ""}
              alt=""
            />
          </h3>
        </div>
        {contentVisible && (
          <div className="dropdown__content">
            <p>{props.content}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Définir la validation des props avec PropTypes
DropDown.propTypes = {
  title: PropTypes.string.isRequired, // Valider que title est une chaîne de caractères requise
  content: PropTypes.node.isRequired, // Valider que content est n'importe quel nœud (élément React) requis
};
