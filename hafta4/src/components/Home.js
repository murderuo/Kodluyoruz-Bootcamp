import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { BasketContext } from '../Context/BasketContext';
import Header from './Header';

const Home = () => {
  const { basket, setBasket } = useContext(BasketContext);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      //console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBasketAddButton=(item)=>setBasket([...basket.products, item]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        {data.map(item => (
          <div className="card-container" key={item.id}>
            <img src={item.image} />
            <h2>{item.title}</h2>
            <p className="description">{item.description}</p>
            <p className="price">Price: {item.price}$</p>
            {/* <center  className="basket" style={{ cursor: 'pointer' }}>
              <img src="https://img.icons8.com/external-others-pike-picture/50/000000/external-basket-webshop-internet-store-others-pike-picture-2.png" />
            </center> */}
            <button onClick={(item)=>handleBasketAddButton(item)}>Add to Basket</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
