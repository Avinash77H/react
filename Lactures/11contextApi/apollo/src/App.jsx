import {createContext, react } from 'react'

import Layout from './components/Layout';



export const data = createContext('skillqode');

const obj = {
  name:'abhishek sir'
}

function App() {
  const name= 'avinash'
  return (
    <>
     <data.Provider value={name}>
      <Layout/>
     </data.Provider>
    </>
  )
}

export default App;