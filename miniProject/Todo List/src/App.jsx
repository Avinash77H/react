import { useState } from "react";
import "./App.css";

import Clock from "./component/Clock";
import Form from "./component/Form";
import TodoList from "./component/TodoList";

function App() {
  const [todo, setTodo] = useState([]);

  const handleFormSubmit = (inputValue) => {
    const {id,content,checked} = inputValue
    if (!content) return;

    // if (todo.includes(inputValue)) {
    //   return;
    // }

      const todoContentMatch = todo.find((curTask)=>curTask.content === content);
      if(todoContentMatch) return;

    setTodo((prev) => [...prev, {id,content,checked}]);
  };

  const handleDelete = (index) => {
    const filteredItem = todo.filter((todo, todoIndex) => todoIndex !== index);
    setTodo(filteredItem);
  };

  const handleClearAll = () => {
    setTodo([]);
  }; 

  const handleChecked = (content)=>{
    console.log('checked method called')
    const updateTask  = todo.map((curTask)=>{
      if(curTask.content === content){
        return {...curTask,checked:!curTask.checked}
      }
      else{
        return curTask
      }
    });
    setTodo(updateTask)
  }

  return (
    <>
      <section className="flex flex-col gap-4 items-center">
        <h1 className="text-3xl font-bold text-center">To Do App</h1>
        <Clock />
        <section className="flex flex-col gap-4 items-center">
          <Form addTodo={handleFormSubmit} />
          <div>
            <ul>
              {todo.map((todo, index) => (
                <TodoList key={index} todo={todo.content} index={index} deleteMethod={handleDelete} checked={todo.checked} checkedMethod={handleChecked}/>
              ))}
            </ul>
          </div>
        </section>
        {todo.length !== 0 && (
          <section>
            <button
              className="bg-black rounded-full p-1 text-white "
              onClick={handleClearAll}
            >
              Clear All
            </button>
          </section>
        )}
      </section>
    </>
  );
}

export default App;
