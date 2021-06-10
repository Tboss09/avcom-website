import React from 'react'

// External Files
import { AiOutlineMail } from 'react-icons/ai'
import { IoIosCall } from 'react-icons/io'
import { BsPersonFill } from 'react-icons/bs'

const HeaderContact = () => {
 return (
  <div
   className=" flex bg-black pr-28 text-white
      h-12  items-center  justify-end "
  >
   {/* Email */}
   <div className="div pr-10 flex items-center    ">
    <AiOutlineMail size="1.6em" className="text-gray-300 mr-1" />
    <span className="text-sm font-light text-gray-300">
     Become a reseller: sales@avcomm.us
    </span>
   </div>

   {/* telephone */}
   <div className="div flex pr-10 items-center  ">
    <IoIosCall size="1.6em" className="text-gray-300 mr-1" />
    <span className="text-sm font-light text-gray-300"> 713.933.4534</span>
   </div>

   {/* Login  */}
   <div className="div flex  items-center mr-1  ">
    <BsPersonFill size="1.3em" className="text-gray-300 mr-1" />
    <span className="text-sm font-light text-white">Client Login</span>
   </div>
  </div>
 )
}

export default HeaderContact
