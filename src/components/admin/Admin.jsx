import './Alojamientos.css';
import Nav from '../Nav';
import AdminSidebar from './AdminSidebar';
import AddTipoAlojamiento from './form/AddTipoAlojamiento';

const Admin = () => {
  return (
    <div className="admin-container">
    <Nav />
    <div className="admin-content">
      <AdminSidebar />
      <AddTipoAlojamiento />
      <div className="main-content">
      </div>
    </div>
  </div>
  );
};

export default Admin;
