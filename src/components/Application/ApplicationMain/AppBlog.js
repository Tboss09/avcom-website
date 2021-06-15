import React from 'react'
import UseApplication from '../UseApplication'
import uniqid from 'uniqid'

const AppBlog = () => {
 const {  AirplaneLargeSvg, AirplaneMedium, StandingMount } =
  UseApplication()

 const products = [
  {
   img: StandingMount,
   text: '400 DIN-Railvdvdvd Mount Series',
  },
  {
   img: StandingMount,
   text: '400 DIN-Rail Mount Series',
  },
  {
   img: StandingMount,
   text: '400 DIN-Rail Mount Series',
  },
  {
   img: StandingMount,
   text: '400 DIN-Rail Mount Series',
  },
  {
   img: StandingMount,
   text: '400 DIN-Rail Mount Series',
  },
  {
   img: StandingMount,
   text: '400 DIN-Rail Mount Series',
  },
  {
   img: StandingMount,
   text: '400 DIN-Rail Mount Series',
  },
  {
   img: StandingMount,
   text: '400 DIN-Rail Mount Series',
  },
 ]

 return (
  <div className="w-full mt-10   mx-auto font-secondary">
   <div className="flex flex-col items-center ">
    {/* heading and text*/}
    <div className="mt-4 mb-8 text-2xl font-semibold text-textGray text-center w-8/12">
     <h2>
      AVCOMM assists businesses in streamlining operations through better
      communication with their industrial{' '}
     </h2>
    </div>

    {/* heading and text*/}

    {/* Svg icon */}
    <div>{AirplaneLargeSvg}</div>
    {/* Svg icon */}

    {/* text */}
    <div className="mt-10 w-11/12">
     <h3 className="pb-4 font-semibold text-textGray ">
      AVCOMM assists businesses in streamlining operations through better{' '}
     </h3>
     <p>
      AvcommNext™ 6000-POE USES the latest ERPSv2 network loop design for better
      compatibility with commercial communications equipment and flexible
      network expansion; USB profile port, which can help with mass installation
      precision to ensure higher quality and stability AvcommNext™ 6000-POE USES
      the latest ERPSv2 network loop design for better compatibility with
      commercial communications equipment and flexible network expansion; USB
      profile port, which can help with mass installation precision to ensure
      higher quality and stability..AvcommNext™ 6000-POE USES
     </p>
    </div>
    {/* text */}
    <div className="mt-10">{AirplaneMedium}</div>
    {/* text */}
    <div className="mt-10 w-11/12">
     <h3 className="pb-4 font-semibold text-textGray ">
      AVCOMM assists businesses in streamlining operations through better{' '}
     </h3>
     <p>
      AvcommNext™ 6000-POE USES the latest ERPSv2 network loop design for better
      compatibility with commercial communications equipment and flexible
      network expansion; USB profile port, which can help with mass installation
      precision to ensure higher quality and stability AvcommNext™ 6000-POE USES
      the latest ERPSv2 network loop design for better compatibility with
      commercial communications equipment and flexible network expansion; USB
      profile port, which can help with mass installation precision to ensure
      higher quality and stability..AvcommNext™ 6000-POE USES
     </p>
    </div>
   </div>

   <div className="flex flex-wrap mb-12 mt-0  dark:text-white font-secondary">
    {products.map(({ img, text }) => (
     <div
      key={uniqid()}
      className="w-full   flex flex-col items-center md:w-1/2 mt-6 mb-10   lg:w-3/12 p-1"
     >
      <div>{StandingMount}</div>
      <p className="pt-6 text-center text-xl ">{text}</p>
     </div>
    ))}
   </div>
  </div>
 )
}

export default AppBlog
