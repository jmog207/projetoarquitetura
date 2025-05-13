// src/componente/Carrossel.jsx
import React from 'react';
import Slider from 'react-slick';
import './Carrossel.css';

const Carrossel = () => {
  const settings = {
    infinite: true,  // Para fazer o carrossel rodar infinitamente
    speed: 500,      // Velocidade de transição
    slidesToShow: 1, // Quantos itens mostrar de uma vez
    slidesToScroll: 1, // Quantos itens vão passar de cada vez
    autoplay: true,  // Habilita o autoplay
    autoplaySpeed: 5000,  // Intervalo de 5 segundos (5000ms) entre cada slide
  };

  return (
    <div className="carrossel-container">
      <Slider {...settings}>
        <div>
          <img src="/src/imagens/produto11.jpg" alt="Produto 1" className="carrossel-image" />
        </div>
        <div>
          <img src="/src/imagens/produto22.png" alt="Produto 2" className="carrossel-image" />
        </div>
      </Slider>
    </div>
  );
};

export default Carrossel;
