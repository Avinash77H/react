import "./App.css";
import FilterBar from "./component/FilterBar";
import TaskCard from "./component/TaskCard";
import TaskForm from "./component/TaskForm";
import TaskList from "./component/TaskList";
import { useEffect, useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [newFilteredData, setNewFilteredData] = useState([]);
  const [filterData, setFilterData] = useState({});
  const { searchText, selectValue } = filterData;
  const [selectedTask,setSelectedTask] = useState(null);
  // console.log("selectedTask:",selectedTask)
  

  useEffect(() => {
  
    if (searchText && selectValue === ("All" || "Pending" || "Completed")) {
      
      let newData = taskList.filter((item) => {
        return item.taskName === searchText;
      });
     
      setNewFilteredData(newData);
    } else {
      if (searchText === "" && selectValue === "Pending") {
        let newData = taskList.filter((item) => item.status === "Pending");
        setNewFilteredData(newData);
      } else if (searchText === "" && selectValue === "Completed") {
        let newData = taskList.filter((item) => item.status === "Completed");
        setNewFilteredData(newData);
      } else {
        setNewFilteredData(taskList);
      }
    }

  }, [taskList,searchText,selectValue]);

  
  console.log("taskList Data:",taskList);
  console.log("newFilteredData:",newFilteredData);

  return (
    <>
      <div className="ml-20 ">
        <TaskForm addTask={setTaskList} />
        <FilterBar  setFilterData={setFilterData} />
       <div className="flex mt-8 w-screen justify-around items-center">
       <TaskList taskList={taskList} setTaskList={setTaskList} newFilteredData={newFilteredData} setNewFilteredData={setNewFilteredData} setSelectedTask={setSelectedTask}/>
       <TaskCard selectedTask={selectedTask} setSelectedTask={setSelectedTask}/>
       </div>
      </div>
    </>
  );
}

export default App;
