import { useEffect, useState } from 'react';
import getDataFromApi from '../../services/api';
import { Link } from 'react-router-dom';
import ShoppingCartButton from './ShoppingCartButton';

const ProductsList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //call to API to obtain products
    getDataFromApi()
      .then((data) => setProducts(data))
      .catch((error) => console.error('error fetching products'));
  }, []);

  return (
    <div className='productList_containter'>
      <h1 className='productList_container--title'>All the products</h1>
      <ul className='productList_list'>
        {products.map((product) => (
          <li key={product.id} className='productList_eachItem'>
            <Link to={`/product/${product.id}`} className='link'>
              <img
                src={product.image}
                alt={product.title}
                className='productList_eachItem--img'
              />
              <p className='productList_eachItem--title'>{product.title}</p>
            </Link>
            <p className='productList_eachItem--price'>
              {product.price} €{' '}
              <ShoppingCartButton
                product={product}
                onAddToCart={() => addToCart(product)}
              />
            </p>
            <p className='productList_eachItem--description'>
              {product.description}
            </p>
            <p className='productList_eachItem--category'>{product.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
