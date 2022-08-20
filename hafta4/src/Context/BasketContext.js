import { createContext, useState } from 'react';

const initialState = {
  products: [],
};

export const BasketContext = createContext(initialState);

const BasketProvider = ({ children }) => {
  const [baskets, setBasket] = useState([]);

  const values = { baskets, setBasket };

  return (
    <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
  );
};

export default BasketProvider;
