import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { BasketContext } from '../Context/BasketContext';

const Home = () => {
  const initialData = useContext(BasketContext);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data.map(item => (
        <div key={item.id}>
          <img src={item.image} />
          <h2>{item.title}</h2>
          <p className="description">{item.description}</p>
          <p className="price">Price: {item.price}$</p>
        </div>
      ))}
    </>
  );
};

export default Home;
