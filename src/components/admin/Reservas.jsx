import './Reservas.css';
import Nav from '../Nav';
import AdminSidebar from './AdminSidebar';

const cabins = [
  { id: 1, dato1: 'otro dato', dato2: 'otro dato', dato4: 'otro dato' },
  { id: 2, dato1: 'otro dato', dato2: 'otro dato', dato3: 'otro dato' },
];

const Reservas = () => {
  return (
    <div className="admin-container">
      <Nav />
      <div className="admin-content">
      <AdminSidebar />
        <div className="main-content">
          <h2>Reservas</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>otro dato</th>
                <th>otro dato</th>
                <th>otro dato</th>
                <th>otro dato</th>
              </tr>
            </thead>
            <tbody>
              {cabins.map(cabin => (
                <tr key={cabin.id}>
                  <td>{cabin.id}</td>
                  <td>{cabin.dato1}</td>
                  <td>{cabin.dato2}</td>
                  <td>${cabin.dato3}</td>
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

export default Reservas;
