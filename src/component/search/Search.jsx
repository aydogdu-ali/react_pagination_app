import React from "react";
import SearchIcon from "../searchicon/SearchIcon";
import { useState } from "react";
import Show from "../show/Show";


const Search = () => {
  /*input ve api den gelen datayı statelere aktarmak için state tanımlamaları*/
  const [search, setSearch] = useState("");
  const [image, setImage] = useState([]);
  const [text, setText] = useState(false)

  /*Kullanıcıdan  input ile veri alma ve bunu statete tutma fonksiyonu*/
  const handleSearch = (e) => {
     setSearch(e.target.value.toLowerCase()); 
      console.log(search);
  };
  
  console.log(search);

   /*API den veri çekme fonksiyonu*/
  const getPicture = () => {
    fetch(`https://pixabay.com/api/?key=31725179-e9547203f59a4095ebc0c6c08&q=${search}&image_type=photo`)
      .then((respon) => respon.json())
      .then((data) => setImage(data.hits));
      setText(true)
    console.log(image);
  };

  /* Kullanıcı enter a basınca isteği getirme*/
  const handleSubmit = (e)=> {
    if(e.target.value ===""){
      e.preventDefault()
      
    }
    e.preventDefault()
        getPicture()
      setSearch("") 
   
    
  }

  const handleClick = () =>{
    if(search==="") {
      alert("Please enter a something")
      
    }
    else {getPicture()
      setSearch("") }
    
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
              required
              placeholder="lütfen aramak istediğiniz resmi yazınız "
            />
            <div onClick={handleClick} role ="button">
              <SearchIcon   /> </div>
            
          </div>
        </form>
      </div>
      <p className="mt-2">{text &&  <h3>Sonuçlar</h3> } </p>
      
      <Show   image={image}  />
      
    </>
  );
};

export default Search;