import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

function BreadCrumb() {
  const location = useLocation()
  const path = location.pathname;
  const splitPath = path.split("/");
  const filterPath = splitPath.filter((path)=>path !== "");

  let space = "";
  const createLink = filterPath.map((path,index)=>{
    space += `/${path}`;

    return <div key={index} >
      <NavLink to={path}><span>/</span>{path}</NavLink>
    </div>
  })
  
  return (
    <div>
      {createLink}
    </div>
  )
}

export default BreadCrumb
