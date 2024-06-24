import React, { useState, useEffect } from 'react';
import Nav from '../Home/Nav';
import './Admin.css';
import AdminSidebar from './AdminSidebar';
import { Link, useParams } from 'react-router-dom';
import { fetchAlojamientos, fetchServicios, fetchAlojamientoServicios, createAlojamientoServicio, deleteAlojamientoServicio } from '../../utils/api';

const EditServicios = () => {
  const [alojamiento, setAlojamiento] = useState({});
  const [servicios, setServicios] = useState([]);
  const [selectedServicio, setSelectedServicio] = useState('');
  const [alojamientoServicios, setAlojamientoServicios] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const alojamientosData = await fetchAlojamientos();
        const alojamientoData = alojamientosData.find(a => a.idAlojamiento === parseInt(id)); 
        if (alojamientoData) {
          setAlojamiento(alojamientoData);

          const serviciosData = await fetchServicios(); 
          setServicios(serviciosData); 
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAlojamientoServicios();
        const filteredServicios = data.filter(as => as.idAlojamiento === parseInt(id));
        setAlojamientoServicios(filteredServicios);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleClickDelete = async (idServicio) => {
    try {
      const response = await deleteAlojamientoServicio(idServicio);

      if (response.ok) {
        setAlojamientoServicios(prev => prev.filter(servicio => servicio.idAlojamientoServicio !== idServicio));
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleAddServicio = async () => {
    if (selectedServicio) {
      try {
        const response = await createAlojamientoServicio({
          idAlojamiento: id,
          idServicio: selectedServicio
        });
        window.location.reload();
        console.log('Servicio added successfully to DB', response);
        setSelectedServicio(''); 
      } catch (error) {
        console.error('Error adding servicio to DB:', error);
      }
    } else {
      alert('Seleccione un servicio antes de agregar.');
    }
  };

  return (
    <div className="admin-container">
      <Nav />
      <div className="admin-content">
        <AdminSidebar />
        <div className="main-content">
          <div className="header">
            <h2>Servicios para {alojamiento.Titulo}</h2>
            <Link className="back-button" to="/admin/alojamientos">← Volver</Link>
          </div>
          <table>
            <thead>
              <tr>
                <th>Servicios</th>
                <th>Seleccionar Servicio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {alojamientoServicios.map(servicio => {
                      const servicioInfo = servicios.find(serv => serv.idServicio === servicio.idServicio);
                      return (
                        <div key={servicio.idAlojamientoServicio} style={{ marginBottom: '10px' }}>
                          <p>{servicioInfo ? servicioInfo.Nombre : ''}</p>
                          <button className="delete" onClick={() => handleClickDelete(servicio.idAlojamientoServicio)}>Borrar</button>
                        </div>
                      );
                    })}
                </td>
                <td>
                  <select
                    value={selectedServicio}
                    onChange={(e) => setSelectedServicio(parseInt(e.target.value))}
                  >
                    <option value="">Seleccione un servicio</option>
                    {servicios.map(servicio => (
                      <option key={servicio.idServicio} value={servicio.idServicio}>
                        {servicio.Nombre}
                      </option>
                    ))}
                  </select>
                  <button className="addButton" onClick={handleAddServicio}>Agregar Servicio</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EditServicios;
