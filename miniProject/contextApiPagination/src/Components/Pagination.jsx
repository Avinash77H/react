import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

function Pagination() {
  const {page,handlePageChange,totalPages} = useContext(AppContext)
  return (
    <div>
      {page > 1 && <div>
        <button onClick={()=>handlePageChange(page-1)}>Previous</button>
      </div>}

      {page < totalPages && 
        <button onClick={()=>handlePageChange(page+1)}>Next</button>
      }

      <p>
        page {page} of {totalPages}
      </p>

    </div>
  )
}

export default Pagination
