import { useEffect, useState } from 'react';
import getDataFromApi from '../../services/api';

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //llamo a la función prar obtener datos desde la API
    getDataFromApi()
      .then((data) => setProducts(data))
      .catch((error) => console.error('error fetching products'));
  }, []); //array vacío para asegurar que el useEffect se ejecute solo una vez
  return (
    <div>
      <h1>Lista de productos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <p>{product.category}</p>
            <img src={product.image} alt={product.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
