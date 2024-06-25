import React, { useState, useEffect } from 'react';
import './Admin.css';
import Nav from '../Home/Nav';
import AdminSidebar from './AdminSidebar';
import { Link } from 'react-router-dom';
import { fetchAlojamientos, deleteAlojamiento, fetchTiposAlojamiento, fetchImagenes, fetchServicios, fetchAlojamientoServicios, deleteAlojamientoServicio, deleteImagenes } from '../../utils/api';

const Alojamientos = () => {
  const [alojamientos, setAlojamientos] = useState([]);
  const [tiposAlojamiento, setTiposAlojamiento] = useState([]);
  const [imagenes, setImagenes] = useState([]);
  const [servicios, setServicios] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [alojamientoServicios, setAlojamientoServicios] = useState([]);
  const [editAlojamiento, setEditAlojamiento] = useState({
    idAlojamiento: null,
    Titulo: '',
    Descripcion: '',
    Latitud: '',
    Longitud: '',
    PrecioPorDia: '',
    CantidadDormitorios: '',
    CantidadBanios: '',
    Estado: '',
    idTipoAlojamiento: '',
  });

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchImagenes();
        setImagenes(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAlojamientoServicios();
        setAlojamientoServicios(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleClickDelete = async (idAlojamiento) => {
    if (!window.confirm('¿Estás seguro de que deseas eliminar este Alojamiento?')) {
      return;
    }
    try {
      const relaciones = alojamientoServicios.filter(servicio => servicio.idAlojamiento === idAlojamiento);  
      for (const relacion of relaciones) {
        const response = await deleteAlojamientoServicio(relacion.idAlojamientoServicio);
        if (!response.ok) {
          throw new Error('Error al eliminar la relación entre alojamiento y servicio');
        }
      }
  
      const imagenesToDelete = imagenes.filter(img => img.idAlojamiento === idAlojamiento);
      for (const imagen of imagenesToDelete) {
        const response = await deleteImagenes(imagen.idImagen);
        if (!response.ok) {
          throw new Error('Error al eliminar imagen asociada');
        }
      }      
  
      const responseAlojamiento = await deleteAlojamiento(idAlojamiento);
      if (responseAlojamiento.ok) {
        setAlojamientos((prev) => prev.filter((alojamiento) => alojamiento.idAlojamiento !== idAlojamiento));
      } else {
        alert('Error al intentar borrar el alojamiento');
      }
    } catch (error) {
      console.error('Error al intentar borrar el alojamiento:', error);
      alert('Error al intentar borrar el alojamiento');
    }
  };

  const handleEditClick = (index, alojamiento) => {
    setEditIndex(index);
    setEditAlojamiento({
      idAlojamiento: alojamiento.idAlojamiento,
      Titulo: alojamiento.Titulo,
      Descripcion: alojamiento.Descripcion,
      Latitud: alojamiento.Latitud,
      Longitud: alojamiento.Longitud,
      PrecioPorDia: alojamiento.PrecioPorDia,
      CantidadDormitorios: alojamiento.CantidadDormitorios,
      CantidadBanios: alojamiento.CantidadBanios,
      Estado: alojamiento.Estado,
      idTipoAlojamiento: alojamiento.idTipoAlojamiento,
    });
  };

  const handleEditSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:3001/alojamiento/putAlojamiento/${editAlojamiento.idAlojamiento}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editAlojamiento)
      });

      if (response.ok) {
        setAlojamientos((prev) =>
          prev.map((alojamiento) =>
            alojamiento.idAlojamiento === editAlojamiento.idAlojamiento ? { ...editAlojamiento } : alojamiento
          )
        );
        setEditIndex(null);
        alert('Alojamiento editado con éxito');
        window.location.reload();
      } else {
        console.error('Error al editar el alojamiento:', response.statusText);
        alert('Error al intentar editar el alojamiento');
      }

    } catch (error) {
      console.error('Error al editar el alojamiento:', error.message);
      alert('Error al intentar editar el alojamiento');
    }
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
    setEditAlojamiento({
      idAlojamiento: null,
      Titulo: '',
      Descripcion: '',
      Latitud: '',
      Longitud: '',
      PrecioPorDia: '',
      CantidadDormitorios: '',
      CantidadBanios: '',
      Estado: '',
      idTipoAlojamiento: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditAlojamiento((prev) => ({
      ...prev,
      [name]: value,
    }));
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
                <th>Imagen</th>
                <th>Servicios</th>
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
              {alojamientos.map((alojamiento, index) => {
                return (
                  <tr key={alojamiento.idAlojamiento}>
                    <td>{alojamiento.idAlojamiento}</td>
                    <td>
                      <img
                        src={`http://localhost:3000/${imagenes.find(img => img.idAlojamiento === alojamiento.idAlojamiento)?.RutaArchivo || 'img/default-image.jpg'}`}
                        alt="Alojamiento"
                        style={{ width: '100px', height: '100px' }}
                      />
                      <Link className="editButton" to={`/admin/imagenes/edit/${alojamiento.idAlojamiento}`}>Editar</Link>
                    </td>
                    <td>
                      <ul>
                        {alojamientoServicios
                          .filter(servicio => servicio.idAlojamiento === alojamiento.idAlojamiento)
                          .map(servicio => {
                            const servicioInfo = servicios.find(serv => serv.idServicio === servicio.idServicio);
                            return (
                              <li key={servicio.idAlojamientoServicio}>
                                {servicioInfo ? servicioInfo.Nombre : ''}
                              </li>
                            );
                          })}
                      </ul>
                      <Link className="editButton" to={`/admin/servicios/edit/${alojamiento.idAlojamiento}`}>Editar</Link>
                    </td>
                    <td>
                      {editIndex === index ? (
                        <input
                          type="text"
                          name="Titulo"
                          value={editAlojamiento.Titulo}
                          onChange={handleInputChange}
                        />
                      ) : (
                        alojamiento.Titulo
                      )}
                    </td>
                    <td>
                      {editIndex === index ? (
                        <textarea
                          name="Descripcion"
                          value={editAlojamiento.Descripcion}
                          onChange={handleInputChange}
                        />
                      ) : (
                        alojamiento.Descripcion
                      )}
                    </td>
                    <td>
                      {editIndex === index ? (
                        <input
                          type="text"
                          name="Latitud"
                          value={editAlojamiento.Latitud}
                          onChange={handleInputChange}
                        />
                      ) : (
                        alojamiento.Latitud
                      )}
                    </td>
                    <td>
                      {editIndex === index ? (
                        <input
                          type="text"
                          name="Longitud"
                          value={editAlojamiento.Longitud}
                          onChange={handleInputChange}
                        />
                      ) : (
                        alojamiento.Longitud
                      )}
                    </td>
                    <td>
                      {editIndex === index ? (
                        <input
                          type="text"
                          name="PrecioPorDia"
                          value={editAlojamiento.PrecioPorDia}
                          onChange={handleInputChange}
                        />
                      ) : (
                        `$${alojamiento.PrecioPorDia}`
                      )}
                    </td>
                    <td>
                      {editIndex === index ? (
                        <input
                          type="text"
                          name="CantidadDormitorios"
                          value={editAlojamiento.CantidadDormitorios}
                          onChange={handleInputChange}
                        />
                      ) : (
                        alojamiento.CantidadDormitorios
                      )}
                    </td>
                    <td>
                      {editIndex === index ? (
                        <input
                          type="text"
                          name="CantidadBanios"
                          value={editAlojamiento.CantidadBanios}
                          onChange={handleInputChange}
                        />
                      ) : (
                        alojamiento.CantidadBanios
                      )}
                    </td>
                    <td>
                      {editIndex === index ? (
                        <select
                          name="Estado"
                          value={editAlojamiento.Estado}
                          onChange={handleInputChange}
                        >
                          <option value="">Seleccione un estado</option>
                          <option value="Reservado">Reservado</option>
                          <option value="Disponible">Disponible</option>
                        </select>
                      ) : (
                        alojamiento.Estado
                      )}
                    </td>
                    <td>
                      {editIndex === index ? (
                        <select
                          name="idTipoAlojamiento"
                          value={editAlojamiento.idTipoAlojamiento}
                          onChange={handleInputChange}
                        >
                          <option value="">Seleccione un tipo de alojamiento</option>
                          {tiposAlojamiento.map((tipo) => (
                            <option key={tipo.idTipoAlojamiento} value={tipo.idTipoAlojamiento}>
                              {tipo.Descripcion}
                            </option>
                          ))}
                        </select>
                      ) : (
                        tiposAlojamiento.find((tipo) => tipo.idTipoAlojamiento === alojamiento.idTipoAlojamiento)?.Descripcion || 'Desconocido'
                      )}
                    </td>
                    <td>
                      {editIndex === index ? (
                        <>
                          <button className="edit" onClick={handleEditSubmit}>Guardar</button>
                          <button className="delete" onClick={handleCancelEdit}>Cancelar</button>
                        </>
                      ) : (
                        <>
                          <button className="edit" onClick={() => handleEditClick(index, alojamiento)}>Editar</button>
                          <button className="delete" onClick={() => handleClickDelete(alojamiento.idAlojamiento)}>Borrar</button>
                        </>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Alojamientos;
