import React from 'react'
import Header from './Header'
import Footer from './Footer'

import { Outlet, useNavigation } from 'react-router-dom'
import Loader from './Loader';

function AppLayout() {
  const nevigation = useNavigation();
  console.log("state:",nevigation.state)
  // if(nevigation.state === 'loading') return <Loader/>;
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
      
    </>
  )
}

export default AppLayout
