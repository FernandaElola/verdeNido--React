import React, { useEffect } from 'react';
import './Banner.css';
import { useInView } from 'react-intersection-observer';


export const Banner = () => {
    const { ref, inView } = useInView({
      triggerOnce: true, // Animación ocurre solo una vez
      threshold: 0.2, // Dispara la animación cuando el 20% del componente está visible
    });
  
    useEffect(() => {
      if (inView) {
        // Agregar una clase para iniciar la animación cuando el banner está visible
        const banner = ref.current;
        if (banner) {
          banner.classList.add('visible');
        }
      }
    }, [inView, ref]);
  
    return (
      <div ref={ref} className={`banner ${inView ? 'visible' : ''}`}>
        <div className="container-banner">
          <img src="/img/titulo.png" alt="Nombre de la Empresa" className="title" />
          <img src="/img/BANNER.jpg" alt="Imagen del banner" className="banner-img" />
        </div>
      </div>
    );
  };
  