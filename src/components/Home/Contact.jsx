import React, { useState } from 'react';
import './Contact.css';
import { Nav } from './Nav';
import { Footer } from './Footer';

export const Contact = () => {
    const [formData, setFormData] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const formObj = Object.fromEntries(data.entries());
        setFormData(formObj);
        setSubmitted(true);
    };

    return (
        <div className="contact">
            <div className="banner-contact">
                <img src="img/encabezado-contact-page.jpg" alt="Imagen del banner" className="banner-pic" />
            </div>

            <Nav />

            <div className="container">
                <h2>Contáctanos</h2>
                <p className="encabezado">
                    Estamos para ayudarte con cualquier pregunta que tengas. <br />
                    Si tienes alguna duda, no dudes en escribirnos y te responderemos lo antes posible.
                </p>

                <h3>Información de contacto</h3>
                <p>Todos los campos con * son requeridos.</p>

                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="half-column">
                            <label htmlFor="email">Email *</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="half-column">
                            <label htmlFor="telefono">Teléfono *</label>
                            <input type="text" id="telefono" name="telefono" required />
                        </div>
                    </div>
                    <div className="full-column">
                        <label htmlFor="nombre">Nombre Completo *</label>
                        <input type="text" id="nombre" name="nombre" required />
                    </div>

                    <h3 className="apartado">Elige un tema</h3>

                    <div className="row">
                        <div className="half-column">
                            <label htmlFor="motivo">Motivo de contacto</label>
                            <select id="motivo" name="motivo" required>
                                <option value="" disabled selected>Seleccione una opción</option>
                                <option value="consulta">Consulta</option>
                                <option value="sugerencia">Sugerencia</option>
                            </select>
                        </div>
                        <div className="half-column">
                            <label htmlFor="provincia">Provincia</label>
                            <select id="provincia" name="provincia" required>
                                <option value="" disabled selected>Seleccione una opción</option>
                                <option value="buenos-aires">Buenos Aires</option>
                                <option value="entre-rios">Entre Ríos</option>
                            </select>
                        </div>
                    </div>

                    <div className="full-column">
                        <label htmlFor="asunto">Asunto *</label>
                        <input type="text" id="asunto" name="asunto" required />

                        <label htmlFor="detalles">Ingrese los detalles de su consulta *</label>
                        <textarea className="detalles" id="detalles" name="detalles" rows="4" required></textarea>
                    </div>

                    <div className="button">
                        <input type="submit" value="Enviar" />
                    </div>
                </form>

                {submitted && (
                    <div className="result">
                        <h3>Datos enviados:</h3>
                        <ul>
                            {Object.entries(formData).map(([key, value]) => (
                                <li key={key}><strong>{key}:</strong> {value}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
};
