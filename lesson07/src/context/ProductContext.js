import { createContext, useContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);
  const [cartList, setCartList] = useState([]);
  const value = {
    count,
    setCount,
    likeCount,
    setLikeCount,
    cartList,
    setCartList,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(ProductContext);
};
