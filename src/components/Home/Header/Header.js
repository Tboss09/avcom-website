import React from 'react'
import HeaderContent from './HeaderContent'
import Products from './Products'

const Header = () => {
 return (
  <div className="header " id="top">
   <div className="header__BgImage"></div>
   <HeaderContent />

   {/* Product Show BOxes */}
   <Products />
  </div>
 )
}

export default Header
