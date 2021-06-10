import React from 'react'

// External Files
import { AiOutlineMail } from 'react-icons/ai'

const HeaderContact = () => {
 return (
  <div>
   {/* Email */}
   <div className="div">
     <AiOutlineMail />

    <span></span>
   </div>

   {/* telephone */}
   <div className="div">
    <span></span>
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
