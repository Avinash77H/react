import React from 'react'
import Home from './home'
import About from './about'
import Contact from './contact'
import Shop from './shop'
import Error from './Error'
import Navbar from '../components/Navbar'

import {BrowserRouter,Routes,Route} from 'react-router-dom'


function Layout(){
    return(
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/contact' element={<Contact/>}/>
                        <Route path='/shop' element={<Shop/>}/>
                        <Route path='*' element={<Error/>}/>
                       
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Layout