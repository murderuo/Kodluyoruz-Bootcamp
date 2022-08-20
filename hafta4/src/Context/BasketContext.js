import { createContext, useState } from 'react';

const initialState = {
  products: [],
};

export const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState(initialState);

  const values = { basket, setBasket };

  return (
    <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
  );
};

export default BasketProvider;
