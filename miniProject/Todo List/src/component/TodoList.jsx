import React from "react";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function TodoList({todo,index,checked,deleteMethod,checkedMethod}) {
  const handleDelete = ()=>{
    deleteMethod(index)
  }

  return (
    <li
    
      className="flex gap-20 border border-gray-500 px-4 py-1 rounded-full items-center mt-4"
    >
      <span className={`w-1/2 ${checked?'line-through':null}`}>{todo}</span>
      <div className="flex gap-4">
        <button className="bg-green-500 rounded-full p-1 text-white">
          <FaCheck onClick={()=>checkedMethod(todo)}/>
        </button>
        <button
          className="bg-red-500 rounded-full p-1 text-white"
          onClick={() => handleDelete(index)}
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
}

export default TodoList;
