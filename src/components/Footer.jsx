import './Footer.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const handleClick = () => {
    window.scrollTo(0, 0); // Hace scroll hacia arriba al hacer clic en el enlace
  };

  return (
    <footer>
      <div className="footer-left">
        <Link to="/" onClick={handleClick}>
          <img src="img/titulo-footer.png" alt="Nombre de la Empresa" className="nombre-footer" />
        </Link>
      </div>
      <div className="footer-center">
        <div className="footer-text-left">
          <p>Verde Nido</p>
          <p>Dirección</p>
          <p>4523-0258</p>
          <p><a href="mailto:contacto@verdenido.com">contacto@verdenido.com</a></p>
        </div>
        <div className="footer-text-right" id="footer-text-right">
          <a href="#footer-text-right">INSTAGRAM</a>
          <a href="#footer-text-right">FAQ</a>
          <a href="#footer-text-right">REGLAMENTO</a>
          <a href="#footer-text-right">POLÍTICAS</a>
        </div>
      </div>
      <div className="footer-right">
        <Link to="/" onClick={handleClick}>
          <img src="img/LOGO FOTO.png" alt="Nombre de la Empresa" className="logo-footer" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
