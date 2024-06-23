import React from 'react';
import './Admin.css';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Alojamientos</h2>
      <ul>
        <li><Link to="/admin/alojamientos">Alojamientos</Link></li>
        <li><Link to="/admin/tipo-alojamiento">Tipo de Alojamientos</Link></li>
        <li><Link to="/admin/servicios">Servicios</Link></li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
