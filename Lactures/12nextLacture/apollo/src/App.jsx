import react, {createContext, useState } from 'react'
import Fun from './components/Fun';
import Card from './components/Card';
import Button from './components/Button';

export const theme = createContext();
function App() {
  
  const [color1,setColor] = useState()
  const[count,setCount] = useState(true)
 
  const toggle = ()=>{
    if(count === true){
      setColor('bg-black')
      setCount(false)
    }
    else{
      setColor('bg-white')
      setCount(true)
    }
 }

  
  return (
    <>
    <theme.Provider >

    <Card color={color1}/>
    <Button method={toggle}/>

    </theme.Provider>

    </>
  )
}

export default App;