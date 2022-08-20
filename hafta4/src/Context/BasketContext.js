import { createContext, useState } from "react";

// const initialState = {
//   products: [],
// };

export const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  // const [baskets, setBasket] = useState(initialState) // intial state burada kullanılack
  const [basket, setBasket] = useState([]); // intial state burada kullanılack

  const values = { basket, setBasket };

  return (
    <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
  );
};

export default BasketProvider;
