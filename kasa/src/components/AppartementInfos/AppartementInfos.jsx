import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AppartementInfos.scss";
import { useParams } from "react-router-dom";
import Data from "../../../src/data.json";
import DropDown from "../DropDown/DropDown";

export function AppartementInfos() {
  const { id } = useParams();

  const appartement = Data.find((app) => app.id === id);
  const name = appartement.host.name;

  if (!appartement) {
    history.push("/erreur");
    return null;
  }
  return (
    <div className="appartement__infos__container">
      <div className="appartement__title_user__container">
        <div className="appartement__infos__left">
          <h1>{appartement.title}</h1>
          <h2 className="localisation">{appartement.location}</h2>
          <div className="tags">
            {appartement.tags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </div>
        </div>

        <div className="appartement__infos__right">
          <div className="appartement__user">
            <h3>{name}</h3>
            <div className="appartement__avatar">
              <img src={appartement.host.picture} alt="" />
            </div>
          </div>
          <div className="stars">
            {Array.from({ length: 5 }).map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                color={
                  index < appartement.rating ? "var(--red)" : "var(--grey)"
                }
              />
            ))}
          </div>
        </div>
      </div>
      <div className="appartement__dropdown__container">
        <DropDown title="Description" content={appartement.description} />
        <DropDown
          title="Équipements"
          content={
            <ul>
              {appartement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}
