import React, { useState, useEffect } from 'react';
import Nav from '../Home/Nav';
import './Admin.css';
import AdminSidebar from './AdminSidebar';
import { Link } from 'react-router-dom';
import { fetchServicios } from '../../utils/api';

const Servicios = () => {
  const [servicios, setServicios] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editNombre, setEditNombre] = useState('');

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
    if (!window.confirm('¿Estás seguro de que deseas eliminar este servicio?')) {
      return;
    }
    try {
      // Obtener todas las relaciones de alojamientoServicios
      const relationsResponse = await fetch(`http://localhost:3001/alojamientosServicios/getAllAlojamientoServicios`);

      if (!relationsResponse.ok) {
        throw new Error('Error obteniendo las relaciones de alojamientoServicios');
      }

      const relationsData = await relationsResponse.json();

      // Filtrar relaciones que coincidan con el idServicio
      const relationsToDelete = relationsData.filter(relation => relation.idServicio === idServicio);

      // Eliminar cada relación encontrada
      for (const relation of relationsToDelete) {
        const deleteRelationResponse = await fetch(`http://localhost:3001/alojamientosServicios/deleteAlojamientoServicio/${relation.idAlojamientoServicio}`, {
          method: 'DELETE'
        });

        if (!deleteRelationResponse.ok) {
          throw new Error(`Error eliminando la relación idAlojamientoServicio: ${relation.idAlojamientoServicio}`);
        }
      }

      // Luego, eliminar el servicio
      const deleteServiceResponse = await fetch(`http://localhost:3001/servicio/deleteServicio/${idServicio}`, {
        method: 'DELETE'
      });

      if (deleteServiceResponse.ok) {
        setServicios((prev) => prev.filter((servicio) => servicio.idServicio !== idServicio));
        alert('Servicio eliminado con éxito');
      } else {
        const errorData = await deleteServiceResponse.json();
        alert(`Error eliminando el servicio: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error eliminando el servicio:', error);
      alert(`Ocurrió un error al eliminar el servicio: ${error.message}`);
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
                        style={{ width: '200px' }}  // Asegúrate de que el ancho sea suficiente
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
