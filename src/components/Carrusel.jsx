import Carousel from "react-bootstrap/Carousel";
import foto1 from "";
import foto2 from "";
import foto3 from "";
import "../css/Carrusel.css";

import React from "react";

const Carrusel = () => {
  return (
    <Carousel className="Carrusel">
      <Carousel.Item className="ItemCarrusel">
        <img className="ImagenCarrusel" src={foto1} />
      </Carousel.Item>
      <Carousel.Item className="ItemCarrusel">
        <img className="ImagenCarrusel" src={foto2} />
      </Carousel.Item>
      <Carousel.Item className="ItemCarrusel">
        <img className="ImagenCarrusel" src={foto3} />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrusel;
