import { Link } from 'react-router-dom';

function NavBar({ menuOpen, handleClick }) {
  return (
    <>
      {menuOpen && (
        <div className='modal'>
          <div className='navBar'>
            <Link to='/' onClick={handleClick} className='link'>
              Landing Page
            </Link>
            <Link to='/ProductsPage' onClick={handleClick} className='link'>
              Products
            </Link>
            <Link to='/' onClick={handleClick} className='link'>
              Shopping cart
            </Link>
            <Link to='/contact' onClick={handleClick} className='link'>
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
