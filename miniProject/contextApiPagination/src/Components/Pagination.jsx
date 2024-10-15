import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

function Pagination() {
  const {page,handlePageChange,totalPages} = useContext(AppContext)
  return (
    <div className='flex justify-between px-20 my-4'>
     <div className='flex gap-2'>
     {page > 1 && <div>
        <button onClick={()=>handlePageChange(page-1)} className='border border-gray-400 px-2 py-1'>Previous</button>
      </div>}

      {page < totalPages && 
        <button onClick={()=>handlePageChange(page+1)} className='border border-gray-400 px-2 py-1'>Next</button>
      }
     </div>

      <p className='font-semibold'>
        page {page} of {totalPages}
      </p>

    </div>
  )
}

export default Pagination
