import React from 'react';

const ProductItem = ({ addMore }) => {
  return (
    <div>
      <button onClick={addMore}>Add more product</button>
    </div>
  );
};

export default ProductItem;
