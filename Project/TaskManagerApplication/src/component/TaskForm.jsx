import React, { useState,memo } from 'react'

function TaskForm({addTask}) {
  console.log("taskform re-render")
  const [taskName,setTaskName] = useState("");
  const [taskDescription,setTaskDescription] = useState("");
  const [status,setStatus] = useState("pending");

 const handleSubmit = (e)=>{
  e.preventDefault();
  addTask(prev=>[...prev,{
    taskName,
    taskDescription,
    status
  }])
 }

  return (
    <div className='taskform_container'>
        <h1>Task Form</h1>
      <form id='taskform' onSubmit={(e)=>handleSubmit(e)}>

       <div className='field_container'>
            <label htmlFor="task">Task:</label>
            <input type="text" id='task' value={taskName} onChange={(e)=>setTaskName(e.target.value)}/>
       </div>

        <div className='field_container'>
            <label htmlFor="description">Description:</label>
            <textarea id='description' value={taskDescription} onChange={(e)=>setTaskDescription(e.target.value)}></textarea>
        </div>

        <div className='field_container'>
            <label htmlFor="status">Status:</label>
            <select name="" id="status" value={status} onChange={(e)=>setStatus(e.target.value)}>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
            </select>
        </div>

        <button className='submit_btn' type='submit'>Submit</button>
        
        <div>

        </div>

      </form>
    </div>
  )
}

export default memo(TaskForm)
