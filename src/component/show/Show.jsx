import React from "react";
import Pagination from "../pagination/Pagination";


// datayı props olarak karşıladım.
const Show = ({ image}) => {
  console.log(image)
 

 
  return (
   <>
        
    <Pagination  image = {image} />
    </>
   
  );
};

export default Show;