import React from "react";
import Navbar from "./Navbar"; 
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Product from '../pages/Product'
import AboutUs from "../pages/AboutUs";
import FAQ from '../pages/FAQ'
import Contact from "../pages/Contact";
import Checkout from "../pages/Checkout";
import BuyNow from "../pages/BuyNow";
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
        path: "/aboutUs",
        element:<AboutUs/>
      },
      {
        path: "/faq",
        element:<FAQ/>
      },
      {
        path: "/contactUs",
        element:<Contact/>
      },
      {
        path: "/checkout",
        element:<Checkout/>
      },
      {
        path: "/buyNow",
        element:<BuyNow/>
      },
    ],
  },
]);

export default function LayoutTree() {
  return <RouterProvider router={List}></RouterProvider>;
}
