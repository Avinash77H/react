import React from 'react'
import { ImSad2 } from "react-icons/im";


function TaskList({taskList}) {
console.log("taskList re-render")
  return (
    <>
    <div className='tasklist_container'>
      {taskList.length === 0 ?<div className='not_available'>No Tasks Available <ImSad2 className='sad_emoji'/></div>:taskList.map((item,index)=>(
        <div className='task_container' key={index}>
            <p>{item.taskName}</p>
            <div className='btn_container'>
                <div>{item.status === 'Pending'?<button className='pending_btn'>Pending</button>:<button className='completed_btn'>Completed</button>}</div>
                <button className='edit_btn'>Edit</button>
                <button className='delete_btn'>Delete</button>
            </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default TaskList
