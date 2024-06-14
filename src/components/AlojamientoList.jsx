// AlojamientoList.js
import React, { useState, useEffect } from 'react';
import AlojamientoCard from './AlojamientoCard';
import { fetchAlojamientos, fetchImagenes } from '../utils/api.js'; // Importar las funciones de api.js
import './AlojamientoList.css';

const AlojamientoList = () => {
  const [alojamientos, setAlojamientos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAlojamientos = async () => {
      try {
        // Llamada a la función fetchAlojamientos
        const alojamientoData = await fetchAlojamientos();
        
        // Llamada a la función fetchImagenes
        const imagesData = await fetchImagenes();

        // Asignar imágenes a sus respectivos alojamientos
        const alojamientosWithImages = alojamientoData.map(alojamiento => {
          const alojamientoImages = imagesData.filter(image => image.idAlojamiento === alojamiento.idAlojamiento);
          return {
            ...alojamiento,
            imagenes: alojamientoImages
          };
        });

        setAlojamientos(alojamientosWithImages);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadAlojamientos();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="alojamiento-list">
      {alojamientos.map(alojamiento => (
        <AlojamientoCard key={alojamiento.idAlojamiento} alojamiento={alojamiento} />
      ))}
    </div>
  );
};

export default AlojamientoList;
