import React, { useState } from 'react';
import './AlojamientoCard.css';
import { Link } from 'react-router-dom';

const AlojamientoCard = ({ alojamiento }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  // Función para obtener la clase de estado basada en la disponibilidad
  const getEstadoClass = (estado) => {
    return estado === 'Disponible' ? 'estado-disponible' : 'estado-no-disponible';
  };

  return (
    <div className="alojamiento-card">
      <div className="image-container" onClick={toggleDetails}>
        {/* Mostrar la primera imagen del alojamiento */}
        <img src={alojamiento.imagenes[0]?.RutaArchivo || './img/default.jpg'} alt={alojamiento.Titulo} />
        {showDetails && (
          <div className="details-overlay">
            <div className="details-container">
              <ul className="alojamiento-details">
                {alojamiento.Descripcion}
              </ul>
            </div>
          </div>
        )}
        <button className="details-button" onClick={toggleDetails}>
          {showDetails ? "-" : "+"}
        </button>
      </div>
      <h3>{alojamiento.Titulo}</h3>
      <ul className="alojamiento-details">
        <li>
          <span className="detail-number">1</span> Tipo de alojamiento: {alojamiento.tipoAlojamiento}
        </li>
        <li>
          <span className="detail-number">2</span> Precio por día: {alojamiento.PrecioPorDia}
        </li>
        <li>
          <span className="detail-number">3</span> Cantidad de dormitorios: {alojamiento.CantidadDormitorios}
        </li>
        <li>
          <span className="detail-number">4</span> Cantidad de baños: {alojamiento.CantidadBanios}
        </li>
        <li>
          <span className="detail-number">5</span> 
          Estado: <span className={getEstadoClass(alojamiento.Estado)}>{alojamiento.Estado}</span>
        </li>
      </ul>
      <Link to={`/details/${alojamiento.idAlojamiento}`}>
        <button className="more-details-button">Quiero ver más detalles →</button>
      </Link>
    </div>
  );
};

export default AlojamientoCard;
