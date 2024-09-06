import React from "react";
import Navbar from "./Navbar";
import Topbar from "./Topbar";
import { ObjectPages } from "../pages/ObjectPages";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const List = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: ObjectPages.home,
      },
      {
        path: "/shop",
        element: ObjectPages.shop,
      },
      {
        path: "/product",
        element: ObjectPages.product,
      },
      {
        path: "/pages",
        element: ObjectPages.pages,
      },
    ],
  },
]);

export default function LayoutTree() {
  return <RouterProvider router={List}></RouterProvider>;
}
