import React from 'react';
import { Link } from 'react-router-dom';
import Header from './layout/Header';

const Home = () => {
  return (
    <div>
      <Link to="/product">
        <button
          style={{
            width: '200px',
            height: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: '1px',
            backgroundColor: 'green',
          }}
        >
          Move to product
        </button>
      </Link>
    </div>
  );
};

export default Home;
