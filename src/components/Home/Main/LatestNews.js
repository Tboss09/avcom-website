import React from 'react'
import uniqid from 'uniqid'
import UseBodyText from './UseMain'
const LatestNews = () => {
 const { allNews } = UseBodyText()
 return (
  <div className="  w-11/12 mx-auto">
   <h4 className="text-4xl pb-6">Latest Industry News</h4>
   <div className="newsGroup flex  w-11/12 mx-auto  ">
    {allNews.map(({ img, header, text }) => (
     <div
      className=" mx-auto w-80  shadow-xl justify-between h-96   flex flex-col items-center "
      key={uniqid()}
     >
      <img
       src={img}
       alt="Blog Caption  "
       className="object-cover h-52 w-full"
      />
      <h2>{header}</h2>
      <p className="text-center">{text}</p>
     </div>
    ))}
   </div>
  </div>
 )
}

export default LatestNews
