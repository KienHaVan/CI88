import React, { useState } from 'react';
import Header from './components/Header';
import ProductItem from './components/ProductItem';
import ProductList from './components/ProductList';

const App = () => {
  const [count, setCount] = useState(0);
  const addMore = () => {
    setCount(count + 1);
  };
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
      className="App"
    >
      <Header count={count} />
      <ProductList addMore={addMore} />
    </div>
  );
};

export default App;
