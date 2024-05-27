import React from 'react';
import './AdminSidebar.css';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Alojamientos</h2>
      <ul>
        <li><Link to="/admin/cabañas">Cabañas</Link></li>
        <li><Link to="/admin/reservas">Reservas</Link></li>
        <li><Link to="/admin">Usuarios</Link></li>
        <li><Link to="/admin">Ajustes</Link></li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
