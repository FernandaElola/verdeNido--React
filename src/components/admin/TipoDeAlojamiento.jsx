import React, { useState, useEffect } from 'react';
import Nav from '../Home/Nav';
import './Admin.css';
import AdminSidebar from './AdminSidebar';
import { Link } from 'react-router-dom';
import { fetchTiposAlojamiento } from '../../utils/api';

const TipoDeAlojamientos = () => {
  const [tiposAlojamiento, setTiposAlojamiento] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editDescripcion, setEditDescripcion] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTiposAlojamiento();
        setTiposAlojamiento(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleClickDelete = async (idTipoAlojamiento) => {
    if (!window.confirm('¿Estás seguro de que deseas eliminar este Tipo de alojamiento?')) {
      return;
    }
    try {
      const response = await fetch(`http://localhost:3001/tiposAlojamiento/deleteTipoAlojamiento/${idTipoAlojamiento}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setTiposAlojamiento((prev) => prev.filter((tipo) => tipo.idTipoAlojamiento !== idTipoAlojamiento));
        alert('Tipo de alojamiento eliminado correctamente');
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleEditClick = (index, descripcion) => {
    setEditIndex(index);
    setEditDescripcion(descripcion);
  };

  const handleEditSubmit = async (idTipoAlojamiento) => {
    try {
      const response = await fetch(`http://localhost:3001/tiposAlojamiento/putTipoAlojamiento/${idTipoAlojamiento}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Descripcion: editDescripcion })
      });

      if (response.ok) {
        setTiposAlojamiento((prev) =>
          prev.map((tipo) =>
            tipo.idTipoAlojamiento === idTipoAlojamiento ? { ...tipo, Descripcion: editDescripcion } : tipo
          )
        );
        setEditIndex(null);
        setEditDescripcion('');
        alert('Tipo de alojamiento editado correctamente');
      }
    } catch (error) {
      console.error('Error editing data:', error);
    }
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
    setEditDescripcion('');
  };

  return (
    <div className="admin-container">
      <Nav />
      <div className="admin-content">
        <AdminSidebar />
        <div className="main-content">
          <div className="header">
            <h2>Tipos de Alojamientos</h2>
            <Link className="add-button" to="/admin/tipo-alojamiento/agregar">+</Link>
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
              {Array.isArray(tiposAlojamiento) && tiposAlojamiento.map((tipo, index) => (
                <tr key={tipo.idTipoAlojamiento}>
                  <td>{tipo.idTipoAlojamiento}</td>
                  <td>
                    {editIndex === index ? (
                      <input
                        type="text"
                        value={editDescripcion}
                        onChange={(e) => setEditDescripcion(e.target.value)}
                      />
                    ) : (
                      tipo.Descripcion
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <>
                        <button className="edit" onClick={() => handleEditSubmit(tipo.idTipoAlojamiento)}>Guardar</button>
                        <button className="delete" onClick={handleCancelEdit}>Cancelar</button>
                      </>
                    ) : (
                      <>
                        <button className="edit" onClick={() => handleEditClick(index, tipo.Descripcion)}>Editar</button>
                        <button className="delete" onClick={() => handleClickDelete(tipo.idTipoAlojamiento)}>Borrar</button>
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

export default TipoDeAlojamientos;
