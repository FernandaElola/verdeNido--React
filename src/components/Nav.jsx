import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export const Nav = () => {
  return (
    <nav  class="navbar">
      <ul className="nav-left">
        <li><Link to="/about">NOSOTROS</Link></li>
        <li><Link to="/contact">CONTACTO</Link></li>
      </ul>
      <Link className="logo" to="/"><img src="/img/LOGO FOTO.png" alt="Logo" /></Link>
      <ul className="nav-right">
        <li><Link to="/">ALOJAMIENTOS</Link></li>
        <li><a href="#login">INICIAR SESION</a></li> {/* Este puede seguir siendo un enlace ancla */}
      </ul>
    </nav>
  );
};

export default Nav;
