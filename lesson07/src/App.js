import React, { createContext } from 'react';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';

const App = () => {
  // const [first, setFirst] = useState()
  const productCount = 0;
  const productContext = createContext();
  return (
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
  );
};

export default App;
