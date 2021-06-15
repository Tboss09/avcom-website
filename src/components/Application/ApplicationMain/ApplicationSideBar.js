import React from 'react'
import { Link } from 'react-router-dom'
import uniqid from 'uniqid'
import UseApplication from '../UseApplication'

const ApplicationSideBar = () => {
 const { links, news } = UseApplication()
 return (
  <aside className="relative bg-white  dark:bg-gray-800">
   <div className="flex flex-col sm:flex-row mb-16 sm:justify-around ">
    <div className="w-80    h-96 ">
     <nav className="mt-10 px-6 font-secondary ">
      <p className="text-base font-semibold font-secondary mb-6">
       Industrial Networking
      </p>
      <div className="bg-gray-100    text-link ">
       {links.map(({ text }) => (
        <Link
         key={uniqid()}
         className=" first:bg-btn first:text-white  first:hover:text-white    border-b-2 mb-2 border-white  flex items-center p-2 my-0 transition-colors dark:hover:text-white dark:hover:bg-gray-600   duration-200 whitespace-nowrap      text-gray-600 dark:text-gray-400  "
         to="#"
        >
         <span className="mx-4 text-lg font-normal">{text}</span>
         <span className="flex-grow text-right"></span>
        </Link>
       ))}
      </div>
     </nav>
    </div>
   </div>

   {/* Related news */}

   <div className="container w-80 mb-16    flex flex-col mx-auto  font-secondary  justify-center    ">
    <h2 className="mb-3 text-base pl-6  text-link font-semibold">Related News</h2>
    {/* All News Shows Here */}
    <ul className="flex flex-col pl-9  gap-4 ">
     {news.map(({ svg, text }) => (
      <li className="flex flex-row " key={uniqid()}>
       <div className="select-none cursor-pointer flex flex-1 items-center ">
        <div className="flex flex-col   w-10 h-10 justify-center items-center mr-4">
         <Link to="#" className="block relative">
          {svg}
         </Link>
        </div>
        <div className="flex-1 pl-1 mr-4">
         <div className=" dark:text-white text-sm font-secondary font-normal text-btn">
          {text}
         </div>
        </div>
       </div>
      </li>
     ))}
    </ul>
   </div>

   {/* Related news */}

   {/* White papers */}

   <div className="py-2 w-80 mx-auto font-secondary pl-6">
    <h2 className="text-base  font-semibold leading-9 w-full  text-textGray mb-0 ">
     White Papers
    </h2>
    <ul className="flex items-start gap-2 flex-wrap">
     <li className="w-10/12 ">
      <Link to="/">
       <p className="text-sm font-normal   leading-6 text-text">
        How Protocol Conversion Addresses IIoT Challenges.
       </p>
      </Link>
     </li>

     <li className="w-10/12">
      <Link to="/">
       <p className="text-sm font-normal   leading-6 text-text">
        How Protocol Conversion Addresses IIoT Challenges.
       </p>
      </Link>
     </li>
    </ul>
   </div>

   {/* White papers */}
  </aside>
 )
}

export default ApplicationSideBar
