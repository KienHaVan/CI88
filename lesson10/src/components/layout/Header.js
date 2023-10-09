import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import '../../App.css';

const Header = () => {
  const activeClass = (params) => {
    return params.isActive ? 'active-item button' : 'button';
  };
  const navigate = useNavigate();
  const [choice, setChoice] = useState('home');
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
        <button
          className="button"
          onClick={() => {
            setChoice('home');
            navigate('/');
          }}
          style={{ backgroundColor: choice === 'home' ? 'red' : 'unset' }}
        >
          Home
        </button>
        <button
          className="button"
          onClick={() => {
            setChoice('product');
            navigate('/product');
          }}
          style={{ backgroundColor: choice === 'product' ? 'red' : 'unset' }}
        >
          Product
        </button>
        <button
          className="button"
          onClick={() => {
            setChoice('cart');
            navigate('/cart');
          }}
          style={{ backgroundColor: choice === 'cart' ? 'red' : 'unset' }}
        >
          Cart
        </button>
        <button
          className="button"
          onClick={() => {
            setChoice('contact');
            navigate('/contact');
          }}
          style={{ backgroundColor: choice === 'contact' ? 'red' : 'unset' }}
        >
          Contact
        </button>
        {/* <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'activeClass' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/product" className={activeClass}>
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className={activeClass}>
              Products
            </NavLink>
          </li>
        </ul> */}
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
