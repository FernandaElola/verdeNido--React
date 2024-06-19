import React, { useState, useEffect } from 'react';
import AlojamientoCard from './AlojamientoCard';
import FiltroAlojamientos from './FiltroAlojamientos';
import { fetchAlojamientos, fetchImagenes, fetchTiposAlojamiento } from '../utils/api.js'; // Importar las funciones de api.js
import './AlojamientoList.css';

const AlojamientoList = () => {
  const [alojamientos, setAlojamientos] = useState([]);
  const [filtros, setFiltros] = useState({
    nombre: '',
    tipoAlojamiento: '',
    disponibilidad: '',
    rangoPrecios: '',
    dormitorios: '',
    banios: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAlojamientos = async () => {
      try {
        const alojamientoData = await fetchAlojamientos();
        const imagesData = await fetchImagenes();
        const tiposAlojamientoData = await fetchTiposAlojamiento();

        const alojamientosWithImages = alojamientoData.map(alojamiento => {
          const alojamientoImages = imagesData.filter(image => image.idAlojamiento === alojamiento.idAlojamiento);
          const tipoAlojamiento = tiposAlojamientoData.find(tipo => tipo.idTipoAlojamiento === alojamiento.idTipoAlojamiento);

          return {
            ...alojamiento,
            imagenes: alojamientoImages,
            tipoAlojamiento: tipoAlojamiento ? tipoAlojamiento.Descripcion : 'Desconocido'
          };
        });

        // Filtrar los alojamientos basado en los filtros actuales
        const alojamientosFiltrados = filtrarAlojamientos(alojamientosWithImages, filtros);

        setAlojamientos(alojamientosFiltrados);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadAlojamientos();
  }, [filtros]); // Dependencia de efecto: se ejecuta cuando cambian los filtros

  const handleFiltrar = (nuevosFiltros) => {
    setFiltros(nuevosFiltros);
  };

  const filtrarAlojamientos = (alojamientos, filtros) => {
    return alojamientos.filter((alojamiento) => {
      const {
        nombre = '',
        tipoAlojamiento = '',
        disponibilidad = '',
        rangoPrecios = '',
        dormitorios = '',
        banios = ''
      } = filtros;

      return (
        (nombre === '' || alojamiento.Titulo.toLowerCase().includes(nombre.toLowerCase())) &&
        (tipoAlojamiento === '' || alojamiento.tipoAlojamiento === tipoAlojamiento) &&
        (disponibilidad === '' || alojamiento.Estado === disponibilidad) &&
        (rangoPrecios === '' || alojamiento.PrecioPorDia <= parseInt(rangoPrecios.split('-')[1], 10)) &&
        (dormitorios === '' || alojamiento.CantidadDormitorios === parseInt(dormitorios, 10)) &&
        (banios === '' || alojamiento.CantidadBanios === parseInt(banios, 10))
      );
    });
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="alojamiento-list">
      <FiltroAlojamientos onFiltrar={handleFiltrar} />
      {alojamientos.map(alojamiento => (
        <AlojamientoCard key={alojamiento.idAlojamiento} alojamiento={alojamiento} />
      ))}
    </div>
  );
};

export default AlojamientoList;
