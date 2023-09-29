import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ addMore }) => {
  return (
    <>
      <ProductItem addMore={addMore} />
    </>
  );
};

export default ProductList;
