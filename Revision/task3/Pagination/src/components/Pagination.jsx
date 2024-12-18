import React from 'react'

function Pagination({page,setPage}) {

  function handleNext() {
    if (page < 6) {
      setPage((prev) => prev + 1);
    } else {
      setPage(1);
    }
  }

  function handlePrev() {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  }
  return (
    <div className="flex justify-center my-4">
    <ul className="pagination cursor-pointer">
      <li className="page-item disable">
        <span
          className={`page-link ${page == 1 ? "disabled" : ""}`}
          onClick={handlePrev}
        >
          Previous
        </span>
      </li>
      <li className={`page-item ${page == 1 ? 'active':""}`} onClick={()=>setPage(1)} >
        <span className="page-link">1</span>
      </li>
      <li className={`page-item ${page == 2 ? 'active':""}`} onClick={()=>setPage(2)} >
        <span className="page-link">2</span>
      </li>
      <li className={`page-item ${page == 3 ? 'active':""}`} onClick={()=>setPage(3)} >
        <span className="page-link">3</span>
      </li>
      <li className={`page-item ${page == 4 ? 'active':""}`} onClick={()=>setPage(4)} >
        <span className="page-link">4</span>
      </li>
      <li className={`page-item ${page == 5 ? 'active':""}`} onClick={()=>setPage(5)} >
        <span className="page-link">5</span>
      </li>
      <li className={`page-item ${page == 6 ? 'active':""}`} onClick={()=>setPage(6)} >
        <span className="page-link">6</span>
      </li>
      <li className="page-item"  >
        <span className="page-link" onClick={handleNext}>
          Next
        </span>
      </li>
    </ul>
  </div>
  )
}

export default Pagination
