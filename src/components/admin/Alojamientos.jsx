import React, { useState, useEffect } from 'react';
import './Alojamiento.css';
import Nav from '../Nav';
import AdminSidebar from './AdminSidebar';
import { Link, useNavigate } from 'react-router-dom';
import { fetchAlojamientos } from '../../utils/api';

const Alojamientos = () => {

  const [alojamientos, setAlojamiento] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAlojamientos();
        setAlojamiento(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleClickEdit = () => {
    alert('Click Editar');
  };
  const handleClickDelete = () => {
    alert('Click Borrar');
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
                  <td>{alojamiento.TipoAlojamiento}</td>                      
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
