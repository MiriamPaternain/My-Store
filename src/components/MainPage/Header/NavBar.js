<<<<<<< HEAD
=======
import { useState, useEffect } from 'react';
>>>>>>> main
import { Link } from 'react-router-dom';

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
<<<<<<< HEAD
              Products
            </Link>
            <Link to='/' onClick={handleClick} className='link'>
=======
              AllProducts
            </Link>
            {categories.length > 0 && (
              <ul className='subcategories'>
                {categories.map((categoryItem, index) => (
                  <li key={index}>
                    {/* Cada categoría tiene su propia ruta */}
                    <Link
                      to={`/products/category/${categoryItem}`}
                      onClick={handleClick}
                      className='subcategories_link'>
                      {categoryItem}
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            <Link to='/cart' onClick={handleClick} className='link'>
>>>>>>> main
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
