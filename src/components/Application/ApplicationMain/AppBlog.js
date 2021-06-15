import React from 'react'
import UseApplication from '../UseApplication'
import uniqid from 'uniqid'
import StandingMount from '../../assets/img/StandingMount.png'

const AppBlog = () => {
 const { AirplaneLargeSvg, AirplaneMedium } = UseApplication()

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
   <div className="pt-10  ">
    <h2 className="text-2xl to-textGray w-6/12 text-center font-semibold mx-auto">
     AVCOMM aviation implemenationquipment and flexible network expansion;{' '}
    </h2>
   </div>
   <div className="flex flex-wrap w-10/12 mr-auto mb-10 mt-0  dark:text-white font-secondary">
    {products.map(({ img, text }) => (
     <div
      key={uniqid()}
      className="w-full   flex flex-col items-center md:w-1/2 mt-6 mb-10   lg:w-3/12 p-1"
     >
      <div>
       <img src={img} alt="A Standing mount" />
      </div>
      <p className="pt-6 text-center text-xl ">{text}</p>
     </div>
    ))}
   </div>
  </div>
 )
}

export default AppBlog
