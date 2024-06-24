import React, { useState, useEffect } from 'react';
import Nav from '../Home/Nav';
import './Admin.css';
import AdminSidebar from './AdminSidebar';
import { Link, useNavigate } from 'react-router-dom';
import { fetchServicios } from '../../utils/api';

const Servicios = () => {
  const [servicios, setServicios] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editNombre, setEditNombre] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchServicios();
        setServicios(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleClickDelete = async (idServicio) => {
    try {
      const response = await fetch(`http://localhost:3001/servicios/deleteServicio/${idServicio}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setServicios((prev) => prev.filter((servicio) => servicio.idServicio !== idServicio));
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleEditClick = (index, nombre) => {
    setEditIndex(index);
    setEditNombre(nombre);
  };

  const handleEditSubmit = async (idServicio) => {
    try {
      const response = await fetch(`http://localhost:3001/servicio/updateServicio/${idServicio}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Nombre: editNombre })
      });

      if (response.ok) {
        setServicios((prev) =>
          prev.map((servicio) =>
            servicio.idServicio === idServicio ? { ...servicio, Nombre: editNombre } : servicio
          )
        );
        setEditIndex(null);
        setEditNombre('');
        alert('Servicio editado con éxito');
      }
    } catch (error) {
      console.error('Error editando data:', error);
    }
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
    setEditNombre('');
  };

  return (
    <div className="admin-container">
      <Nav />
      <div className="admin-content">
        <AdminSidebar />
        <div className="main-content">
          <div className="header">
            <h2>Servicios</h2>
            <Link className="add-button" to="/admin/servicios/agregar">+</Link>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(servicios) && servicios.map((servicio, index) => (
                <tr key={servicio.idServicio}>
                  <td>{servicio.idServicio}</td>
                  <td>
                    {editIndex === index ? (
                      <input
                        type="text"
                        value={editNombre}
                        onChange={(e) => setEditNombre(e.target.value)}
                        style={{ width: '200px' }}  
                      />
                    ) : (
                      servicio.Nombre
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <>
                        <button className="edit" onClick={() => handleEditSubmit(servicio.idServicio)}>Guardar</button>
                        <button className="delete" onClick={handleCancelEdit}>Cancelar</button>
                      </>
                    ) : (
                      <>
                        <button className="edit" onClick={() => handleEditClick(index, servicio.Nombre)}>Editar</button>
                        <button className="delete" onClick={() => handleClickDelete(servicio.idServicio)}>Borrar</button>
                      </>
                    )}
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

export default Servicios;
