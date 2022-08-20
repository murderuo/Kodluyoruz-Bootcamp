import { BasketContext } from "../Context/BasketContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

function Basket() {
  const { basket, setBasket } = useContext(BasketContext);

  return (
    <>
      <h1>This is basketPage</h1>
      <Link to="/">Go to Home</Link>

      <div>
        {basket.map((item) => {
          return <div>{item.title}</div>;
        })}
      </div>
    </>
  );
}

export default Basket;
