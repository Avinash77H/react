import React, { createContext } from "react";
import { useState } from "react";

export const MyContext = createContext();

function AppContext({ children }) {
  const [theme, setTheme] = useState(true);

  const data = {
    name: "john",
    age: 23,
    sum: (a, b) => {
      return a + b;
    },
    theme,
    setTheme,
  };
  return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
}

export default AppContext;
