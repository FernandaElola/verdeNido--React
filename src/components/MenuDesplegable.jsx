import React from 'react';
import { Link } from 'react-router-dom';
import './MenuDesplegable.css';

const MenuDesplegable = ({ closeMenu }) => {
  return (
    <div className="overlay">
      <ul className="overlay-menu">
        <li><Link to="/about" onClick={closeMenu}>NOSOTROS</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>CONTACTO</Link></li>
        <li><Link to="/" onClick={closeMenu}>ALOJAMIENTOS</Link></li>
        <li><a href="/admin" onClick={closeMenu}>ADMIN</a></li>
      </ul>
    </div>
  );
};

export default MenuDesplegable;
