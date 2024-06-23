import React, { useState, useEffect } from 'react';
import Nav from '../Nav';
import './Admin.css';
import AdminSidebar from './AdminSidebar';
import { Link, useParams } from 'react-router-dom';
import { fetchAlojamientos, fetchImagenes, deleteImagenes, createImagen } from '../../utils/api';

const Imagenes = () => {
  const [alojamiento, setAlojamiento] = useState({});
  const [imagenes, setImagenes] = useState([]);
  const [selectedImagen, setSelectedImagen] = useState({});
  const { id } = useParams();

  const imagePaths = [
    'img/Alojamientos_IMG/CASA1.jpg',
    'img/Alojamientos_IMG/CASA2.jpg',
    'img/Alojamientos_IMG/CASA3.jpg',
    'img/Alojamientos_IMG/CASA4.jpg',
    'img/Alojamientos_IMG/CASA5.jpg',
    'img/Alojamientos_IMG/CASA6.jpg'
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const alojamientosData = await fetchAlojamientos();
        const alojamientoData = alojamientosData.find(a => a.idAlojamiento === parseInt(id)); 
        if (alojamientoData) {
          setAlojamiento(alojamientoData);

          const imagenesData = await fetchImagenes();
          setImagenes(imagenesData.filter(img => img.idAlojamiento === parseInt(id))); 
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleClickDelete = async (idImagen) => {
    console.log(idImagen);
    try {
      const response = await deleteImagenes(idImagen);

      if (response.ok) {
        setImagenes((prev) => prev.filter((imagen) => imagen.idImagen !== idImagen));
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleAddImage = async () => {
    if (selectedImagen) {
      try {
        const response = await createImagen({
          idAlojamiento: id,
          RutaArchivo: selectedImagen
        });

        console.log('Image added successfully to DB', response);
        window.location.reload();
        setSelectedImagen(''); // Reset selectedImagen after successful addition to DB
      } catch (error) {
        console.error('Error adding image to DB:', error);
      }
    } else {
      alert('Seleccione una imagen antes de agregar.');
    }
  };

  return (
    <div className="admin-container">
      <Nav />
      <div className="admin-content">
        <AdminSidebar />
        <div className="main-content">
          <div className="header">
            <h2>Imágenes para {alojamiento.Titulo}</h2>
            <Link className="add-button" to="/admin/alojamientos">←</Link>
          </div>
          <table>
            <thead>
              <tr>
                <th>Imágenes</th>
                <th>Seleccionar Imagen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {imagenes.map((imagen) => (
                    <div key={imagen.idImagen} style={{ marginBottom: '10px' }}>
                      <img
                        src={`http://localhost:3000/${imagen.RutaArchivo}`}
                        alt="Imagen"
                        style={{ width: '100px', height: '100px' }}
                      />
                      <button className="delete" onClick={() => handleClickDelete(imagen.idImagen)}>Borrar</button>
                    </div>
                  ))}
                </td>
                <td>
                <select
                  value={selectedImagen}
                  onChange={(e) => setSelectedImagen(e.target.value)}
                >
                  <option value="">Seleccione una imagen</option>
                  {imagePaths.map((path, index) => (
                    <option key={index} value={path}>
                      {path} {/* Display the path for reference */}
                    </option>
                  ))}
                </select>
                  <button className="add" onClick={handleAddImage}>Agregar Imagen</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Imagenes;
