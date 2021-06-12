import React from 'react'
import Nav from './Nav'
import HeaderContact from './HeaderContact'
import HeaderContent from './HeaderContent'
import Products from './Products'

const Header = () => {
 return (
  <div className=" header">
   <HeaderContact />
   <Nav />
   <div className="header__BgImage"></div>
   <HeaderContent />

   {/* Producst Show BOxes */}
   <Products />
  </div>
 )
}

export default Header
