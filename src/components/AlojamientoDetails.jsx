import React from 'react';
import './AlojamientoDetails.css';

const AlojamientoDetails = ({ detalles }) => {
  return (
    <ul className="alojamiento-details">
      {detalles.map((detalle, index) => (
        <li key={index}>
          <span className="detail-number">{index + 1}</span> {detalle}
        </li>
      ))}
    </ul>
  );
};

export default AlojamientoDetails;
