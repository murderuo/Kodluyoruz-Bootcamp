import { BasketContext } from '../Context/BasketContext';
import React, { useContext } from 'react';

function Basket() {
  const { basket, setBasket } = useContext(BasketContext);

  return (
    <>
      <h1>This is basketPage</h1>

      <div>
        {basket.map(item => {
          return (<div>{item.title}</div>);
        })}
      </div>
    </>
  );
}

export default Basket;
