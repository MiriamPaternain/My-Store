import set1 from '../../img/coleccion-bodegones-viaje.jpg';
import set2 from '../../img/conjunto-ropa-mujer-moda-camisa-jeans-bolso-look-moda-hipster-endecha-plana.jpg';
import set3 from '../../img/lugar-trabajo-negocios-accesorios-masculinos-modernos-portatil-blanco.jpg';
import set4 from '../../img/traje-hombre-casual.jpg';
import set5 from '../../img/conjunto-ropa-mujer-moda-camisa-jeans-bolso-look-moda-hipster-endecha-plana.jpg';

function LandingSlider() {
  return (
    <div className='sliderContainer'>
      <img src={set1} alt='' className='sliderContainer_img' />
      <img src={set2} alt='' className='sliderContainer_img' />
      <img src={set3} alt='' className='sliderContainer_img' />
      <img src={set4} alt='' className='sliderContainer_img' />
      <img src={set5} alt='' className='sliderContainer_img' />
    </div>
  );
}

export default LandingSlider;
