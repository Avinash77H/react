import React from "react";
import Navbar from "./Navbar"; 
import Home from '../pages/Home'
import Shop from '../pages/Pages'
import Product from '../pages/Product'
import Pages from '../pages/Pages'
import { ObjectPages } from "../pages/ObjectPages";
import HomeLayout from "./HomeLayout";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const List = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/shop",
        element: <Shop/>
      },
      {
        path: "/product",
        element: <Product/>
      },
      {
        path: "/pages",
        element:<Pages/>
      },
    ],
  },
]);

export default function LayoutTree() {
  return <RouterProvider router={List}></RouterProvider>;
}
