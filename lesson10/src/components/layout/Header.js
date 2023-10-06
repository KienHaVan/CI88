import React from 'react';
import { Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          marginTop: '20px',
        }}
      >
        <button className="button">Home</button>
        <button className="button">Product</button>
        <button className="button">Cart</button>
        <button className="button">Contact</button>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
