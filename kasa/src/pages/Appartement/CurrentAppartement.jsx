import React from "react";
import "./CurrentAppartement.scss";
import { Banner } from "../../components/Banner/Banner.jsx";
import { AppartementInfos } from "../../components/AppartementInfos/AppartementInfos.jsx";
import Data from "../../../src/data.json";
import { useParams } from "react-router-dom";


function CurrentAppartement() {
  const { id } = useParams();

  const appartement = Data.find(app => app.id === id);

  if (!appartement) {
    // Redirigez vers la page d'erreur lorsque l'appartement est introuvable
    history.push('/erreur'); // Assurez-vous d'avoir une route pour '/erreur'
    return null; // Retournez null ici car vous redirigez
  }

  return (
    <div className="appartement__wrapper">
      <Banner image={appartement.cover} />
      <AppartementInfos />
    </div>
  );
}

export default CurrentAppartement;
