import { useEffect, useState } from 'react';
import getDataFromApi from '../../services/api';
import { Link } from 'react-router-dom';

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //llamo a la función prar obtener datos desde la API
    getDataFromApi()
      .then((data) => setProducts(data))
      .catch((error) => console.error('error fetching products'));
  }, []); //array vacío para asegurar que el useEffect se ejecute solo una vez
  return (
    <div className='productList_containter'>
      <h1 className='productList_container--title'>All the products</h1>
      <ul className='productList_list'>
        {products.map((product) => (
          <li key={product.id} className='productList_eachItem'>
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className='productList_eachItem--img'
              />
              <p className='productList_eachItem--title'>{product.title}</p>
              <p className='productList_eachItem--price'>{product.price} €</p>
              <p className='productList_eachItem--description'>
                {product.description}
              </p>
              <p className='productList_eachItem--category'>
                {product.category}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
