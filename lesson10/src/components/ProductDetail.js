import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();

  return <div>ProductDetail</div>;
};

export default ProductDetail;
