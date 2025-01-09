import React, { useState } from 'react'
import { ImSad2 } from "react-icons/im";


function TaskList({taskList,setTaskList,newFilteredData,setNewFilteredData}) {


  
  

  function handleDelete(taskIndex){
    const newData = taskList.filter((item,index)=>(
      index !== taskIndex
    ))
    setTaskList(newData)
  }

  function handleStatus(taskIndex){
    const updateStatusData = taskList.map((item,index)=>{
     if(index === taskIndex){
      if(item.status === "Pending"){
        return {...item,status : "Completed"}
      }
      else if(item.status === "Completed"){
        return {...item,status: "Pending"}
      }
     }
     else {
      return item
     }
  })
      setTaskList(updateStatusData)
      // setNewFilteredData(updateStatusData)
  }

  function handleEdit(taskIndex){
    setTaskList((prev)=>(
      prev.map((task,i)=>(
        i === taskIndex ? {...task,editMode:true}:task
      ))
   ))
  }

  function handleSave(taskIndex,updatedTask){
    setTaskList((prev)=>(
      prev.map((task,index)=>(
        index === taskIndex ? {...task,taskName:updatedTask,editMode:false}:task
      ))
    ))
  }

  // filteredTask helper function

  function handleFilteredDataDelete(taskIndex){
    const newData = newFilteredData.filter((item,index)=>(
      index !== taskIndex
    ))
    setNewFilteredData(newData)
  }

  function handleFilteredDataStatus(taskIndex){
    const updateStatusData = newFilteredData.map((item,index)=>{
     if(index === taskIndex){
      if(item.status === "Pending"){
        return {...item,status : "Completed"}
      }
      else{
        return {...item,status: "Pending"}
      }
     }
     else {
      return item
     }
  })
      setNewFilteredData(updateStatusData)
      

  }

  function handleFilteredDataEdit(taskIndex){
    setNewFilteredData((prev)=>(
      prev.map((task,i)=>(
        i === taskIndex ? {...task,editMode:true}:task
      ))
   ))
  }

  function handleFilteredDataSave(taskIndex,updatedTask){
    setNewFilteredData((prev)=>(
      prev.map((task,index)=>(
        index === taskIndex ? {...task,taskName:updatedTask,editMode:false}:task
      ))
    ))
  }

  return (
    <>

    <div className='tasklist_container'>
    {(taskList.length === 0 && newFilteredData.length === 0 ) && <div className='not_available'>No Tasks Available <ImSad2 className='sad_emoji'/></div>}
    
    {/* { (newFilteredData.length === 0 && taskList.length !== 0)  && <div className='not_available'>Completed Task Not Available <ImSad2 className='sad_emoji'/></div>} */}
    

    {
      newFilteredData.length !== 0?newFilteredData.map((item,index)=>(
        item.editMode ?<div className='editContainer'>
        <input type="text" defaultValue={item.taskName} id='editInputFiled' onChange={(e)=>{
         let newValue = e.target.value;
         item.taskName = newValue;
        }}/>
        <button className='save_btn' onClick={()=>handleSave(index,item.taskName)}>Save</button>
      </div> :
        <div className='task_container' key={index}>
            <p>{item.taskName}</p>
            <div className='btn_container'>
                <div>{item.status === 'Pending'?<button className='pending_btn' onClick={()=>handleStatus(index)}>Pending</button>:<button className='completed_btn' onClick={()=>handleStatus(index)}>Completed</button>}</div>
                <button className='edit_btn' onClick={()=>handleEdit(index)}>Edit</button>
                <button className='delete_btn' onClick={()=>handleDelete(index)}>Delete</button>
            </div>
        </div>
      )):taskList.map((item,index)=> (
        item.editMode?<div className='editContainer'>
          <input type="text" defaultValue={item.taskName} id='editInputFiled' onChange={(e)=>{
           let newValue = e.target.value
           item.taskName = newValue;
          }}/>
          <button className='save_btn' onClick={()=>handleSave(index,item.taskName)}>Save</button>
        </div>:<div className='task_container' key={index}>
        <p>{item.taskName}</p>
        <div className='btn_container'>
            <div>{item.status === 'Pending'?<button className='pending_btn' onClick={()=>handleStatus(index)}>Pending</button>:<button className='completed_btn' onClick={()=>handleStatus(index)}>Completed</button>}</div>
            <button className='edit_btn' onClick={()=>handleEdit(index)}>Edit</button>
            <button className='delete_btn' onClick={()=>handleDelete(index)}>Delete</button>
        </div>
    </div>
        
      ))}
      
    </div>

    </>
  )
}

export default TaskList
