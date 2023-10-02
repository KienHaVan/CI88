import React, { useContext } from 'react';
import { ProductContext, useProduct } from '../context/ProductContext';

const IconCart = () => {
  // const { count } = useContext(ProductContext);
  const { cartList } = useProduct();
  console.log('🚀 ~ file: IconCart.js:7 ~ IconCart ~ cartList:', cartList);
  return <div>So Luong San Pham: {cartList.length}</div>;
};

export default IconCart;
