import React from 'react'
import { Link } from 'react-router-dom'

const FinalCta = () => {
 return (
  <div className="main_finalCta ">
   <div className="finalCta">
    <h2>Final CTA for user to Get a Quote</h2>
    <p>What are you waiting for? It's time to get started.</p>
   </div>

   <div className="finalCta_btn">
    <Link
     to="/quote"
     className=" btn "
    >
     Get a quote
    </Link>
   </div>
  </div>
 )
}

export default FinalCta
