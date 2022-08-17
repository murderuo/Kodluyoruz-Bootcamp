import { useState, useEffect, useMemo, memo } from 'react';
import axios from 'axios';

// function Film() {   //useMemo kullanımını görmek için herhangi bir prop almadık0
function Film({ url }) {
  // useMemo için prop alsaydık sabitlemek için yaptım, prop almadıysak gerek yok
  //ya da prop değerimiz olmadığı için sabit bi url kullandım, sürekli bu url e fetch atacak

  // const url="https://swapi.dev/api/films/6/"  //prop alınmadığında aktif edilmesi lazım

  const [title, setTitle] = useState('');

  const fetchData = async url => {
    const response = await axios.get(url);
    const results = await response.data;
    return results;
  };

  // const memorizedResults = useMemo(() => fetchData(url), [url]);   //url değişmediği için memorize ettik

  useEffect(() => {
    const getFilms = async url => {
      const fetchFilms = await fetchData(url);
      // const fetchFilms = await memorizedResults; // useMemo dan gelen result burada kullanılacak
      setTitle(fetchFilms.title);
    };
    getFilms(url);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {!title && <label>Loading</label>}
      <label>{title},</label>
    </>
  );
}

export default memo(Film);
