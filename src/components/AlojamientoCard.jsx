import React, { useState } from 'react';
import './AlojamientoCard.css';

const AlojamientoCard = ({ alojamiento }) => {
  const [showDetails, setShowDetails] = useState(false); // Cambiado a false para ocultar los detalles predeterminadamente

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="alojamiento-card">
      <div className="image-container" onClick={toggleDetails}>
        {/* Aplicar blur si blurImage es verdadero */}
        <img src={alojamiento.imagen} alt={alojamiento.titulo} />
        {showDetails && (
          <div className="details-overlay">
            <div className="details-container">
              {/* Mapeo de detalles */}
              <ul className="alojamiento-details">
                {alojamiento.descripcion}
              </ul>
            </div>
          </div>
        )}
        <button className="details-button" onClick={toggleDetails}>
          {showDetails ? "-" : "+"}
        </button>
      </div>
      <h3>{alojamiento.titulo}</h3>
      {/* Numeración de elementos fuera del details-overlay */}
      <ul className="alojamiento-details">
        <li>
          <span className="detail-number">1</span> Ubicación: {alojamiento.ubicacion}
        </li>
        <li>
          <span className="detail-number">2</span> Precio por día: {alojamiento.precioPorDia}
        </li>
        <li>
          <span className="detail-number">3</span> Cantidad de dormitorios: {alojamiento.dormitorios}
        </li>
        <li>
          <span className="detail-number">4</span> Cantidad de baños: {alojamiento.banos}
        </li>
        <li>
          <span className="detail-number">5</span> Estado: {alojamiento.estado}
        </li>
      </ul>
    </div>
  );
};

export default AlojamientoCard;
