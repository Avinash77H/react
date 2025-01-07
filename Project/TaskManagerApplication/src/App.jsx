
import "./App.css";
import FilterBar from "./component/FilterBar";
import TaskCard from "./component/TaskCard";
import TaskForm from "./component/TaskForm";
import TaskList from "./component/TaskList";
import { useState } from "react";


function App() {
  const [taskList,setTaskList] = useState([]);
  const [filterData,setFilterData] = useState({});
  

  function filterNewData(){
    filterData()
  }
  
  console.log("app re-render")
  console.log("filter Data:",filterData);
  return (
   <>
   <div className="h-screen ml-20 ">
  
   <TaskForm addTask={setTaskList}/>
   <FilterBar taskList = {taskList} setFilterData = {setFilterData}/>
   <TaskList taskList={taskList}/> 
   <TaskCard/>

   </div>
   </>
  );
}

export default App;
