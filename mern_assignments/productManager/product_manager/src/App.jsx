/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import ProductDetail from './components/ProductDetail';
import Update from './components/Update';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/products" />
          <Route element={<ProductDetail />} path="/products/:id" />
          <Route element={<Update />} path="/products/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;