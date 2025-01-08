import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";

function FilterBar({setFilterData}) {
  const[searchText,setSearchText] = useState("");
  const[selectValue,setSelectValue] = useState('All');
  const[filteredEditMode,setFilteredEditMode] = useState(false)

  function handleSearchData(){
    setFilterData({searchText,selectValue,filteredEditMode});
    setSearchText("")
  }

  return (
    <div className='filterbar_container'>

     <div className='search_bar'>
        <input type="text" placeholder='Search Task' onChange={(e)=>setSearchText(e.target.value)} value={searchText}/>
        <CiSearch className='search_icon' strokeWidth={1} onClick={handleSearchData}/>
     </div>

     
        <select id="filterbar-select" onChange={(e)=>setSelectValue(e.target.value)} value={selectValue}>
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
        </select>
    

    </div>
  )
}

export default FilterBar
