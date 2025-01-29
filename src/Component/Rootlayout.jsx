import React from 'react'
import Home from '../pages/Home'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Rootlayout = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
      
    </div>
  )
}

export default Rootlayout
