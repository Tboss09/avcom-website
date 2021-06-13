import React from 'react'
import HeaderContent from './HeaderContent'
import Products from './Products'

const Header = () => {
 return (
  <header className="header ">
   <div className="header__BgImage"></div>
   <HeaderContent />

   {/* Producst Show BOxes */}
   <Products />
  </header>
 )
}

export default Header
