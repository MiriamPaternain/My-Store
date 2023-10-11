import '../styles/App.scss';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsPage from './MainPage/ProductsPage';
import LandingPage from './landing/LandingPage';
import getDataFromApi from '../services/api';
import ls from '../services/localStorage';
import DetailProduct from './MainPage/DetailProduct';
import FilterProducts from './MainPage/FilterProducts';
import ShoppingCart from './MainPage/ShoppingCart';
import ShoppingCartButton from './MainPage/ShoppingCartButton';

function App() {
  const [ProductsList, setProductsList] = useState(ls.get('products', []));

  const [boughtItems, setBoughtItems] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('products') === null) {
      getDataFromApi().then((cleanData) => {
        setProductsList(cleanData);
        ls.set('products', cleanData);
      });
    }
  }, []);

  const handleAddToCart = (product) => {
    setBoughtItems([...boughtItems, product]);
  };

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/ProductsPage' element={<ProductsPage />} />
        <Route
          path='/product/:id'
          element={<DetailProduct products={ProductsList} />}
        />
        <Route
          path='/products/category/:category'
          element={<FilterProducts />}
        />
        <Route
          path='/cart'
          element={<ShoppingCart boughtItems={boughtItems} />}
        />
      </Routes>
    </>
  );
}

export default App;
