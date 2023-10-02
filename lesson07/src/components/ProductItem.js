import React, { useContext } from 'react';
import { ProductContext, useProduct } from '../context/ProductContext';

const ProductItem = ({ item }) => {
  const { cartList, setCartList } = useProduct();
  return (
    <div>
      <img src="" alt="" />
      <h2>Tên SP: {item.name}</h2>
      {/* <p>Gia san pham: {price}</p> */}
      {/* <p>SL: {count}</p> */}
      <button
        onClick={() => {
          let newCartList = [...cartList];
          const isDuplicate = newCartList.some(
            (cartItem) => cartItem.id === item.id
          );
          if (isDuplicate) {
            newCartList = newCartList.filter((one) => one.id !== item.id);
          } else {
            newCartList.push(item);
          }
          setCartList(newCartList);
        }}
      >
        Add more
      </button>
    </div>
  );
};

export default ProductItem;
