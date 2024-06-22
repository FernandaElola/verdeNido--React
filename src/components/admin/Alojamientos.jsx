import React, { useState, useEffect } from 'react';
import './Alojamiento.css';

import AdminSidebar from './AdminSidebar';
import { Link, useNavigate } from 'react-router-dom';
import { fetchAlojamientos, deleteAlojamiento } from '../../utils/api';
import Nav from '../Home/Nav';

const Alojamientos = () => {

  const [alojamientos, setAlojamientos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAlojamientos();
        setAlojamientos(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleClickEdit = (id) => {
    alert(`Click Editar ID: ${id}`);
  };

  const handleClickDelete = async (id) => {
    try {
      const response = await deleteAlojamiento(id);
      if (response.ok) {
        alert('Alojamiento borrado correctamente');
        // Refrescar la lista de alojamientos después del borrado
        const updatedAlojamientos = alojamientos.filter(alojamiento => alojamiento.idAlojamiento !== id);
        setAlojamientos(updatedAlojamientos);
      } else {
        console.error('Error al borrar el alojamiento:', response.statusText);
        alert('Error al intentar borrar el alojamiento');
      }
    } catch (error) {
      console.error('Error al borrar el alojamiento:', error.message);
      alert('Error al intentar borrar el alojamiento');
    }
  };

  return (
    <div className="admin-container">
      <Nav />
      <div className="admin-content">
        <AdminSidebar />
        <div className="main-content">
          <div className="header">
            <h2>Alojamientos</h2>
            <Link className="add-button" to="/admin/alojamiento/agregar">+</Link>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Título</th>
                <th>Descripción</th>
                <th>Latitud</th>
                <th>Longitud</th>
                <th>Precio por día</th>
                <th>Dormitorios</th>
                <th>Baños</th>
                <th>Estado</th>
                <th>Tipo Alojamiento</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {alojamientos.map(alojamiento => (
                <tr key={alojamiento.idAlojamiento}>
                  <td>{alojamiento.idAlojamiento}</td>
                  <td>{alojamiento.Titulo}</td>
                  <td>{alojamiento.Descripcion}</td>
                  <td>{alojamiento.Latitud}</td>
                  <td>{alojamiento.Longitud}</td>
                  <td>${alojamiento.PrecioPorDia}</td>
                  <td>{alojamiento.CantidadDormitorios}</td>
                  <td>{alojamiento.CantidadBanios}</td>
                  <td>{alojamiento.Estado}</td>
                  <td>{alojamiento.idTipoAlojamiento}</td>
                  <td>
                    <button className="edit" onClick={() => handleClickEdit(alojamiento.idAlojamiento)}>Editar</button>
                    <button className="delete" onClick={() => handleClickDelete(alojamiento.idAlojamiento)}>Borrar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Alojamientos;
