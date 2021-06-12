import React from 'react'
import Nav from './Nav'
import HeaderContact from './HeaderContact'
import HeaderContent from './HeaderContent'

const Header = () => {
 return (
  <div className="relative header">
   <HeaderContact />
   <Nav />
   <div className="header__BgImage"></div>
   <HeaderContent />
  </div>
 )
}

export default Header
