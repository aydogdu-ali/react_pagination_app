
import { useState, useEffect  } from 'react';

import ReactPaginate from 'react-paginate';

const Pagination = ({image}) => {
  console.log(image)
   const [currentItems, setCurrentItems] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 4
  
    useEffect(()=>{
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(image.slice(itemOffset,endOffset));
      console.log(image)
      setPageCount(Math.ceil(image.length/itemsPerPage))

    },[itemOffset,itemsPerPage,image])
    
      
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % image.length;
            setItemOffset(newOffset);
    };
  
    return (
      <>
      <h3>Sonuçlar</h3>
              <div className="photo">
          {currentItems.map(image =>{
            return(
              <div key={image.id}>
              <h6 className="text-danger"> <span className="text-success">Categories List</span>:{image.tags}</h6>
              <img  className = "" src={image.webformatURL} alt="img1" width="400px" />
            </div>
            )
          })}

       </div>

        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
        </>
    );
  }



export default Pagination


