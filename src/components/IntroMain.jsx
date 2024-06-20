import React from 'react';
import './IntroMain.css';
import { useInView } from 'react-intersection-observer';

const IntroMain = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Mantiene la animación reactivable
    threshold: 0.2, // Se activa cuando el 20% del elemento es visible
  });

  return (
    <div ref={ref} className={`sobre-nosotros ${inView ? 'visible' : 'hidden'}`}>
      <div className="sobre-nosotros-contenido">
        <h1>
          Somos tu puerta de entrada a experiencias auténticas en la naturaleza. Aquí, el canto de los pájaros y el murmullo de los ríos reemplazan el bullicio de la ciudad.
        </h1>
        <p>
          Cada alojamiento tiene su propio encanto, pero todos te prometen una experiencia de relajación y conexión con la naturaleza.
        </p>
      </div>
    </div>
  );
};

export default IntroMain;
