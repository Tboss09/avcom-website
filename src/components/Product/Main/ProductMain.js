import React from 'react'
import IndustrialNetwork from './IndustrialNetwork'
import ScheduleQuote from './ScheduleQuote'
import SideBar from './SideBar'

const ProductMain = () => {
 return (
     <>
  <div className="flex items-start w-11/12 mx-auto">
   <SideBar />
   <IndustrialNetwork />
   

  </div>
   <ScheduleQuote/>
     </>
 )
}

export default ProductMain
