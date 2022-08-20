import { BasketContext } from '../Context/BasketContext';
import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Basket() {
  const { basket, setBasket } = useContext(BasketContext);
  const [baketItems, setBasketItems] = useState([]);

  console.log(basket);
  useEffect(() => {
    setBasketItems(basket);
  }, []);

  return (
    <>
      <h1>This is basketPage</h1>
      <Link to="/">Home</Link>

      <div>
        {baketItems?.map(item => {
          return <div key={item.id}>{item.title}</div>;
        })}
      </div>
    </>
  );
}

export default Basket;
