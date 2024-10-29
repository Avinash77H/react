import React from 'react'
import { createContext } from 'react';

export const ownContext = createContext();

function DataProvider({children}) {

  const person = {
    name : 'vidit',
    age : 17
  }

  return (
    <ownContext.Provider value={person}>
      {children}
    </ownContext.Provider>
  )
}

export default DataProvider
