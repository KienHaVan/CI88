import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const value = {
    cartList,
    setCartList,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const AppData = () => {
  return useContext(AppContext);
};
