// AlojamientoDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAlojamientos } from '../utils/api.js';
import MapView from './MapView';
import './AlojamientoDetail.css';
import Nav from './Nav.jsx';

const AlojamientoDetail = () => {
    const { id } = useParams();
    const [alojamiento, setAlojamiento] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const alojamientos = await fetchAlojamientos();
                const selectedAlojamiento = alojamientos.find(alo => alo.idAlojamiento === parseInt(id));
                setAlojamiento(selectedAlojamiento);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchDetail();
    }, [id]);

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!alojamiento) return <div>No se encontró el alojamiento</div>;

    return (
        <div>
            <Nav />
            <div className="nav-placeholder"></div>
            <div className="alojamiento-detail">
                <div className="details-column">
                    <div className="title">
                        <h1>{alojamiento.Titulo}</h1>
                    </div>
                    <p><strong>Descripción:</strong> {alojamiento.Descripcion}</p>
                    <p><strong>Ubicación:</strong> {alojamiento.Latitud}, {alojamiento.Longitud}</p>
                    <p><strong>Precio por día:</strong> {alojamiento.PrecioPorDia}</p>
                    <p><strong>Dormitorios:</strong> {alojamiento.CantidadDormitorios}</p>
                    <p><strong>Baños:</strong> {alojamiento.CantidadBanios}</p>
                    <p><strong>Estado:</strong> {alojamiento.Estado}</p>
                    <p><strong>Tipo de alojamiento:</strong> {alojamiento.TipoAlojamiento}</p>
                    <p><strong>Servicios:</strong> {alojamiento.Servicios}</p>
                </div>
                <div className="map-column">
                    <div className="map-container">
                        <MapView lat={parseFloat(alojamiento.Latitud)} lng={parseFloat(alojamiento.Longitud)} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlojamientoDetail;
