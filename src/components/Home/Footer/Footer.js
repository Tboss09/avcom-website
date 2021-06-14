import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/logo.png'

// external files
import uniqid from 'uniqid'
import UseFooter from './UseFooter'
const Footer = () => {
 const {
  aboutUsLinks,
  addressInfo,
  productLinks,
  resourceLinks,
  solutionsLinks,
 } = UseFooter()
 return (
  <footer className="mt-10  bg-footer pt-10">
   <div className="flex  w-10/12  items-start justify-between  mx-auto ">
    {/* Footer Logo and address*/}
    <div className="w-1/4">
     <div>
      <Link to="#top">
       <img src={Logo} alt="Company's Logo" />
      </Link>
     </div>
     {/* Contact Address */}
    </div>

    {/* Lots Of Links */}
    <div className="w-1/2">
     {/* ABout us and Products Links */}
     <div className="pb-10 flex justify-between bg-red-500">
      <div>
       <p className="font-extrabold">About us</p>
       <div className="flex  flex-col">
        {aboutUsLinks.map(({ text }) => {
         let newText = text.split(/\s/).join('')
         return (
          <span key={uniqid()}>
           <Link to={(newText = newText.toLowerCase())}>{text}</Link>
          </span>
         )
        })}
       </div>
      </div>
      <div>
       <p className="font-bold">Products</p>
       {/* Links */}
       <div className="flex flex-col">
        {productLinks.map(({ text }) => {
         let newText = text.split(/\s/).join('')
         return (
          <span key={uniqid()}>
           <Link to={(newText = newText.toLowerCase())}>{text}</Link>
          </span>
         )
        })}
       </div>
      </div>
     </div>

     {/* Solutions and resources*/}
     <div className="flex justify-between">
      <div>
       <p className="font-extrabold">Solutions</p>
       <div className="flex flex-col">
        {solutionsLinks.map(({ text }) => {
         let newText = text.split(/\s/).join('')
         return (
          <span key={uniqid()}>
           <Link to={(newText = newText.toLowerCase())}>{text}</Link>
          </span>
         )
        })}
       </div>
      </div>

      <div>
       <p>Resources</p>

       <div className="flex flex-col">
        {resourceLinks.map(({ text }) => {
         let newText = text.split(/\s/).join('')
         return (
          <span key={uniqid()}>
           <Link to={(newText = newText.toLowerCase())}>{text}</Link>
          </span>
         )
        })}
       </div>
      </div>
     </div>
    </div>

    {/* Case Studies */}
    <div className="w-1/4 flex items-end flex-col ">
     <div>
      <p className="font-bold">Case Studies</p>
      <span>
       <Link to="industrialcomputing">Industrial computing</Link>
      </span>
     </div>
    </div>
   </div>
  </footer>
 )
}

export default Footer
