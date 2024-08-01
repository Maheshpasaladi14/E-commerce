// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Components/Navbar/Navbar'

import Footer from './Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import WishList from './Pages/WishList'
import Login from './Pages/Login'
import SignIn from './Pages/SignIn'
import Product from './Components/Product/Product'
import Card from './Components/Card/Card'


const App = () => {
  return (
    <div>
      {/* <Navbar/>
     
      <Footer/> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wishlist' element={<WishList/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/products' element={<Card/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App