import React from "react";
import PropTypes from "prop-types"; // Importez la bibliothèque prop-types
import "./MainWrapper.scss";

function MainWrapper({ children }) {
  return <div className="main__wrapper">{children}</div>;
}

MainWrapper.propTypes = {
  children: PropTypes.node.isRequired, // Spécifiez le type attendu pour la propriété 'children'
};

export default MainWrapper;
