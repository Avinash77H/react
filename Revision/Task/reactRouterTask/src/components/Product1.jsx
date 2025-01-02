import React from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

function Product1() {
  const data = useLoaderData();

  return (
    <div>
      <ul>
        {data.products.map((item) => (
          <Link key={item.id} to={`${item.id}`}>
            <li className="underline">{item.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Product1;

export async function fetchData() {
  const res = await fetch("https://dummyjson.com/products/");
  return res.json();
}
