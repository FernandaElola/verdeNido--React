import './Contact.css';
import { Nav } from './Nav';
import { Footer } from './Footer';

export const Contact = () => {
    const date = new Date();

    return (
        <div className="contact">
            <div className="banner">
                <img src="img/encabezado-contact-page.jpg" alt="Imagen del banner" className="banner-pic" />
            </div>

            <Nav />

            <div className="container">
                <h2>Contactanos</h2>
                <p className="encabezado">Estamos para ayudarte con cualquier pregunta que tengas. <br />
                    Si tenés alguna duda, no dudes en escribirnos y te responderemos lo antes posible.</p>

                <h3>Información de contacto</h3>
                <p>Todos los campos con * son requeridos.</p>

                <form action="submit.php" method="post">
                    <div className="row">
                        <div className="half-column">
                            <label htmlFor="email">Email *</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="half-column">
                            <label htmlFor="telefono">Teléfono *</label>
                            <input type="text" id="telefono" name="telefono" />
                        </div>
                    </div>
                    <div style={{ width: '48%' }}>
                        <label htmlFor="nombre">Nombre Completo *</label>
                        <input type="text" id="nombre" name="nombre" required />
                    </div>

                    <h3 className="apartado">Elegí un tema</h3>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ width: '48%' }}>
                            <label htmlFor="motivo">Motivo de contacto</label>
                            <select id="motivo" name="motivo">
                                <option value="" disabled selected>Seleccione una opción</option>
                                <option value="consulta">Consulta</option>
                                <option value="sugerencia">Sugerencia</option>
                            </select>
                        </div>
                        <div style={{ width: '48%' }}>
                            <label htmlFor="provincia">Provincia</label>
                            <select id="provincia" name="provincia">
                                <option value="" disabled selected>Seleccione una opción</option>
                                <option value="buenos-aires">Buenos Aires</option>
                                <option value="entre-rios">Entre Ríos</option>
                            </select>
                        </div>
                    </div>

                    <div style={{ width: '48%', marginTop: '20px' }}>
                        <label htmlFor="asunto">Asunto *</label>
                        <input type="text" id="asunto" name="asunto" style={{ width: '100%' }} />

                        <label htmlFor="detalles">Ingrese los detalles de su consulta *</label>
                        <textarea className="detalles" id="detalles" name="detalles" rows="4" required></textarea>
                    </div>

                    <div className="button">
                        <input type="submit" value="Enviar" />
                    </div>
                </form>
            </div>

            <Footer />
        </div>
    );
}
