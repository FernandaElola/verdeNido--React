import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuDesplegable from './MenuDesplegable';
import './Nav.css';

export const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav className="navbar">
      {windowWidth > 800 ? (
        <>
          <ul className="nav-left">
            <li><Link to="/about">NOSOTROS</Link></li>
            <li><Link to="/contact">CONTACTO</Link></li>
          </ul>
          <Link className="logo" to="/"><img src="/img/LOGO FOTO.png" alt="Logo" /></Link>
          <ul className="nav-right">
            <li><Link to="/">ALOJAMIENTOS</Link></li>
            <li><a href="/admin">ADMIN</a></li>
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
