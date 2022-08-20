import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BasketContext } from "../Context/BasketContext";

function Header() {
  const { basket, setBasket } = useContext(BasketContext);

  return (
    <div className="header">
      <div className="home-link">Home</div>
      <div className="basket-link">
        <Link to="/basket">Basket {basket.length}</Link>
      </div>
    </div>
  );
}

export default Header;
