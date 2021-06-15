import React from 'react'

const Resource = () => {
 return (
  <div>
   {/* Text  */}
   <div className="ml-10 mt-10 font-secondary">
    <h2 className="text-5xl leading-snug font-semibold">Press Release</h2>
    <p className="text-base font-normal">Latest AVCOMM press release</p>
   </div>
   {/* Text  */}
   {/* Search COntent */}

   <div className="flex justify-between">
    <div className="mr-3 flex items-center">
     <p>Browse by:</p>
     <div className="select bg-red-400" tabindex="1">
      <input className="selectopt" name="test" type="radio" id="opt1" checked />
      <label for="opt1" className="option">
       Most Popular
      </label>
      <input className="selectopt" name="test" type="radio" id="opt1" checked />
      <label for="opt1" className="option">
       Second Popular
      </label>
     </div>
    </div>
    <div className="mr-3">
     <a
      className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
      href="/"
     >
      Pill
     </a>
    </div>
   </div>
   {/* Search COntent */}
  </div>
 )
}

export default Resource
