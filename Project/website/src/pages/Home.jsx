import React from 'react'
import '../App.css'
import { ObjectComp } from '../components/ObjectComp'


function Home() {
  return (
    <div>
       <div className="relative">
       {ObjectComp.heroslider}
       {ObjectComp.marquee}
       
      </div>
    </div>
  )
}

export default Home