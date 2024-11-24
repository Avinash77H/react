import React from 'react'
import TodoItem from './TodoItem'


function TodoContainer({todo,setTodo}) {
 
  const handleDelete = (deleteIndex)=>{
    const newData = todo.filter((item,index)=>index !== deleteIndex);
    setTodo(newData)
  }

  const handleChecked = (content)=>{
    
    const checkedItems = todo.map((item)=>{
      if(item.content === content){
        return {...item,checked:!item.checked}
      }
      else{
        return item
      }
    })
    setTodo(checkedItems)
  }
 
  return (
    <div>
      {todo.map((item,index)=><TodoItem key={index} content={item.content} handleDelete={handleDelete} index={index} handleChecked={handleChecked} checked={item.checked}/>)}
    </div>
  )
}

export default TodoContainer
