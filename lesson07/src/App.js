import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import { ProductProvider } from './context/ProductContext';

const App = () => {
  return (
    <ProductProvider>
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Header />
        <ProductList />
      </div>
    </ProductProvider>
  );
};

export default App;
