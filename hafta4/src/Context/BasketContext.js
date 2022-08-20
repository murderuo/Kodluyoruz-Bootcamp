<<<<<<< HEAD
import { createContext,useState} from 'react'


const initialState ={
    products:[],

}

const BasketContext=createContext(initialState)

const BasketProvider=({children})=>{
    const [baskets,setBaskets]=useState([])

const values ={baskets,setBaskets}



return (               
    <BasketContext.Provider ></BasketContext.Provider>
)
}




export default BasketContext;

=======
import { createContext, useState } from 'react';
>>>>>>> c48d14386be5029ff5bd0a88cd89f7e5f14779bc

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
