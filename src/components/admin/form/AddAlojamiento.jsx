import React, { useState, useEffect } from 'react';
import Nav from '../../Home/Nav';
import './Form.css';
import { useNavigate } from 'react-router-dom';
import { fetchTiposAlojamiento } from '../../../utils/api';

const AddAlojamiento = () => {
  const navigate = useNavigate();
  const [tipoAlojamientoOptions, setTipoAlojamientoOptions] = useState([]);
  const [form, setForm] = useState({
    titulo: '',
    descripcion: '',
    latitud: '',
    longitud: '',
    precioPorDia: '',
    cantidadDormitorios: '',
    cantidadBanios: '',
    estado: '',
    idTipoAlojamiento: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tipoAlojamientoData = await fetchTiposAlojamiento();
        console.log('Fetched tipoAlojamientoOptions:', tipoAlojamientoData);
        setTipoAlojamientoOptions(tipoAlojamientoData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const enviar = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/alojamiento/createAlojamiento', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data);

        setForm({
          titulo: '',
          descripcion: '',
          latitud: '',
          longitud: '',
          precioPorDia: '',
          cantidadDormitorios: '',
          cantidadBanios: '',
          estado: '',
          idTipoAlojamiento: '',
        });

        navigate('/admin/alojamientos');
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleCancel = () => {
    navigate('/admin/alojamientos');
  };

  return (
    <div className="add-alojamiento">
      <Nav />
      <div className="content-container">
        <div className="form-container">
          <h2>Agregar Alojamiento</h2>
          <form onSubmit={enviar}>
            <div>
              <label htmlFor="titulo">Título</label>
              <input
                type="text"
                id="titulo"
                name="titulo"
                value={form.titulo}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="descripcion">Descripción</label>
              <input
                type="text"
                id="descripcion"
                name="descripcion"
                value={form.descripcion}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="latitud">Latitud</label>
              <input
                type="text"
                id="latitud"
                name="latitud"
                value={form.latitud}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="longitud">Longitud</label>
              <input
                type="text"
                id="longitud"
                name="longitud"
                value={form.longitud}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="precioPorDia">Precio por día</label>
              <input
                type="number"
                id="precioPorDia"
                name="precioPorDia"
                value={form.precioPorDia}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="cantidadDormitorios">Dormitorios</label>
              <input
                type="number"
                id="cantidadDormitorios"
                name="cantidadDormitorios"
                value={form.cantidadDormitorios}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="cantidadBanios">Baños</label>
              <input
                type="number"
                id="cantidadBanios"
                name="cantidadBanios"
                value={form.cantidadBanios}
                onChange={handleChange}
              />
            </div>           
            <div>
              <label htmlFor="estado">Estado</label>
              <select
                id="number"
                name="estado"
                value={form.estado}
                onChange={handleChange}
              >
                <option value="">Seleccione un estado</option>
                <option value="1">Reservado</option>
                <option value="2">Disponible</option>
              </select>
            </div>
            <div>
              <label htmlFor="idTipoAlojamiento">Tipo Alojamiento</label>
              <select
                id="idTipoAlojamiento"
                name="idTipoAlojamiento"
                value={form.idTipoAlojamiento}
                onChange={handleChange}
              >
                <option value="">Seleccione un tipo de alojamiento</option>
                {tipoAlojamientoOptions.map((option) => (
                  <option key={option.idTipoAlojamiento} value={option.idTipoAlojamiento}>
                    {option.Descripcion}
                  </option>
                ))}
              </select>
            </div>
            <div className="buttons">
              <button className="submit" type="submit">Enviar</button>
              <button className="cancel" type="button" onClick={handleCancel}>
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAlojamiento;
