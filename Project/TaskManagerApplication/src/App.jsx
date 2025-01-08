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
  const [updateTask,setUpdataTask] = useState("")

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

  }, [filterData]);

  useEffect((taskList,newFilteredData)=>{
    taskList
  },[newFilteredData])
  console.log("taskList Data:",taskList);
  console.log("newFilteredData:",newFilteredData);

  return (
    <>
      <div className="h-screen ml-20 ">
        <TaskForm addTask={setTaskList} />
        <FilterBar  setFilterData={setFilterData} />
        <TaskList taskList={taskList} setTaskList={setTaskList} newFilteredData={newFilteredData} setNewFilteredData={setNewFilteredData}/>
        <TaskCard />
      </div>
    </>
  );
}

export default App;
