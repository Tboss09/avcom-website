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
  <footer className="mt-10  bg-footer pt-10 text-textBlack">
   <div className="flex  w-12/12  items-start justify-between  mx-10 ">
    {/* Footer Logo and address*/}
    <div className="w-1/4  flex justify-start flex-col">
     <div>
      <Link to="#top">
       <img src={Logo} alt="Company's Logo" />
      </Link>
     </div>
     {/* Contact Address */}
     <div className="pt-2">
      {addressInfo.map(({ svg, text }) => (
       <div key={uniqid()} className="flex items-center pb-2">
        <span>{svg}</span>
        <span className="pl-1 text-textGray text-sm">{text}</span>
       </div>
      ))}
     </div>
    </div>

    {/* Lots Of Links */}
    <div className="w-1/2 flex flex-col font-secondary text-textGray   justify-between">
     {/* ABout us and Products Links */}
     <div className="pb-10 flex justify-around ">
      <div>
       <p className="font-semibold   text-textBlack ">About us</p>
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

      <div className="flex   items-start  justify-end">
       <div>
        <p className="font-semibold text-textBlack ">Products</p>
        {/* Links */}
        <div className="flex flex-col ">
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
     </div>

     {/* Solutions and resources*/}
     <div className="flex   items-start justify-around">
      <div>
       <p className="font-semibold text-textBlack ">Solutions</p>
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

      <div className="flex   items-start flex-col justify-start">
       <div>
        <p className="font-semibold text-textBlack ">Resources</p>
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
    </div>

    {/* Case Studies */}
    <div className="w-1/4 flex items-end flex-col ">
     <div>
      <p className="font-semibold text-textBlack text-textBlack">Case Studies</p>
      <span>
       <Link to="industrialcomputing" className="text-textGray">
        Industrial computing
       </Link>
      </span>
     </div>
    </div>
   </div>
   <div className="copyright text-center pt-10 pb-1 text-sm">
    <p>
     <Link to="privacy&cookies">Privacy & Cookies</Link>|
     <Link to="termsofuse">Term of Use</Link>
    </p>
    <p>2020 AVCOMM</p>
   </div>
  </footer>
 )
}

export default Footer
