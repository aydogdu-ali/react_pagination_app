import React from "react";
import Pagination from "../pagination/Pagination";


// datayı props olarak karşıladım.
const Show = ({ image}) => {
  console.log(image)
  
  return (
   <>
       <div className="container">
        {/*gelen datayı pagination componentine gönderdim.*/}
       <Pagination image = {image} />
         </div> 
    
    </>
   
  );
};

export default Show;