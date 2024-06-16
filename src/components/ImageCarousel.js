import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.css';

const ImageCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Activar flechas
    nextArrow: <SampleNextArrow />, // Componente para la flecha siguiente
    prevArrow: <SamplePrevArrow />, // Componente para la flecha anterior
    adaptiveHeight: true,
  };

  return (
    <div className="carousel-wrapper">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image.RutaArchivo} alt={`Imagen ${index}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Componente para la flecha siguiente
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-arrow-next`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

// Componente para la flecha anterior
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-arrow-prev`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

export default ImageCarousel;
