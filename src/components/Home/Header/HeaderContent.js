import React from 'react'
import { Link } from 'react-router-dom'

const HeaderContent = () => {
 return (
  <div className="header__text text ">
   <div className="text_text">
    <h2>What is 'Digital Migration'?</h2>
    <p>
     AVCOMM assists businesses in streamlining operations through better
     communications with their industrial equipments
    </p>
   </div>
   <div className="text__btn">
    <Link to="contact" className=" ">
     Contact us
    </Link>
   </div>
  </div>
 )
}

export default HeaderContent
