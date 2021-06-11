import React from 'react'
import AvcommLogo from '../../assets/img/logo.png'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
 const links = [
  'Products',
  'Application',
  'Case studies',
  'Resources',
  'About us',
 ]
 return (
  <nav className="flex w-full  items-center h-20  z-50  bg-white">
   <div className="logo w-1/4  flex justify-center">
    <NavLink to="/">
     <img src={AvcommLogo} alt="Company's Logo" />
    </NavLink>
   </div>

   {/* Logo */}
   <div className ="w-2/4 ">
    <ul className="flex justify-evenly w-11/12 mx-auto">
     {links.map(link => (
      <li key={link}>
       <NavLink to={link}>{link}</NavLink>
      </li>
     ))}
    </ul>
    {/* navBar */}
   </div>

   {/* Cta */}

   <div className="cta w-1/4 flex justify-center">
    {' '}
    <Link to ="requestQuote"     className="py-4  w-48 bg-btn hover:bg-header rounded
     text-white  transition ease-in duration-200 text-center text-base  shadow-md focus:outline-none font-normal"
    >
     Request a quote
    </Link>
   </div>
  </nav>
 )
}

export default Navbar
