import React from 'react';
import ProductItem from './ProductItem';

const list = [
  {
    id: 1,
    name: 'Adidas',
  },
  {
    id: 2,
    name: 'Adidas2',
  },
  {
    id: 3,
    name: 'Adidas3',
  },
  {
    id: 4,
    name: 'Adidas4',
  },
];
const ProductList = () => {
  return (
    <div>
      {/* <ProductItem name="adidas" />
      <ProductItem name="adidas1" />
      <ProductItem name="adidas2" />
      <ProductItem name="adidas3" /> */}
      {list.map((item) => {
        return <ProductItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default ProductList;
