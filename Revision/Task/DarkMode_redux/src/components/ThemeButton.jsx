import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {Dark,Light} from '../Redux/Actions'

function ThemeButton() {
const dispatch = useDispatch();
const theme = useSelector(state => state.theme)
console.log('theme is :',theme)

function handleTheme(){
  if(theme === 'light'){
    dispatch({type:"DARK_THEME"});
  }else{
    dispatch({type:"LIGHT_THEME"})
  }
} 
  return (
    <>
    <label className="inline-flex items-center me-5 cursor-pointer">
      <input
        type="checkbox"
        defaultValue=""
        className="sr-only peer"
        defaultChecked=""
        onClick={handleTheme}

        
      />
      <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600" />
      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        
      </span>
    </label>
 
  </>
  
  )
}

export default ThemeButton