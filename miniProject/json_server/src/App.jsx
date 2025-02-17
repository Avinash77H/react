import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Cards from "./components/cards";

function App() {
  const[name,setName] = useState(null);
  const[email,setEmail] = useState(null);
  const[phone,setphone] = useState(null);
 


  const handleSubmit = (e)=>{
  e.preventDefault();
  axios.post("http://localhost:3000/profile",{name,email,phone});
  console.log(name,email,phone)
  }



  return <div>
   <form onSubmit={handleSubmit}>
    <label >Name:</label>
    <input type="text" onChange={(e)=>setName(e.target.value)}/><br/>

    <label >Email:</label>
    <input type="email" onChange={(e)=>setEmail(e.target.value)}/><br/>

    <label>phone:</label>
    <input type="tel" onChange={(e)=>setphone(e.target.value)}/><br/>

    <button>submit</button>
   </form>

  <Cards/>
  </div>;
}

export default App;
