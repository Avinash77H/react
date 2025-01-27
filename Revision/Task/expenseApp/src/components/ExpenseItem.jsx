import React, { useContext } from 'react'
import { Context } from '../Context/ExpenseContext'

function ExpenseItem() {
  const {expense,setExpense,expenseList,setExpenseList} = useContext(Context);
  console.log(expense);
  console.log(expenseList)
  

  function handleAddExpense(){
   setExpenseList((prev)=>([...prev,expense]));
  }
  return (
    <>
    {/* Input Section */}
    <div className="flex gap-2 mb-4">
    <input
      type="text"
      placeholder="Expense Name"
      className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring focus:ring-green-300"
      value={expense.name}
      onChange={(e)=>setExpense((prev)=>({...prev,name:e.target.value}))}
      />
    <input
      type="number"
      placeholder="Amount"
      className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring focus:ring-green-300"
      onChange={(e)=>setExpense((prev)=>({...prev,amount:e.target.value}))}
    />
    <select className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring focus:ring-green-300" onChange={(e)=>setExpense((prev)=>({...prev,category:e.target.value}))}>
      <option value="Food">Food</option>
      <option value="Transport">Transport</option>
      <option value="Other">Other</option>
    </select>
    <input
      type="date"
      className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring focus:ring-green-300"
      onChange={(e)=>setExpense((prev)=>({...prev,Date:e.target.value}))}
    />
    <button className="bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600" onClick={handleAddExpense}>
      Add Expense
    </button>
  </div>
  </>
  )
  
}

export default ExpenseItem