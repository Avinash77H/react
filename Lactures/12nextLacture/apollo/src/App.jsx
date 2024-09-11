import {react,useState } from 'react'
import Fun from './components/Fun';
import Card from './components/Card';

function App() {
  const [name,setName] = useState('hello avinash')
  const person = ()=>{
    return name;
  }
  
  return (
    <>
    <Fun fun={person}/>
    <Card/>
    </>
  )
}

export default App;