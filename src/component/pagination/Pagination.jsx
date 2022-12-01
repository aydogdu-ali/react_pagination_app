import { useState, useEffect } from "react";

import ReactPaginate from "react-paginate";

// gelen datayı karşıladım
const Pagination = ({ image }) => {
  console.log(image);
  // pagination için stateleri tanımlıyoruz.
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  // bir sayfada kaç resim göstereceğimi belirttim.
  const itemsPerPage = 3;


// her sayfa tıklandığında  api den  dönecek veriyi güncelleriz 
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(image.slice(itemOffset, endOffset));
    console.log(image);
    setPageCount(Math.ceil(image.length / itemsPerPage));

     }, [itemOffset, itemsPerPage, image]);


     /*her tıklamada useEffect state güncellenir */
  const handlePageClick = (event) => {
    console.log(event.selected)
    const newOffset = (event.selected * itemsPerPage) % image.length;
    console.log(newOffset)
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className=" container d-flex  gap-2">
      
        {currentItems.map((image) => {
        /* Kullanıcı enter a basınca isteği getirme form kullanıldığı için default davranışı*/
          return (
            <div className="photo ">
              <div className="mt-3 text-center" key={image.id}>
                <h6 className="text-danger">
                 
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

        <div className=" sort">
          <ReactPaginate
            nextLabel="next "
            onPageChange={handlePageClick}
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
