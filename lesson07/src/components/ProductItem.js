import React from 'react';

const ProductItem = ({ name }) => {
  return (
    <div>
      <img src="" alt="" />
      <h2>Tên SP: {name}</h2>
      {/* <p>Gia san pham: {price}</p> */}
      {/* <p>SL: {count}</p> */}
      <button>Add more</button>
    </div>
  );
};

export default ProductItem;
