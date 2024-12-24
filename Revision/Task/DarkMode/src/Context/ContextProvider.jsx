import React from 'react'

import themeContext from './ThemeContext';

import { useState } from 'react';

function ContextProvider({ children }) {
    const [theme, setTheme] = useState("");
    const [value, setValue] = useState(false);

    return (
       <themeContext.Provider value={{setTheme,value,setValue}}>
        {children}
       </themeContext.Provider>
    )

}

export default ContextProvider