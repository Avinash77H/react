import React from "react";
import { useLoaderData, useLocation } from "react-router-dom";

function Details() {
  const details = useLoaderData();
  const location = useLocation();
  console.log("location:",location);

  return (
    <div className="w-full  flex flex-col items-center">
      <h1 className="header w-full bg-violet-300 text-center">Details</h1>
      <img src={details.thumbnail} alt="" />
      <p className="text-xl font-bold">{details.title}</p>
      <p>{location.pathname}</p>
    </div>
  );
}

export async function fetchDetails({ params }) {
  const { id } = params;

  const res = await fetch("https://dummyjson.com/products/" + id);

  return res.json();
}

export default Details;
