import React from 'react'

const HeaderContact = () => {
 return (
  <div className="bg-black ">
   <div className="flex justify-between w-5/12 ml-auto  pr-6 z-50  h-12 items-center ">
    {/* Email */}
    <div className="flex items-center">
     <span>
      <svg
       className="h-8 w-8 text-gray-500"
       fill="none"
       viewBox="0 0 24 24"
       stroke="currentColor"
      >
       <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
       />
      </svg>
     </span>
     <a href="mailto:sales@avcomm.us" className="text-sm text-gray-400">
      Become a reseller :sales@avcomm.us
     </a>
    </div>
    {/* Email */}

    {/* Profile */}
    <div className="flex items-center ">
     <span>
      <svg
       className="h-8 w-8 text-gray-500"
       width="24"
       height="24"
       viewBox="0 0 24 24"
       strokeWidth="2"
       stroke="currentColor"
       fill="none"
       strokeLinecap="round"
       strokeLinejoin="round"
      >
       {' '}
       <path stroke="none" d="M0 0h24v24H0z" /> <circle cx="12" cy="7" r="4" />{' '}
       <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
      </svg>
     </span>
     <p className="text-sm text-gray-400">713.933.4534</p>
    </div>

    <div className="flex items-center">
     <span>
     <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00113 0C5.7154 0 3.84692 1.86847 3.84692 4.1542C3.84692 6.43993 5.7154 8.3084 8.00113 8.3084C10.2869 8.3084 12.1553 6.43993 12.1553 4.1542C12.1553 1.86847 10.2869 0 8.00113 0Z" fill="#BABABA"/>
<path d="M15.1305 11.6281C15.0216 11.356 14.8765 11.102 14.7132 10.8662C13.8788 9.63259 12.5908 8.81627 11.1396 8.61673C10.9582 8.5986 10.7586 8.63485 10.6135 8.74371C9.85156 9.30607 8.94455 9.59631 8.00121 9.59631C7.05788 9.59631 6.15086 9.30607 5.38895 8.74371C5.24381 8.63485 5.04427 8.58044 4.86288 8.61673C3.41162 8.81627 2.10551 9.63259 1.28919 10.8662C1.12593 11.102 0.980788 11.3741 0.871968 11.6281C0.817558 11.7369 0.835683 11.8639 0.890093 11.9728C1.03523 12.2267 1.21662 12.4807 1.37989 12.6984C1.63384 13.0431 1.90596 13.3514 2.21437 13.6417C2.46832 13.8956 2.75857 14.1315 3.04885 14.3673C4.48194 15.4376 6.20531 15.9999 7.98309 15.9999C9.76087 15.9999 11.4842 15.4376 12.9173 14.3673C13.2076 14.1496 13.4978 13.8956 13.7518 13.6417C14.0421 13.3514 14.3323 13.043 14.5863 12.6984C14.7677 12.4626 14.931 12.2267 15.0761 11.9728C15.1667 11.8639 15.1849 11.7369 15.1305 11.6281Z" fill="#BABABA"/>
</svg>

     </span>
     <p className="text-sm pl-2 text-gray-400">Client Login</p>
    </div>
   </div>
  </div>
 )
}

export default HeaderContact
