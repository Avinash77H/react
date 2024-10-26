import { createContext } from "react";
import React from 'react'

export const ownContext = createContext()

function DataProvider({children}) {
  return (
    <ownContext.Provider>
      {children}
    </ownContext.Provider>
  )
}

export default DataProvider
