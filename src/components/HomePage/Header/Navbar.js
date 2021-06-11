import React from 'react'
import AvcommLogo from '../../assets/img/logo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
 const links = [
  'Products',
  'Application',
  'Case studies',
  'Resources',
  'About us',
 ]
 return ( 
  <nav className="flex  items-center h-20  z-50  bg-white">
   <div className="logo w-3/12  flex justify-center">
    <NavLink to="/">
     <img src={AvcommLogo} alt="Company's Logo" />
    </NavLink>
   </div>

   {/* Logo */}
   <ul className="flex justify-between  w-6/12">
    {links.map(link => (
     <li key={link}>
      <NavLink to={link}>{link}</NavLink>
     </li>
    ))}
   </ul>
   {/* navBar */}

   {/* Cta */}
   <div className="cta w-3/12  flex justify-center  ">
    {' '}
    <button>Request a Quote</button>
   </div>
  </nav>
 )
}

export default Navbar
