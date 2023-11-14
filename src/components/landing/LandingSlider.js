import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import set1 from '../../img/coleccion-bodegones-viaje.jpg';
import set2 from '../../img/coleccion-elementos-esenciales-alto-angulo-viaje.jpg';
import set3 from '../../img/vista-superior-paquete-bodegon-viaje.jpg';
import set4 from '../../img/traje-hombre-casual.jpg';
import set5 from '../../img/maleta-repleta-parafernalia-viaje.jpg';

function LandingSlider() {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className='sliderContainer' style={{ height: '40vh' }}>
      <Slider {...settings}>
        <div>
          <img src={set1} alt='' className='sliderContainer_img' />
        </div>
        <div>
          <img src={set2} alt='' className='sliderContainer_img' />
        </div>
        <div>
          <img src={set3} alt='' className='sliderContainer_img' />
        </div>
        <div>
          <img src={set4} alt='' className='sliderContainer_img' />
        </div>
        <div>
          <img src={set5} alt='' className='sliderContainer_img' />
        </div>
      </Slider>
    </div>
  );
}

export default LandingSlider;
