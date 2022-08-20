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







