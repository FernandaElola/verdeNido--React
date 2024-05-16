import './Footer.css';

export const Footer = (props) => {
    return <footer>
        <div className="footer-left">
                    <img src="img\titulo-footer.png" alt="Nombre de la Empresa" className="nombre-footer" />
                </div>
                <div className="footer-center">
                    <div className="footer-text-left">
                        <p>Verde Nido</p>
                        <p>Dirección</p>
                        <p>4523-0258</p>
                        <p><a href="mailto:contacto@verdenido.com">contacto@verdenido.com</a></p>
                    </div>
                    <div className="footer-text-right">
                        <a href="#">INSTAGRAM</a>
                        <a href="#">FAQ</a>
                        <a href="#">REGLAMENTO</a>
                        <a href="#">POLÍTICAS</a>
                    </div>
                </div>
                <div className="footer-right">
                    <img src="img\LOGO FOTO.png" alt="Nombre de la Empresa" className="logo-footer" />
                </div>
    </footer>
}