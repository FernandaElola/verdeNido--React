import './Cabañas.css';
import Nav from './Nav';
import AdminSidebar from './AdminSidebar';

const cabins = [
  { id: 1, name: 'Cabaña en la montaña', location: 'Montaña', price: 50000 },
  { id: 2, name: 'Cabaña cerca del lago', location: 'Lago', price: 80000 },
];

const Cabañas = () => {
  return (
    <div className="admin-container">
      <Nav />
      <div className="admin-content">
      <AdminSidebar />
        <div className="main-content">
          <h2>Cabañas</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Ubicación</th>
                <th>Precio por noche</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cabins.map(cabin => (
                <tr key={cabin.id}>
                  <td>{cabin.id}</td>
                  <td>{cabin.name}</td>
                  <td>{cabin.location}</td>
                  <td>${cabin.price}</td>
                  <td>
                    <button className="edit">Editar</button>
                    <button className="delete">Borrar</button>
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

export default Cabañas;
