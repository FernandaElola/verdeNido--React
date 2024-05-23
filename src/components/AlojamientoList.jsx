import React, { useState } from 'react';
import AlojamientoCard from './AlojamientoCard';
import './AlojamientoList.css';

const alojamientos = [
  {
    id: 1,
    titulo: "Casa de Huéspedes",
    imagen: "./img/Alojamientos_IMG/CASA1.jpg",
    detalles: ["Hasta 6 personas", "Tres habitaciones", "Cocina totalmente equipada", "Terraza con vistas al jardín"],
  },
  {
    id: 2,
    titulo: "Tienda de La Santa Paz",
    imagen: "./img/Alojamientos_IMG/CASA2.jpg",
    detalles: ["Hasta 5 personas", "Dos cuartos", "Ubicado cerca del lago", "Terraza con comedor y barbacoa"],
  },
  {
    id: 3,
    titulo: "Tienda de Tiempo Libre",
    imagen: "./img/Alojamientos_IMG/CASA4.jpg",
    detalles: ["Hasta 5 personas", "Dos cuartos", "Ubicado cerca de una bañera de agua y un parque infantil", "Terraza con comedor y barbacoa"],
  },
];

const AlojamientoList = () => {
  return (
    <div className="alojamiento-list">
      {alojamientos.map(alojamiento => (
        <AlojamientoCard key={alojamiento.id} alojamiento={alojamiento} />
      ))}
    </div>
  );
};

export default AlojamientoList;
