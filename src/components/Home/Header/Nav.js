import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/img/logo.png'
const links = [
 'Products',
 'Applications',
 'Case Studies ',
 'Resourcces',
 'About us',
]
const Nav = () => {
 return (
  <div className="flex justify-between   z-50 bg-white h-20 items-center">
   <div className="logo w-1/6 flex justify-center">
    <img src={Logo} alt="Company Logo" />
   </div>
   <div className="nav w-2/3">
    <ul className="flex justify-between w-9/12 mx-auto">
     {links.map(link => (
      <li key={link}>
       <Link to={link}>{link}</Link>
      </li>
     ))}
    </ul>
   </div>
   <div className="button w-1/6 flex justify-center">
    <Link to ="requestquote"
     type="button"
     className="py-4 w-9/12 bg-btn rounded text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
    >
     Request a quote
    </Link>
   </div>
  </div>
 )
}

export default Nav
