// FiltroAlojamientos.js
import React, { useState } from 'react';
import './FiltroAlojamientos.css';

const FiltroAlojamientos = ({ onFiltrar }) => {
  const [nombre, setNombre] = useState('');
  const [tipoAlojamiento, setTipoAlojamiento] = useState('');
  const [disponibilidad, setDisponibilidad] = useState('');
  const [rangoPrecios, setRangoPrecios] = useState('');
  const [dormitorios, setDormitorios] = useState('');
  const [banios, setBanios] = useState('');

  const handleFiltrar = () => {
    const filtros = {
      nombre,
      tipoAlojamiento,
      disponibilidad,
      rangoPrecios,
      dormitorios,
      banios
    };
    onFiltrar(filtros);
  };

  const handleLimpiarFiltros = () => {
    setNombre('');
    setTipoAlojamiento('');
    setDisponibilidad('');
    setRangoPrecios('');
    setDormitorios('');
    setBanios('');
    onFiltrar({});
  };

  return (
    <div className="filtro-container">
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="filtro-input"
      />
      <select
        value={tipoAlojamiento}
        onChange={(e) => setTipoAlojamiento(e.target.value)}
        className="filtro-select"
      >
        <option value="">Tipo de Alojamiento</option>
        <option value="Cabaña">Cabaña</option>
        <option value="Eco-lodge">Eco-lodge</option>
        <option value="Bungalow">Bungalow</option>
        <option value="Casa de campo">Casa de campo</option>
        <option value="Refugio">Refugio</option>
        {/* Añade más opciones según tus datos */}
      </select>
      <select
        value={disponibilidad}
        onChange={(e) => setDisponibilidad(e.target.value)}
        className="filtro-select"
      >
        <option value="">Disponibilidad</option>
        <option value="Disponible">Disponible</option>
        <option value="Reservado">No Disponible</option>
      </select>
      <select
        value={rangoPrecios}
        onChange={(e) => setRangoPrecios(e.target.value)}
        className="filtro-select"
      >
        <option value="">Rango de Precios</option>
        <option value="0-50">0 - 50</option>
        <option value="50-100">50 - 100</option>
        <option value="100-200">100 - 200</option>
      </select>
      <select
        value={dormitorios}
        onChange={(e) => setDormitorios(e.target.value)}
        className="filtro-select"
      >
        <option value="">Dormitorios</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <select
        value={banios}
        onChange={(e) => setBanios(e.target.value)}
        className="filtro-select"
      >
        <option value="">Baños</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button onClick={handleFiltrar} className="filtro-button">
        Buscar
      </button>
      <button onClick={handleLimpiarFiltros} className="limpiar-button">
        Limpiar filtros
      </button>
    </div>
  );
};

export default FiltroAlojamientos;
