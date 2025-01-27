import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ExpenseContext from './Context/ExpenseContext.jsx'

createRoot(document.getElementById('root')).render(
  <ExpenseContext>
    <App />
  </ExpenseContext>
 
)
