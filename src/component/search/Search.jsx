import React from "react";
import SearchIcon from "../searchicon/SearchIcon";
import { useState } from "react";
import Show from "../show/Show";

const Search = () => {
  const [search, setSearch] = useState("");
  const [image, setImage] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
    console.log(search);
  };
  
  console.log(search);

  const getPicture = () => {
    fetch(`https://pixabay.com/api/?key=31725179-e9547203f59a4095ebc0c6c08&q=${search}&image_type=photo`)
      .then((respon) => respon.json())
      .then((data) => setImage(data.hits));
    console.log(image);
  };

  const handleSubmit = (e)=> {
    e.preventDefault()
    getPicture()
    setSearch("")
  }



  return (
    <>
      <div className="container bg-success">
        <form className=" d-flex justify-content-center" onSubmit={handleSubmit}>
          <div className="d-flex  align-items-center  gap-1 w-50">
            <input
              type="search"
              className="form-control "
              onChange={handleSearch}
              value={search}
            />
            <SearchIcon />
          </div>
        </form>
      </div>
      <Show   image={image} />
    </>
  );
};

export default Search;
