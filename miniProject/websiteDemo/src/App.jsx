import React from "react";
import Navbar from './components/Navbar'
import Home from "./pages/Home"
import Login from './pages/Login'
import SignUp from './pages/SignUP'
import Dashboard from './pages/Dashboard'
import {Routes,Route} from "react-router-dom"
import { useState } from "react";

import "./App.css"

function App() {
  const[isLoggedIn,setIsLoggedIn]= useState(false)
  return (
    <div className="">
       <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

       <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
