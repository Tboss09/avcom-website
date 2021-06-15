import React from 'react'
import UseProducts from '../UseProducts'
import uniqid from 'uniqid'

const SideBar = () => {
 const {  links } = UseProducts ()

 return (

  <div>
   <div className="relative bg-white dark:bg-gray-800">
    <div className="flex flex-col sm:flex-row sm:justify-around">
     <div className="w-96    h-screen">
      <nav className="mt-10 px-6 font-secondary ">
       <p className="text-base font-semibold font-secondary mb-6">
        Industrial Networking
       </p>
       <div className="bg-gray-100 text-link ">
      {links.map(({text}) => (

<a key = {uniqid ()}
className="hover:text-gray-800 border-b-2 mb-2 border-white  flex items-center p-2 my-0 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 whitespace-nowrap      text-gray-600 dark:text-gray-400 rounded-lg "
href="/"
>
<span className="mx-4 text-lg font-normal">{text}</span>
<span className="flex-grow text-right"></span>
</a>

      ))}
       </div>
      </nav>
     </div>
    </div>
   </div>
  </div>
 
 )
}

export default SideBar
