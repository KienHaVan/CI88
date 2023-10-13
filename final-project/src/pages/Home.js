import React from 'react';
import { AppData } from '../context/app-context';

const Home = () => {
  const { cartList } = AppData();
  console.log('🚀 ~ file: Home.js:6 ~ Home ~ cartList:', cartList);
  return <div>Home</div>;
};

export default Home;
