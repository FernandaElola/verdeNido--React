import AlojamientoCard from './AlojamientoCard';
import './AlojamientoList.css';

const alojamientos = [
  {
    id: 1,
    titulo: "Casa de Huéspedes",
    imagen: "./img/Alojamientos_IMG/CASA1.jpg",
    descripcion: "Esta acogedora casa de huéspedes ofrece un refugio tranquilo para hasta seis personas. Con tres habitaciones amplias, una cocina totalmente equipada y una terraza con vistas panorámicas al exuberante jardín, es el lugar perfecto para relajarse y disfrutar de la naturaleza.",
    ubicacion: "-3.4653,-62.2159",
    precioPorDia: "$100",
    dormitorios: 3,
    banos: 2,
    estado: "Disponible",
  },
  {
    id: 2,
    titulo: "Tienda de La Santa Paz",
    imagen: "./img/Alojamientos_IMG/CASA2.jpg",
    descripcion: "Sumérgete en la tranquilidad de este alojamiento único. Con capacidad para cinco personas, dos habitaciones cómodas y una ubicación privilegiada cerca de un hermoso lago, esta tienda es ideal para escapadas en familia o con amigos. Disfruta de la terraza al aire libre con comedor y barbacoa para una experiencia al aire libre inolvidable.",
    ubicacion: "-3.4653,-62.2159",
    precioPorDia: "$100",
    dormitorios: 3,
    banos: 2,
    estado: "Disponible",
  },
  {
    id: 3,
    titulo: "Tienda de Tiempo Libre",
    imagen: "./img/Alojamientos_IMG/CASA3.jpg",
    descripcion: "Experimenta la aventura en esta encantadora tienda de campaña. Con capacidad para hasta cinco personas, dos acogedoras habitaciones y una ubicación cerca de un animado parque infantil, es el lugar perfecto para unas vacaciones familiares llenas de diversión. Disfruta de la terraza con comedor y barbacoa después de un día emocionante.",
    ubicacion: "-3.4653,-62.2159",
    precioPorDia: "$100",
    dormitorios: 3,
    banos: 2,
    estado: "Disponible",
  },
  {
    id: 4,
    titulo: "Casa de Huéspedes",
    imagen: "./img/Alojamientos_IMG/CASA4.jpg",
    descripcion: "Sumérgete en la serenidad de esta hermosa casa frente al lago. Con capacidad para seis personas, tres habitaciones elegantes y una cocina totalmente equipada, este alojamiento ofrece comodidad y estilo. Disfruta de la vista panorámica desde la terraza con vistas al agua y relájate en el jardín tranquilo.",
    ubicacion: "-3.4653,-62.2159",
    precioPorDia: "$100",
    dormitorios: 3,
    banos: 2,
    estado: "Disponible",
  },
  {
    id: 5,
    titulo: "Tienda de La Santa Paz",
    imagen: "./img/Alojamientos_IMG/CASA5.jpg",
    descripcion: "Escapa al corazón del bosque en este pintoresco bungalow. Con capacidad para hasta cuatro personas, dos habitaciones acogedoras y una ubicación rodeada de naturaleza, este alojamiento ofrece una experiencia única en la selva. Disfruta de la terraza privada con vistas al bosque y relájate junto a la chimenea después de un día de exploración.",
    ubicacion: "-3.4653,-62.2159",
    precioPorDia: "$100",
    dormitorios: 3,
    banos: 2,
    estado: "Disponible",
  },
  {
    id: 6,
    titulo: "Tienda de Tiempo Libre",
    imagen: "./img/Alojamientos_IMG/CASA6.jpg",
    descripcion: "Adéntrate en un mundo de magia y tranquilidad en este encantador refugio en medio del bosque. Con capacidad para hasta cuatro personas, dos acogedoras habitaciones y una ubicación rodeada de árboles centenarios, este alojamiento es perfecto para quienes buscan paz y conexión con la naturaleza. Disfruta de las noches estrelladas desde la terraza privada y déjate llevar por el susurro del viento entre las hojas.",
    ubicacion: "-3.4653,-62.2159",
    precioPorDia: "$100",
    dormitorios: 3,
    banos: 2,
    estado: "Disponible",
  },
];

const AlojamientoList = () => {
  return (
    <div className="alojamiento-list">
      {alojamientos.map(alojamiento => (
        <AlojamientoCard key={alojamiento.id} alojamiento={alojamiento} />
      ))}
    </div>
  );
};

export default AlojamientoList;
