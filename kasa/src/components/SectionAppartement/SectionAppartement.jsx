import React, { useEffect, useState } from "react";
import "./SectionAppartement.scss";
import Appartement from "../Appartement/Appartement";
import { fetchAppartements } from "../../services/api";

function SectionAppartement() {
  const [appartements, setAppartements] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchAppartements();
        setAppartements(data);
      } catch (error) {
        // Gérer les erreurs ici
      }
    }

    fetchData();
  }, []);

  return (
    <section className="appartement__container">
      <div className="appartement__flex">
        {appartements.map((appartement) => (
          <Appartement
            key={appartement.id}
            id={appartement.id}
            title={appartement.title}
            cover={appartement.cover}
          />
        ))}
      </div>
    </section>
  );
}

export default SectionAppartement;
