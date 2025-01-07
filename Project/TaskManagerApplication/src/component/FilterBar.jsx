import React from 'react'
import { CiSearch } from "react-icons/ci";

function FilterBar() {
  return (
    <div className='filterbar_container'>

     <div className='search_bar'>
        <input type="text" placeholder='Search Task'/>
        <CiSearch className='search_icon' strokeWidth={1}/>
     </div>

     
        <select id="filterbar-select">
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
        </select>
    

    </div>
  )
}

export default FilterBar
