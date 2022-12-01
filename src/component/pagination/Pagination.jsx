import { useState, useEffect } from "react";

import ReactPaginate from "react-paginate";

const Pagination = ({ image }) => {
  console.log(image);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;



  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(image.slice(itemOffset, endOffset));
    console.log(image);
    setPageCount(Math.ceil(image.length / itemsPerPage));
   
  }, [itemOffset, itemsPerPage, image]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % image.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className=" container ">
      
        {currentItems.map((image) => {
         
          return (
            <div className="photo">
              <div className="mt-3 text-center" key={image.id}>
                <h6 className="text-danger">
                  {" "}
                  <span className="text-success">Categories List</span>:
                  {image.tags}
                </h6>
                <img
                  className="picture "
                  src={image.webformatURL}
                  alt="img1"
                  width="400px"
                  height="300px"
                />
              </div>
            </div>
          );
        })}

        <div className="d-flex align-items-center justify-content-center mt-3 px-1">
          <ReactPaginate
            nextLabel="next "
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="  previous"
            renderOnZeroPageCount={null}
            activeLinkClassName="active"
            containerClassName="pagination"
            previousLinkClassName="pagination-prev"
            nextLinkClassName="pagination-next"
          />
        </div>
      </div>
    </>
  );
};

export default Pagination;
