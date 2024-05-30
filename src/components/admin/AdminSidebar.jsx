import React from 'react';
import './AdminSidebar.css';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Alojamientos</h2>
      <ul>
        <li><Link to="/admin/alojamientos">Alojamientos</Link></li>
        <li><Link to="/admin">Imagenes</Link></li>
        <li><Link to="/admin">Tipo de Alojamientos</Link></li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
