import flechaDoble from '../../img/doble-derecha.png';
import { Link } from 'react-router-dom';

function AccessButton() {
  return (
    <Link to='/ProductsPage'>
      <button className='landingButton'>
        <img
          src={flechaDoble}
          alt='icono flecha doble hacia la derecha'
          className='landingButton_arrows'
        />
        <span className='landingButton_word'>Accede</span>
      </button>
    </Link>
  );
}

export default AccessButton;
