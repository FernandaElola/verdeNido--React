import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAlojamientos, fetchImagenes, fetchAlojamientoServicios, fetchServicios, fetchTiposAlojamiento } from '../utils/api.js';
import MapView from './MapView';
import './AlojamientoDetail.css';
import Nav from './Nav.jsx';
import ImageCarousel from './ImageCarousel'; // Importa el nuevo componente de carrusel

const AlojamientoDetail = () => {
    const { id } = useParams();
    const [alojamiento, setAlojamiento] = useState(null);
    const [imagenes, setImagenes] = useState([]);
    const [servicios, setServicios] = useState([]);
    const [tipoAlojamiento, setTipoAlojamiento] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                // Fetch alojamiento details
                const alojamientos = await fetchAlojamientos();
                const selectedAlojamiento = alojamientos.find(alo => alo.idAlojamiento === parseInt(id));
                
                if (selectedAlojamiento) {
                    // Fetch images for the alojamiento
                    const images = await fetchImagenes();
                    const alojamientoImages = images.filter(img => img.idAlojamiento === parseInt(id));
                    setImagenes(alojamientoImages);

                    // Fetch servicios relacionados
                    const alojamientoServicios = await fetchAlojamientoServicios();
                    const alojamientoServiciosFiltered = alojamientoServicios.filter(as => as.idAlojamiento === parseInt(id));

                    // Fetch details of all servicios
                    const allServicios = await fetchServicios();

                    // Get names of related servicios
                    const alojamientoServiciosNombres = alojamientoServiciosFiltered.map(as => {
                        const servicio = allServicios.find(serv => serv.idServicio === as.idServicio);
                        return servicio ? servicio.Nombre : '';
                    });

                    setServicios(alojamientoServiciosNombres);

                    // Fetch tipos de alojamiento
                    const tiposAlojamiento = await fetchTiposAlojamiento();
                    const tipo = tiposAlojamiento.find(ta => ta.idTipoAlojamiento === selectedAlojamiento.idTipoAlojamiento);
                    setTipoAlojamiento(tipo ? tipo.Descripcion : 'Desconocido');
                }

                setAlojamiento(selectedAlojamiento);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchDetail();
    }, [id]);

    // Función para dividir servicios en grupos de 3
    const dividirServicios = (array, size) => {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    };

    const serviciosAgrupados = dividirServicios(servicios, 3);

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
                    <ul>
                        <li><strong>Descripción:</strong> {alojamiento.Descripcion}</li>
                        <li><strong>Ubicación:</strong> {alojamiento.Latitud}, {alojamiento.Longitud}</li>
                        <li><strong>Precio por día:</strong> {alojamiento.PrecioPorDia}</li>
                        <li><strong>Dormitorios:</strong> {alojamiento.CantidadDormitorios}</li>
                        <li><strong>Baños:</strong> {alojamiento.CantidadBanios}</li>
                        <li><strong>Estado:</strong> {alojamiento.Estado}</li>
                        <li><strong>Tipo de alojamiento:</strong> {tipoAlojamiento}</li>
                    </ul>
                </div>
                <div className="map-column">
                    <div className="map-container">
                        <MapView lat={parseFloat(alojamiento.Latitud)} lng={parseFloat(alojamiento.Longitud)} />
                    </div>
                </div>
            </div>
            {/* Añadir la sección de servicios */}
            <div className="servicios-section">
                <h2>Servicios</h2>
                <div className="servicios-categories">
                    {serviciosAgrupados.map((grupo, index) => (
                        <div key={index} className="servicio-category">
                            <ul>
                                {grupo.map((servicio, idx) => (
                                    <li key={idx}>{servicio}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            {/* Añadir el componente del carrusel */}
            {imagenes.length > 0 && (
                <div className="carousel-container">
                    <ImageCarousel images={imagenes} />
                </div>
            )}
        </div>
    );
};

export default AlojamientoDetail;
