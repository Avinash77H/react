import { createContext,react } from 'react'
import Ex1 from './components/Ex2'


export const data1 = createContext();
export const data2 = createContext();

function App() {
  const name= 'abhishek sir is the best'
  return (
    <>
      <data1.Provider value={name}>
      <Ex1/>
      </data1.Provider>
    </>
  )
}

export default App;