// src/components/Nav.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuDesplegable from './MenuDesplegable';
import './Nav.css';

export const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Hook para hacer scroll al tope cuando cambie la ruta
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const toggleMenu = () => setShowMenu(!showMenu);

  const scrollToTopAndNavigate = (path) => {
    window.scrollTo(0, 0);
    window.location = path;
  };

  return (
    <nav className="navbar">
      {windowWidth > 900 ? (
        <>
          <ul className="nav-left">
            <li><Link onClick={() => scrollToTopAndNavigate('/about')} to="/about">NOSOTROS</Link></li>
            <li><Link onClick={() => scrollToTopAndNavigate('/contact')} to="/contact">CONTACTO</Link></li>
          </ul>
          <Link className="logo" onClick={() => scrollToTopAndNavigate('/')} to="/"><img src="/img/LOGO FOTO.png" alt="Logo" /></Link>
          <ul className="nav-right">
            <li><Link onClick={() => scrollToTopAndNavigate('/')} to="/">ALOJAMIENTOS</Link></li>
            <li><a href="/admin" onClick={() => window.scrollTo(0, 0)}>ADMIN</a></li>
          </ul>
        </>
      ) : (
        <div className="logo menu-logo" onClick={toggleMenu}>
          <img src="/img/LOGO FOTO MENU.png" alt="Menu Logo" />
        </div>
      )}
      {showMenu && <MenuDesplegable closeMenu={toggleMenu} />}
    </nav>
  );
};

export default Nav;
