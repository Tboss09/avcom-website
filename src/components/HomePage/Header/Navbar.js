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
  <div>
   <div className="logo">
    <img src={AvcommLogo} alt="Company's Logo" />
   </div>

   {/* Logo */}
   <div className="Navbar">
    <ul>
     {links.map(link => (
      <li key={link}>
       <NavLink to={link}>{link}</NavLink>
      </li>
     ))}
    </ul>
   </div>
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
