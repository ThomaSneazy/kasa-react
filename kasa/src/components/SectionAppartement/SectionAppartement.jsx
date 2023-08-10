import React, { useEffect, useState } from 'react';
import './SectionAppartement.scss';
import Appartement from "../Appartement/Appartement";

function SectionAppartement() {
  const [appartements, setAppartements] = useState([]);

  useEffect(() => {
    fetchAppartements();
  }, []);

  function fetchAppartements() {
    fetch("../../src/data.json")
      .then((res) => res.json())
      .then((res) => setAppartements(res))
      .catch(console.error);
  }

  return (
    <section className='appartement__container'>
      <div className='appartement__flex'>
        {appartements.map((appartement) => (
          <Appartement
            key={appartement.id}
            id={appartement.id} // Ajoutez la prop "key" avec une valeur unique
            title={appartement.title}
            cover={appartement.cover}
          />
        ))}
      </div>
    </section>
  );
}

export default SectionAppartement;
