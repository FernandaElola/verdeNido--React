import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import './MenuDesplegable.css';

const MenuDesplegable = ({ closeMenu }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.keyCode === 27) { // Si se presiona la tecla 'Esc'
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [closeMenu]);

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
