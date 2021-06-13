import React from 'react'
import { Link } from 'react-router-dom'

// internal files
import uniqid from 'uniqid'
import FeaturedProductImg from '../../assets/img/featuredProduct.png'

const FeaturedProduct = () => {
 const featuredProducts = [
  {
   img: FeaturedProductImg,
   header: 'AvcommNext™ 6000-PoE',
   text:
    'The latest ERPSv2 network ring design is more compatible with commercial communication equipment and can achieve flexible network expansion. ',
  },
  {
   img: FeaturedProductImg,
   header: 'AvcommNext™ 6000-PoE',
   text:
    'The latest ERPSv2 network ring design is more compatible with commercial communication equipment and can achieve flexible network expansion. ',
  },
  {
   img: FeaturedProductImg,
   header: 'AvcommNext™ 6000-PoE',
   text:
    'The latest ERPSv2 network ring design is more compatible with commercial communication equipment and can achieve flexible network expansion. ',
  },
  {
   img: FeaturedProductImg,
   header: 'AvcommNext™ 6000-PoE',
   text:
    'The latest ERPSv2 network ring design is more compatible with commercial communication equipment and can achieve flexible network expansion. ',
  },
 ]
 return (
  <div className="mt-20  w-10/12 mx-auto ">
   <h3 className = " text-2xl text-white pl-2 font-normal "> Featured Products</h3>
   <div className="featuredProducts py-4">
    {featuredProducts.map(({ img, header, text }) => (
     <div key={uniqid()} className="featuredProducts_product feature">
      <div className="feature_img">
       <img src={img} alt={`featured products ${uniqid()}`} />
      </div>
      <div className=" w-11/12 mx-auto feature_text ">
       <h4 className="feature_text_header">{header}</h4>
       <p className="feature_text_text">{text}</p>
       <Link to="/" className="feature_text_link ">
         <span className="block pr-8">Learn more</span>
         <span>
          <svg
           width="24"
           height="24"
           viewBox="0 0 24 24"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
          >
           <g clip-path="url(#clip0)">
            <path
             d="M0.937971 11.0625H20.7923L17.5033 7.78949C17.1363 7.42424 17.1349 6.83067 17.5002 6.46368C17.8654 6.09665 18.459 6.09529 18.826 6.4605L23.7247 11.3355C23.725 11.3358 23.7252 11.3361 23.7255 11.3364C24.0915 11.7016 24.0927 12.2971 23.7256 12.6636C23.7253 12.6639 23.725 12.6642 23.7248 12.6645L18.8261 17.5395C18.4592 17.9046 17.8656 17.9034 17.5003 17.5363C17.135 17.1693 17.1364 16.5757 17.5034 16.2105L20.7923 12.9375H0.937971C0.420191 12.9375 0.000471115 12.5178 0.000471115 12C0.000471115 11.4822 0.420191 11.0625 0.937971 11.0625Z"
             fill="white"
            />
           </g>
           <defs>
            <clipPath id="clip0">
             <rect
              width="24"
              height="24"
              fill="white"
              transform="matrix(-1 0 0 1 24 0)"
             />
            </clipPath>
           </defs>
          </svg>
         </span>
       </Link>
      </div>
     </div>
    ))}
   </div>
  </div>
 )
}

export default FeaturedProduct
