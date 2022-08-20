import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BasketContext } from '../Context/BasketContext';

function Header() {
  const { basket } = useContext(BasketContext);
  // console.log(basket);

  return (
    <div className="header">
      <div className="home-link">Home</div>
      <div className="basket-link">
        <Link to="/basket">Basket</Link>({basket.length})
      </div>
    </div>
  );
}

export default Header;
