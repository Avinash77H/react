import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Shop from "./components/Shop.jsx";
import DashBoard from "./components/DashBoard.jsx";
import Profile from "./components/Profile.jsx";
import WhishList from "./components/WhishList.jsx";
import Bag from "./components/Bag.jsx";


const router = createBrowserRouter([
  {
    path:'/',
    element:<Navbar/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/shop',
        element:<Shop/>
      },
      {
        path:'/dashboard',
        element:<DashBoard/>
      },
      {
        path:'/profile',
        element:<Profile/>
      },
      {
        path:'/whishlist',
        element:<WhishList/>
      },
      {
        path:'/bag',
        element:<Bag/>
      },
    ]
  }
])




createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
    <App/>
    </RouterProvider>
  </StrictMode>
);
