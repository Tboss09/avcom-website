import React from 'react'

// External Files
import { AiOutlineMail } from 'react-icons/ai'
import { IoIosCall } from 'react-icons/io'
import { BsPersonFill } from 'react-icons/bs'


const HeaderContact = () => {
 return (
  <div>
   {/* Email */}
   <div className="div">
    <AiOutlineMail />
    <span>Become a reseller: sales@avcomm.us</span>
   </div>

   {/* telephone */}
   <div className="div">
    <IoIosCall />
    <span> 713.933.45.34</span>
   </div>

   {/* Login  */}
   <div className="div">
    <BsPersonFill />
    <span>Client Login</span>
   </div>
  </div>
 )
}

export default HeaderContact
