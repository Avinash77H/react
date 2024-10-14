import React from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function Navbar(props) {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className="flex items-center justify-evenly border border-green-300 bg-green-100">
      <Link to="/">
        <img src={logo} alt="" className="size-20 " />
      </Link>

      <nav>
        <ul className="flex gap-4 text-green-700">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="flex ml-5 mr-3 gap-4 text-green-700">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="bg-blue-200 px-2 py-1 rounded-md">Login</button>
          </Link>
        )}

        {!isLoggedIn && (
          <Link to="/signup">
            <button className="bg-blue-200 px-2 py-1 rounded-md">Sign Up</button>
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/">
            <button onClick={()=>{
              setIsLoggedIn(false)
              toast.success('Logged Out')
            }} className="bg-blue-200 px-2 py-1 rounded-md">Log out</button>
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/dashboard" className="bg-blue-200 px-2 py-1 rounded-md">
            <button>Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
