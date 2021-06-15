import React from 'react'
import UseProducts from '../UseProducts'
import uniqid from 'uniqid'
const IndustrialNetwork = () => {
 const { products } = UseProducts()


 return (
  <>
   <div className="container mx-auto  pb-6 px-0 pt-0 bg-white dark:bg-gray-800">
    <div className="flex flex-wrap mb-12 mt-0  dark:text-white font-secondary">
     {products.map(({ img, text }) => (
      <div
       key={uniqid()}
       className="w-full   flex flex-col items-center md:w-1/2 mt-6 mb-10   lg:w-3/12 p-1"
      >
       <div>{img}</div>
       <p className="pt-6 text-center text-xl ">{text}</p>
      </div>
     ))}
    </div>
   </div>
  </>
 )
}

export default IndustrialNetwork
