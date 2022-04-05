import React from 'react'
import NavBar from './component/NavBar'
import Home from './component/Home'
import {Routes, Route} from "react-router-dom"
import Product from './component/Product'

function App() {
  <NavBar/>

  return (
    <>
    <NavBar/>
  <Routes>
    <Route path = "/" element={<Home/>}/>
    <Route path = "/product" element={<Product/>}/>
    
    </Routes>
    </>
  )
}

export default App
