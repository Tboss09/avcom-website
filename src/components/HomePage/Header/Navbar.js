import React from 'react'
import AvcommLogo from '../../assets/img/logo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
 const links = [
  'products',
  'application',
  'casestudies',
  'resources',
  'aboutus',
 ]
 return (
  <div className="flex justify-between bg-red-300 px-5 items-center h-20 mx-auto">
   <NavLink to="/" className="logo">
    <img src={AvcommLogo} alt="Company's Logo" />
   </NavLink>

   {/* Logo */}
   <ul className="flex">
    {links.map(link => (
     <li key={link}>
      <NavLink to={link}>{link}</NavLink>
     </li>
    ))}
   </ul>
   {/* navBar */}

   {/* Cta */}
   <div className="cta">
    {' '}
    <button>Request a Quote</button>
   </div>
  </div>
 )
}

export default Navbar
