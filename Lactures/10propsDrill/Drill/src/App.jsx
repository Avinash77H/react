import Component1 from './components/Component1'
import Component3 from './components/Component3'
import './App.css'
import { createContext } from 'react'

const data = createContext();
const data1 = createContext();

function App() {
  const name = 'ram';
  const gender = 'male';
  return (
    <>
     <data.Provider value={name}>
      <data1.Provider value={gender}>
        <Component3/>
      </data1.Provider>
     </data.Provider>
    </>
  )
}

export default App
export{data,data1}