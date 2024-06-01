import './TipoAlojamiento.css';
import Nav from '../Nav';
import AdminSidebar from './AdminSidebar';
import { Link } from 'react-router-dom';

const cabins = [
  { id: 1, name: 'Cabaña en la montaña', location: 'Montaña', price: 50000 },
  { id: 2, name: 'Cabaña cerca del lago', location: 'Lago', price: 80000 },
];

const Alojamientos = () => {

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
            <button className="add-button"><Link to="/agregar-alojamiento">+</Link></button>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Latitud</th>
                <th>Longitud</th>
                <th>Precio por día</th>
                <th>Dormitorios</th>
                <th>Baños</th>
                <th>Estado</th>
                <th>Tipo Alojamiento</th>
              </tr>
            </thead>
            <tbody>
              {cabins.map(cabin => (
                <tr key={cabin.id}>
                  <td>{cabin.id}</td>
                  <td>{cabin.name}</td>
                  <td>{cabin.latitude}</td>
                  <td>{cabin.longitude}</td>
                  <td>${cabin.price}</td>
                  <td>{cabin.rooms}</td>
                  <td>{cabin.bathrooms}</td>
                  <td>{cabin.state}</td>      
                  <td>{cabin.action}</td>             
                  <td>
                  <select name="tipo_alojamiento" id="tipo_alojamiento">
                        <option value="hotel">Hotel</option>
                        <option value="hostel">Hostel</option>
                        <option value="apartment">Apartment</option>
                        <option value="bnb">B&B</option>
                    </select>
                  </td>
                  <td>
                    <button className="edit" onClick={handleClickEdit}>Editar</button>
                    <button className="delete" onClick={handleClickDelete}>Borrar</button>
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
