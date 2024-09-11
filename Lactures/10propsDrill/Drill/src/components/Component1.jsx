import React, { useState } from "react";
import { createContext } from "react";
import Component2 from "./Component2";

const UserContext = createContext();
function Component1() {
  const [name, setName] = useState("avinash");


  return (
    <>
      <UserContext.Provider value={name}>
        <Component2 />
      </UserContext.Provider>
    </>
  );
}

export default Component1;
