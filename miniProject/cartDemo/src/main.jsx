import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";

import Profile from "./components/Profile.jsx";
import WhishList from "./components/WhishList.jsx";
import Bag from "./components/Bag.jsx";
import { Provider } from "react-redux";
import myntraStore from "./store/index.js";
import Beauty from "./components/Beauty.jsx";
import Fragrances from "./components/Fragrances.jsx";
import Furniture from "./components/Furniture.jsx";
import Groceries from "./components/Groceries.jsx";


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
        path:'/beauty',
        element:<Beauty/>
      },
      {
        path:'/fragrances',
        element:<Fragrances/>
      },
      {
        path:'/furniture',
        element:<Furniture/>
      },
      {
        path:'/groceries',
        element:<Groceries/>
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
 
    <Provider store={myntraStore}>
    <RouterProvider router={router}>
    <App/>
    </RouterProvider>
    </Provider>
   
  
);
