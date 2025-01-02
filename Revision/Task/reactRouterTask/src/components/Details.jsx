import React from "react";
import { useLoaderData } from "react-router-dom";

function Details() {
  const details = useLoaderData();

  return (
    <div className="w-full">
      <h1 className="header bg-violet-300 text-center">Details</h1>
      <p>{details.title}</p>
      <img src={details.thumbnail} alt="" />
    </div>
  );
}

export async function fetchDetails({ params }) {
  const { id } = params;

  const res = await fetch("https://dummyjson.com/products/" + id);

  return res.json();
}

export default Details;
