import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './Navbar'
import Home from './Home'
import Shop from './Shop'
import About from './About'

function OldVersion() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}>Home</Route>
                    <Route path="/about" element={<About />}>About</Route>
                    <Route path="/shop" element={<Shop />}>Shop</Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default OldVersion