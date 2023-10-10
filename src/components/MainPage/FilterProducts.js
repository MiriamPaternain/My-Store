import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getDataFromApi from '../../services/api';
import NavBar from './Header/NavBar';

function FilterProducts() {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Llama a la función para obtener y limpiar los datos de la API
    getDataFromApi()
      .then((data) => {
        // Filtra los productos por categoría
        const filtered = data.filter(
          (product) => product.category === category
        );
        setFilteredProducts(filtered);
      })
      .catch((error) =>
        console.error('Error fetching and filtering products:', error)
      );
  }, [category]);

  return (
    <>
      <NavBar />
      <h2 className='filterProducts_title'>{category}</h2>
      <ul className='productList_list'>
        {filteredProducts.map((product) => (
          <li key={product.id} className='productList_eachItem'>
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
            <p className='productList_eachItem--category'>{product.category}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default FilterProducts;
