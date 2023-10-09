import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import Cart from './components/Cart';
import Contact from './components/Contact';
import './App.css';
import Header from './components/layout/Header';
import NotFound from './components/NotFound';
import ProductDetail from './components/ProductDetail';

const App = () => {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
