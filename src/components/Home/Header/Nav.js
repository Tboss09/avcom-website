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
  <div className ="flex justify-between mx-auto z-50 bg-white h-14">
   <div className="logo">
    <img src={Logo} alt="" />
   </div>
   <div className="nav">
    <ul className ="flex ">
     {links.map(link => (
      <li key={link}>
       <Link to={link}>{link}</Link>
      </li>
     ))}
    </ul>
   </div>
   <div className="button">
    <button>Buttonw</button>
   </div>
  </div>
 )
}

export default Nav
