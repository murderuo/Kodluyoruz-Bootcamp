import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <></>;
};

export default Home;
