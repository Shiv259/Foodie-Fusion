import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = () => {

  const[menu, setmenu] = useState("menu");
   
  return (
    <div className='navbar'>
        <img src={assets.logo_1} alt="" className='logo' />
      <ul className='navbar-menu'>
        <li onClick={()=>setmenu("Home")} className={menu==="Home"?"active":""}>Home</li>
        <li onClick={()=>setmenu("Menu")} className={menu==="Menu"?"active":""}>Menu</li>
        <li  onClick={()=>setmenu("About us")}className={menu==="About us"?"active":""}>About us</li>
        <li onClick={()=>setmenu("Contact us")} className={menu==="Contact us"?"active":""}>Contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" /> 
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
          </div> 
          <button>Sign in</button>
      </div>
    </div>
  )
}


export default Navbar
