import React from 'react'
import { FaCheck } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";


function TodoItem({content,handleDelete,index,handleChecked,checked}) {
  return (
    <div className='flex items-center gap-20 mt-8 px-4 py-1 rounded-3xl bg-yellow-200'>
      <span className={`w-1/2 px-2 ${checked?'line-through':null }`}>{content}</span>
      <div className='w-1/2 flex gap-4 px-2 py-1'>
        <button className='p-1 bg-green-500 rounded-full text-white' onClick={()=>handleChecked(content)}><FaCheck/></button>
        <button className='p-1 bg-red-500 rounded-full text-white' onClick={()=>handleDelete(index)}><MdDeleteForever/></button> 
      </div>
    </div>
  )
}

export default TodoItem
