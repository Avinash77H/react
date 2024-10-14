import React from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function Navbar(props) {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className="flex items-center justify-evenly">
      <Link to="/">
        <img src={logo} alt="" className="size-20" />
      </Link>

      <nav>
        <ul className="flex gap-4 ">
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

      <div className="flex ml-5 mr-3 gap-4">
        {!isLoggedIn && (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}

        {!isLoggedIn && (
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/">
            <button onClick={()=>{
              setIsLoggedIn(false)
              toast.success('Logged Out')
            }}>Log out</button>
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
