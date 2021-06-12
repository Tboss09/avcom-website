import React from 'react'
import { Link } from 'react-router-dom'

const HeaderContact = () => {
 return (
  <div className="flex justify-end pr-6 z-50 bg-gray-300 h-12 items-center ">
   {/* Email */}
   <div className="flex items-center">
    <span>
     <svg
      class="h-8 w-8 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
     >
      <path
       stroke-linecap="round"
       stroke-linejoin="round"
       stroke-width="2"
       d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
     </svg>
    </span>
    <a href="mailto:sales@avcomm.us">Become a reseller :sales@avcomm.us</a>
   </div>
   {/* Email */}

   {/* Profile */}
   <div className="flex items-center">
    <span>
     <svg
      class="h-8 w-8 text-gray-500"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
     >
      {' '}
      <path stroke="none" d="M0 0h24v24H0z" /> <circle cx="12" cy="7" r="4" />{' '}
      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
     </svg>
    </span>
    <p>713.933.4534</p>
   </div>

   <div className="flex items-center">
    <span>
     <svg
      class="h-7 w-7 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
     >
      <path
       stroke-linecap="round"
       stroke-linejoin="round"
       stroke-width="2"
       d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
     </svg>
    </span>
    <p>Client Login</p>
   </div>
  </div>
 )
}

export default HeaderContact
