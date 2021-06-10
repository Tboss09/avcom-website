import React from 'react'

// External Files
import { AiOutlineMail } from 'react-icons/ai'
import { IoIosCall } from 'react-icons/io'

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
    <span></span>
   </div>

   {/* Login */}
   <div className="div">
    <span></span>
    <span></span>
   </div>
  </div>
 )
}

export default HeaderContact
