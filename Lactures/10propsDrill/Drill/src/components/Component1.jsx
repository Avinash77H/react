import React, { useState } from "react";
import { createContext } from "react";
import Component2 from "./Component2";

const ownContext = createContext();

export const name = 'abhishek sir is good teacher'
export const work = 'bak bak kare'
function Component1({children}) {
 

  return (
    <>
      <ownContext.Provider value={name}>
       
        {/* <Component2 /> */}
        {children}
       
      </ownContext.Provider>
    </>
  );
}

export default Component1;
