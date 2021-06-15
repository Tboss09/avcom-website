import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

import Logo from '../../assets/img/logo.png'
const links = [
 'Products',
 'Applications',
 'Case Studies ',
 'Resources',
 'About us',
]
const Nav = () => {
 const [notHomePage, setNotHomePage] = React.useState(true)
 const location = useLocation()
 React.useEffect(() => {
  console.log(location.pathname)
  location.pathname !== '/' ? setNotHomePage(false) : setNotHomePage(true)
 }, [location])

 return (
  <div className="flex justify-between   z-50 bg-white h-20 items-center">
   <div className="logo w-1/6 flex justify-center">
    <Link to="/">
     <img src={Logo} alt="Company Logo" />
    </Link>
   </div>
   <div className="nav w-2/3">
    <ul className="flex justify-between w-9/12 mx-auto">
     {links.map(link => {
      let newLink = link.split(/\s/).join('')
      return (
       <li key={link}>
        <NavLink to={(newLink = newLink.toLowerCase())} className ="navLink">{link}</NavLink>
       </li>
      )
     })}
    </ul>
   </div>
   <div className="button w-1/6 flex justify-center">
    <Link
     to="requestquote"
     type="button"
     className="py-4 w-9/12 bg-btn rounded text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
    >
     {notHomePage ? 'Request a quote' : 'Schedule a demo'}
    </Link>
   </div>
  </div>
 )
}

export default Nav
