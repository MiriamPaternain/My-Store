import flechaDoble from '../../img/doble-derecha.png';
import { Link } from 'react-router-dom';

function AccessButton() {
  return (
    <Link to='/ProductsPage' className='link'>
      <button className='landingButton'>Start</button>
    </Link>
  );
}

export default AccessButton;
