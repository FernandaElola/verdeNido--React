import React, { useState } from 'react';
import AlojamientoDetails from './AlojamientoDetails';
import './AlojamientoCard.css';

const AlojamientoCard = ({ alojamiento }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="alojamiento-card">
      <div className="image-container" onClick={toggleDetails}>
        <img src={alojamiento.imagen} alt={alojamiento.titulo} />
        <button className="details-button">+</button>
      </div>
      <h2>{alojamiento.titulo}</h2>
      {showDetails && <AlojamientoDetails detalles={alojamiento.detalles} />}
    </div>
  );
};

export default AlojamientoCard;
