import React from 'react';

const ProductItem = ({ name, price, count }) => {
  return (
    <div>
      <img src="" alt="" />
      <h2>Tên SP: {name}</h2>
      <p>Gia san pham: {price}</p>
      <p>SL: {count}</p>
    </div>
  );
};

export default ProductItem;
