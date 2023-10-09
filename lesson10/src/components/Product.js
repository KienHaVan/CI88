import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Product = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('type'));
  return <div>Product</div>;
};

export default Product;
