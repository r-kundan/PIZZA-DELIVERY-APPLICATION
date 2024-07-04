import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../Pages/Home'
import Menu from '../Pages/Menu'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Pizzas from '../components/Pizzas'
import SideFood from '../components/SideFood'
import Drinks from '../components/Drinks'
import Desserts from '../components/Desserts'
import About from '../Pages/About'
import AddToCart from '../Pages/AddToCart'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/menu' element={<Menu/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/pizzas' element={<Pizzas/>} />
                <Route path='/sides-food' element={<SideFood/>}/>
                <Route path='/drinks' element={<Drinks/>}/>
                <Route path='/desserts' element={<Desserts/>}/>
                <Route path='/addtocart' element={<AddToCart/>}/>



            </Route>
        </Routes>
    </div>
  )
}

export default AllRoutes