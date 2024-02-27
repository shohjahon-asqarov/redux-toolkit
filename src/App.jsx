import React from 'react'
import Navbar from './components/Navbar'

import 'bootstrap-icons/font/bootstrap-icons.css'
import Products from './components/Products'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App