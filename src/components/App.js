import '../styles/App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsPage from './MainPage/ProductsPage';
import LandingPage from './landing/LandingPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/ProductsPage' element={<ProductsPage />} />
      </Routes>
    </>
  );
}

export default App;
