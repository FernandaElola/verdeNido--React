import './Alojamiento.css';
import Nav from '../Nav';
import AdminSidebar from './AdminSidebar';
import { Link } from 'react-router-dom';

const cabins = [
  { id: 1, name: 'Cabaña frente al lago', description: 'Cabaña frente al lago', latitude: 432, longitude: 234, price: 120000, rooms: 3, bathrooms: 2, state: 'Rio Negro', tipoAlojamiento: 'Cabaña' },
  { id: 2, name: 'Hotel Santa Fe', description: 'Hotel Santa Fe', latitude: 234, longitude: 334, price: 80000, rooms: 2, bathrooms: 2, state: 'Santa Fe', tipoAlojamiento: 'Hotel' }
];  

const Alojamientos = () => {
  const handleClickAdd = () => {
    alert('Click Add');
  };
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
            <Link className="add-button" to="" onClick={handleClickAdd}>+</Link>
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
                  <td>{cabin.description}</td>
                  <td>{cabin.latitude}</td>
                  <td>{cabin.longitude}</td>
                  <td>${cabin.price}</td>
                  <td>{cabin.rooms}</td>
                  <td>{cabin.bathrooms}</td>
                  <td>{cabin.state}</td> 
                  <td>{cabin.tipoAlojamiento}</td>                      
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
