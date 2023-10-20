import flechaDoble from '../../img/doble-derecha.png';
import { Link } from 'react-router-dom';

function AccessButton() {
  return (
    <Link to='/ProductsPage' className='link'>
      <button className='landingButton'>
        <img
          src={flechaDoble}
          alt='icono flecha doble hacia la derecha'
          className='landingButton_arrows'
        />
        <span className='landingButton_word'>Go to Store</span>
      </button>
    </Link>
  );
}

export default AccessButton;
