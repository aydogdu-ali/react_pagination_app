import React from "react";

const Show = ({ image }) => {


 
  return (
    <div className=" container justify-content-center align-item-center mt-5 ">
      {image.map((item) => {
        return (
          <div key={item.id}>
            <h6 className="text-danger"> <span className="text-success">Categories List</span>:{item.tags}</h6>
            <img  className = "" src={item.webformatURL} alt="img1" width="400px" />
          </div>
        );
      })}
    </div>
  );
};

export default Show;
