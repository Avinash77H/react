import React from 'react'
import { createContext, useState } from "react";



export const Context = createContext();


function ExpenseContext({children}) {

const [expenseList,setExpenseList] = useState([]);

const [expense,setExpense] = useState({
  name:"",
  amount:"",
  category:"",
  Date:""
});

  return (
    <Context.Provider value={{expense,setExpense,expenseList,setExpenseList}}>
      {children}
    </Context.Provider>
  )
}

export default ExpenseContext
