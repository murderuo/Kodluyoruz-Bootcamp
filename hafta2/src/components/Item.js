import { useState, useEffect } from 'react';
import axios from 'axios';

function Film({ url }) {
  // console.log(url);
  const [title, setTitle] = useState('');

  const fetchData = async url => {
    const response = await axios.get(url);
    const results = await response.data;
    return results;
  };

  useEffect(() => {
    const getFilms = async url => {
      const fetchFilms = await fetchData(url);
      setTitle(fetchFilms.title);
    };
    getFilms(url);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {!title && <h4>Loading</h4>}
      <label>{title},</label>
    </>
  );
}

export default Film;
