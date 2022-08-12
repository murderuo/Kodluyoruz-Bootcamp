//elements
const input = document.querySelector("#searchinput");
const albumdiv = document.querySelector("#albumsdiv");
// const findbutton = document.querySelector('#findbutton');
const selectsize = document.querySelector("#selectsize");

//global variables
let albums = [];
// let inputvalue = '';

//data fetching on load
const fetchData = async (size = 8) => {
  const respond = await axios.get(
    `https://jsonplaceholder.typicode.com/photos?_limit=${size}`
  );
  const albumsData = await respond.data;
  albums = albumsData;
  return albums; // console.log(albums);
};

//Dom content loaded
document.addEventListener("DOMContentLoaded", async function () {
  //dom is fully loaded, but maybe waiting on images & css files
  const fetchedAlbums = await fetchData();
  // console.log(fetchedAlbums);
  createAlbums(fetchedAlbums);
});

//functions ----------------------------------
const inputChangeHandler = (e) => {
  console.log(e.target.value);
  inputvalue = e.target.value;
  finditem(inputvalue);
};

const finditem = (inputvalue = "") => {
  const filteredAlbums = albums.filter((item) => {
    if (item.title.includes(inputvalue)) {
      return item;
    }
  });
  createAlbums(filteredAlbums);
};

const setpagesize = async (e) => {
  console.log(e.target.value);
  // console.log(e);
  const settedpage = await fetchData(e.target.value);
  // console.log(settedpage);
  createAlbums(settedpage);
};

const createAlbums = (data = []) => {
  albumdiv.innerHTML = "";
  data.forEach((item, index) => {
    return (albumdiv.innerHTML += `<div class="album"><div class="image"><img src="${item.thumbnailUrl}"/></div><div class="title">${item.title}</div><div class='deletebutton'><button class='del'>X</button></div></div>`);
  });
};

const deleteitem = (e) => {
  // console.log(e.target.parentElement.parentElement);
  e.target.className === "del"
    ? e.target.parentElement.parentElement.remove()
    : console.log("no");
};

//event listeners
function eventListener() {
  input.addEventListener("input", inputChangeHandler);
  // findbutton.addEventListener("click", finditem);
  // deletebtn.addEventListener('click', deleteitem);
  selectsize.addEventListener("change", setpagesize);
  albumdiv.addEventListener("click", deleteitem);
}

eventListener();
