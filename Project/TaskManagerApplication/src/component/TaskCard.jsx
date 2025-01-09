import React from 'react'

function TaskCard({selectedTask,setSelectedTask}) {
  console.log("selectedTask:",selectedTask)
  return (
    
    <div className='taskcard_container'>
     {selectedTask &&  <div>
      <h1>Task Card</h1>
      <div className='info_container'>
        <p>Task Name : {selectedTask.taskName}</p>
        <p>Task Description : {selectedTask.taskDescription}</p>
        <p>Status: {selectedTask.status}</p>
      </div>
      <div className='close_icon' onClick={()=>setSelectedTask(null)}><span>X</span></div>
      </div>}
     
    </div>
  )
}

export default TaskCard
