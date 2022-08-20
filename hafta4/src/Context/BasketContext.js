import { createContext, useState } from 'react';

const initialState = {
  products: [],
};

const BasketContext = createContext(initialState);

const BasketProvider = ({ children }) => {
  const [baskets, setBaskets] = useState([]);

  const values = { baskets, setBaskets };

  return <BasketContext.Provider value={values}></BasketContext.Provider>;
};

export default BasketProvider;
