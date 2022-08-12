import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Film from './Item';

function MainPage() {

  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [optionValue, setOptionValue] = useState('all');
  const [pagination, setPagination] = useState({
    page: 1,
    nextPage: true,
    prevPage: true,
  });
//genel olarak fetch yapan bir fonksiyon tanımladık
  const fetchData = async url => {
    const response = await axios.get(url);
    const results = await response.data;
    return results;
  };

  useEffect(() => {
    //sayfa açıldığında paginationı kontrol eden bir fonksiyon tanımladık
    const fetchURL = `https://swapi.dev/api/people/?page=${pagination.page}`;
    const getData = async () => {
      const fetchMainPage = await fetchData(fetchURL);
      // console.log(fetchMainPage.results);
      setData(fetchMainPage.results);
      setPagination({
        ...pagination,
        prevPage: fetchMainPage.previous === null ? true : false,
        nextPage: fetchMainPage.next === null ? true : false,
      });
      // console.log(pagination);
    };
    getData();
    // eslint-disable-next-line
  }, [pagination.page]);

  const handleChange = e => {
    //inputa girilen değeri set eden bir fonksiyon tanımladık
    // console.log(e.target.value);
    setInputValue(e.target.value);
    // const inputValue = e.target.value;
    // const filteredValues = data.filter(people => {
    //   if (people.name.toLowerCase().includes(inputValue.toLowerCase())) {
    //     return people;
    //   }
    // });
    // setData(filteredValues);
  };

  const handleOptionChange = e => {
    //selecta girilen değeri set eden bir fonksiyon tanımladık
    // console.log(e.target.value);
    setOptionValue(e.target.value);
    // const optionValue = e.target.value;
    // const filteredValuesByOption = data.filter(people => {
    //   if (people.gender === optionValue) {
    //     return people;
    //   } else if (optionValue === 'all') {
    //     return people;
    //   }
    // });
    // setData(filteredValuesByOption);
  };

  const handleDelete = ndx => {
    // satır sonu silme işlemi için bir fonksiyon tanımladık
    //  const val= filteredValues.splice(ndx, 1);
    //  filteredValues.splice(ndx, 1);
    //  console.log(val);
    //  console.log(filteredValues);
    // setData(filteredValues);

    // eslint-disable-next-line
    const deleteItems = filteredValues.filter((people, pplindex) => {
      if (ndx !== pplindex) {
        return people;
      }
    });
    setData(deleteItems);
  };
  // eslint-disable-next-line
  const filteredValues = data.filter(people => {
    //inputa göre filtreleme
    if (people.name.toLowerCase().includes(inputValue.toLowerCase())) {
      return people;
    }
  });
  // eslint-disable-next-line
  const filteredValuesByOption = filteredValues.filter(people => {
    //optiona göre filtreleme
    if (people.gender === optionValue) {
      return people;
    } else if (optionValue === 'all') {
      return people;
    }
  });

  return (
    <>
      {data.length === 0 ? (
        //data yoksa bu kısımı render eder
        <div className="loading-message">
          <img
            src="https://c.tenor.com/wqwvvVfJVrIAAAAC/staring-loading.gif"
            alt="loading"
          />
        </div>
      ) : (
        <>
        {/* //data var ise bu kısımı render eder */}
          <div className="search-bar">
            <label>Search</label>
            <input
              type="text"
              onChange={e => handleChange(e)}
              value={inputValue}
            />
          </div>
          <div className="options-bar">
            <label>Choose a gender:</label>
            <select
              id="cars"
              value={optionValue}
              onChange={e => handleOptionChange(e)}
            >
              <option value="all">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="n/a">N/A</option>
            </select>
          </div>
          <div className="pagination">
          {/* pagination */}
            <button
              disabled={pagination.prevPage}
              onClick={() =>
                setPagination(prevstate => ({
                  ...prevstate,
                  page: (prevstate.page -= 1),
                }))
              }
            >
              Previus Page
            </button>
            <span>{pagination.page}</span>
            <button
              disabled={pagination.nextPage}
              onClick={() =>
                // setPagination({ ...pagination, page: (pagination.page += 1) })
                setPagination(prevstate => ({
                  ...prevstate,
                  page: (prevstate.page += 1),
                }))
              }
            >
              Next Page
            </button>
          </div>
          {filteredValuesByOption.length === 0 ? (
            <div className="search-message">
              <img src="https://i.gifer.com/2Abs.gif" alt="" />
            </div>
          ) : (
            <div >
              <div className="item-header" >
                <div className="hdr">Name</div>
                <div className="hdr">Height</div>
                <div className="hdr">Gender</div>
                <div className="hdr">Films</div>
                <div className="hdr">Actions</div>
              </div>
              <div>
              {/* filtrelenen datayı map liyoruz */}
                {filteredValuesByOption.map((item, index) => (
                  <div key={index} className="item-container"  >
                    <div className="item-name">{item.name}</div>
                    <div className="item-height">{item.height}</div>
                    <div className="item-gender">
                      {item.gender.toUpperCase()}
                    </div>
                    <div className="item-films">
                      {item.films.map((url, index) => (
                        <Film key={index} url={url} />
                      ))}
                    </div>
                    <div className="item-row-actions">
                      <button onClick={() => handleDelete(index)}>
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default MainPage;
