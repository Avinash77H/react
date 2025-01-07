import React from 'react'
import { ImSad2 } from "react-icons/im";

function TaskList() {
    const taskList = [
        {
            id:1,
            task:'task 1',
            description:1,
            status:'pending'
        },
        {
            id:2,
            task:'task 2',
            description:2,
            status:'completed'
        },
        {
            id:3,
            task:'task 3',
            description:3,
            status:'pending'
        }
    ] 
    // const taskList = [];
  return (
    <div className='tasklist_container'>
      {taskList.length === 0 ?<div className='not_available'>No Tasks Available <ImSad2 className='sad_emoji'/></div>:taskList.map((item)=>(
        <div className='task_container' key={item.id}>
            <p>{item.task}</p>
            <div className='btn_container'>
                <div>{item.status === 'pending'?<button className='pending_btn'>Pending</button>:<button className='completed_btn'>Completed</button>}</div>
                <button className='edit_btn'>Edit</button>
                <button className='delete_btn'>Delete</button>
            </div>
        </div>
      ))}
    </div>
  )
}

export default TaskList
