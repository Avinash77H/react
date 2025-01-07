
import "./App.css";
import TaskCard from "./component/TaskCard";
import FilterBar from "./component/FilterBar";
import TaskForm from "./component/TaskForm";
import TaskList from "./component/TaskList";
import { useState } from "react";


function App() {
  const [taskList,setTaskList] = useState([]);
  console.log("app re-render")
  console.log("taskLIst:",taskList);
  return (
   <>
   <div className="h-screen ml-20 ">
  
   <TaskForm addTask={setTaskList}/>
   {/* <FilterBar/>
   <TaskCard/>
   <TaskList/> */}

   </div>
   </>
  );
}

export default App;
