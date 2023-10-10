import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function NavBar({ menuOpen, handleClick }) {
  const [category, setCategory] = useState([]);

  //call to API to obtain categories
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((data) => setCategory(data))
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
              AllProducts
            </Link>
            {category.length > 0 && (
              <ul className='subcategories'>
                {category.map((category, index) => (
                  <li key={index}>
                    <Link
                      to={`/products/${category}`}
                      onClick={handleClick}
                      className='subcategories_link'>
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            )}

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
