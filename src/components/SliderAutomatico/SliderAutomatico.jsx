import React, { useState, useEffect } from 'react';
import './SliderAutomatico.css'; 

const SliderAutomatico = ({ imagenes }) => {
  const [indiceActual, setIndiceActual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceActual((indicePrevio) =>
        indicePrevio === imagenes.length - 1 ? 0 : indicePrevio + 1
      );
    }, 5000);

    return () => clearInterval(intervalo);
  }, [imagenes.length]);

  if (!imagenes || imagenes.length === 0) return null;

  return (
    <div className="slider-contenedor">
      {imagenes.map((imagen, index) => (
        <div
          key={index}
          className={`slide ${index === indiceActual ? 'activo' : ''}`}
        >
          {index === indiceActual && (
            <img src={imagen.url} alt={imagen.alt} className="slide-imagen" />
          )}
        </div>
      ))}
    </div>
  );
};

export default SliderAutomatico;
