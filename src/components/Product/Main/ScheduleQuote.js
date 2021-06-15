import React from 'react'
import { Link } from 'react-router-dom'

const ScheduleQuote = () => {
 return (
  <div className="main_finalCta products_finalCta mt-10 ">
   <div className="w-4/12  mx-auto flex justify-between">
    <div className="font-secondary">
     <h2 className="text-2xl">Schedule a Demo</h2>
    </div>

    <div className="finalCta_btn products_finalCta_btn font-roboto">
     <Link to="/quote" className=" btn">
      Get a quote
     </Link>
    </div>
   </div>
  </div>
 )
}

export default ScheduleQuote
