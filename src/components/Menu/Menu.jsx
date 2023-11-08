import { Cloudinary } from "@cloudinary/url-gen";
import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from '../Home/Home'
// Aqui mismo pueden implementar un modal de agregar publicacionion

const Menu = () => {
  const cld = new Cloudinary({ cloud: { cloudName: 'dvpem9i7f' } });
  return (
    <>

      <Outlet />
      <Home />
      
    </>
  )
}

export default Menu