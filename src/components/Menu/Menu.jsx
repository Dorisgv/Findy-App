import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from '../Home/Home'
// Aqui mismo pueden implementar un modal de agregar publicacionion



const Menu = () => {
  return (
    <>

      <Outlet />
      <Home />
    </>
  )
}

export default Menu