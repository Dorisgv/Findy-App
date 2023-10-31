import React from 'react'
import { Outlet } from 'react-router-dom'
import {Cloudinary} from "@cloudinary/url-gen";
// Aqui mismo pueden implementar un modal de agregar publicacion

const Menu = () => {
  const cld = new Cloudinary({ cloud: { cloudName: 'dvpem9i7f' } });
  return (
    <div>
      <Outlet />
      <input type="file" />
    </div>
  )
}

export default Menu