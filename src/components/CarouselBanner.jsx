import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselBanner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mla-s2-p.mlstatic.com/D_NQ_NP_688990-MLA48455963003_122021-OO.jpg"
          alt="Entrena en casa - Envios gratis a todo el pais a partir de $3.500"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mla-s1-p.mlstatic.com/D_NQ_NP_900704-MLA48495715001_122021-OO.jpg"
          alt="Hace tu pedido - Retira GRATIS en nuestros locales de Nuñez y Congreso"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselBanner;
