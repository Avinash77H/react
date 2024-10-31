import React, { useContext } from 'react'

import Sidebar from './Sidebar'
import { ownContext } from '../store/data'
function Home() {
  const {name} = useContext(ownContext)
  return (
    <div >
      this is home page {name}
    </div>
  )
}

export default Home
