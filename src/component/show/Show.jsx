import React from "react";
import Pagination from "../pagination/Pagination";


// datayı props olarak karşıladım.
const Show = ({ image}) => {
  console.log(image)
  
  return (
   <>
       <div className="container">
       <Pagination   image = {image} />
         </div> 
    
    </>
   
  );
};

export default Show;