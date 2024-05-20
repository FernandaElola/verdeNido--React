
import './About.css';
import { Nav } from './Nav';

const About = () => {
    return (
        <div className="about">
            <Nav />
            <div className="space"></div>
            <div className="section-name">
                <i className="fa-solid fa-circle"></i>
                <h3>NOSOTROS</h3>
            </div>
            <div className="title">
                <div className="verde">
                    <h1>Verde</h1>
                </div>
                <div className="nido">
                    <div className="line-nido">
                        <div className="line-decorative"></div>
                        <h1>Nido</h1>
                    </div>
                </div>
            </div>
            <div className="space"></div>
            <div className="section1">
                <div className="column">
                    <h2>
                        Somos tu puerta de entrada a experiencias auténticas en la naturaleza. Aquí, el canto de los pájaros y el murmullo de los ríos reemplazan el bullicio de la ciudad.
                    </h2>
                </div>
            </div>
            <div className="space"></div>
            <div className="section2">
                <div className="column-iz">
                    <img src="./img/ABOUT-IMG1.jpg" alt="about-img1" className="about-img1" />
                </div>
                <div className="column-der">
                    <div className="text-container">
                        <h2>
                            Cada alojamiento tiene su propio encanto, pero todos te prometen una experiencia de relajación y conexión con la naturaleza.
                        </h2>
                    </div>
                    <div className="image-container">
                        <img src="./img/ABOUT-IMG2.png" alt="about-img2" className="about-img2" />
                    </div>
                </div>
            </div>
            <div className="section3">
                <div className="text-container">
                    <div className="section-name2">
                        <i className="fa-solid fa-circle"></i>
                        <h3>NUESTRO COMPROMISO</h3>
                    </div>
                    <div className="text">
                        <h2>La sostenibilidad es fundamental para nosotros. Trabajamos con anfitriones comprometidos con el medio ambiente, promoviendo prácticas ecológicas para reducir nuestro impacto y preservar la belleza de los lugares que amamos.</h2>
                    </div>
                </div>
                <div className="img-container">
                    <div className="column-iz">
                        <img src="./img/ABOUT-IMG3.jpg" alt="about-img3" className="about-img3" />
                    </div>
                    <div className="column-der">
                        <div className="image-container">
                            <img src="./img/ABOUT-IMG4.jpg" alt="about-img4" className="about-img4" />
                        </div>
                        <div className="text-container">
                            <h2>Desde el uso de energías renovables hasta la gestión responsable de los recursos, creemos en hacer el bien para la naturaleza mientras la disfrutamos.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
