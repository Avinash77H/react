import React from 'react'
import '../App.css'
import { ObjectComp } from '../components/ObjectComp'
import Card from '../components/Card'
import fashion from '../assets/fashion.jpg'


function Home() {
  return (
    <div>
       <div className="relative">
       {ObjectComp.heroslider}
       {ObjectComp.ticker}
       {ObjectComp.multipleitem}
       <Card img="../assets/bags.jpg" name='fashion'/>
      </div>
    </div>
  )
}

export default Home