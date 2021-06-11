import React from 'react'
import { Link } from 'react-router-dom'
import HomeBody from './Body/HomeBody'
import Boxes from './Boxes/Boxes'
// import Boxes from './Boxes'

const Main = () => {
 return (
  <main className="main relative">
   <div className="main_bg flex items-center right-0 left-0"></div>

   <div className="textElement main__header  pt-32 text-white  w-7/12 ml-20">
    <div className="main__header--text  ">
     <h1 className="text-5xl font-normal leading-normal">
      What is Digital Migration'?
     </h1>
     <p className="font-light  w-8/12  text-xl pl-2">
      AVCOMM assists businesses in streamlining operations through better
      communication with their industrial equipment{' '}
     </p>
    </div>

    <div className="main__header--cta pt-6 w-3/12    ">
     <Link
      type="button"
      to="/contact"
      className="py-3 px-4 rounded bg-white    text-text w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none 
      "
     >
      Contact us
     </Link>
    </div>
   </div>

   {/* BOxes */}
   <Boxes />
   {/* BOxes */}
   {/* Body */}
   <HomeBody />
   {/* Body */}
  </main>
 )
}

export default Main
