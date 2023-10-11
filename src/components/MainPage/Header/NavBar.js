import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
function NavBar({ menuOpen, handleClick }) {
  const [categories, setCategories] = useState([]);

  // Llamada a la API para obtener categorías
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

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
