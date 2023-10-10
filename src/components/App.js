import '../styles/App.scss';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsPage from './MainPage/ProductsPage';
import LandingPage from './landing/LandingPage';
import getDataFromApi from '../services/api';
import ls from '../services/localStorage';
import DetailProduct from './MainPage/DetailProduct';

function App() {
  const [ProductsList, setProductsList] = useState(ls.get('products', []));

  useEffect(() => {
    if (localStorage.getItem('products') === null) {
      getDataFromApi().then((cleanData) => {
        setProductsList(cleanData);
        ls.set('products', cleanData);
      });
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/ProductsPage' element={<ProductsPage />} />
        <Route
          path='/product/:id'
          element={<DetailProduct products={ProductsList} />}
        />
      </Routes>
    </>
  );
}

export default App;
