import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export const Nav = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [fixedHeader, setFixedHeader] = useState(true); // Inicialmente no fijo

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const visible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);

      if (visible) {
        setFixedHeader(true); // Si el usuario se desplaza hacia abajo, se mantiene el encabezado fijo
      } else {
        setFixedHeader(currentScrollPos <= 0); // Si el usuario se desplaza hacia arriba y está en la parte superior, se mantiene fijo
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const handleClick = () => {
    window.scrollTo(0, 0); // Hace scroll hacia arriba al hacer clic en un enlace
  };

  return (
    <nav className={`navbar ${fixedHeader ? 'fixed' : ''}`}>
      <ul className="nav-left">
        <li><Link to="/about" onClick={handleClick}>NOSOTROS</Link></li>
        <li><Link to="/contact" onClick={handleClick}>CONTACTO</Link></li>
      </ul>
      <Link className="logo" to="/" onClick={handleClick}><img src="/img/LOGO FOTO.png" alt="Logo" /></Link>
      <ul className="nav-right">
        <li><Link to="/" onClick={handleClick}>ALOJAMIENTOS</Link></li>
        <li><a href="#login">INICIAR SESION</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
