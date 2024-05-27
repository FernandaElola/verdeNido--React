import './Cabañas.css';
import Nav from './Nav';
import AdminSidebar from './AdminSidebar';
import Cabañas from './Cabañas';
import Reservas from './Reservas';
import { Routes, Route } from 'react-router-dom';

const Admin = () => {
  return (
    <div className="admin-container">
    <Nav />
    <div className="admin-content">
      <AdminSidebar />
      <div className="main-content">
      </div>
    </div>
  </div>
  );
};

export default Admin;
