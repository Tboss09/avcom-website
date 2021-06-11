import React from 'react'
import { Link } from 'react-router-dom'

const IndustrialNetwork = () => {
 const [style, setStyle] = React.useState(false)
 return (
  <div
   className={`box ${style && 'box_open'}  `}
   onMouseEnter={e => {
    setStyle(true)
   }}
   onMouseLeave={e => {
    setStyle(false)
   }}
  >
   <span className="box_svg ">
    <svg
     width="64"
     height="64"
     viewBox="0 0 64 64"
     fill="none"
     xmlns="http://www.w3.org/2000/svg"
    >
     <g clipPath="url(#clip0)">
      <path
       d="M61.6515 7.12286H48.701C48.1832 7.12286 47.7635 7.54261 47.7635 8.06036C47.7635 8.57811 48.1832 8.99786 48.701 8.99786H61.6515C61.9125 8.99786 62.1249 9.21024 62.1249 9.47124V12.2782H59.7352C59.2175 12.2782 58.7977 12.698 58.7977 13.2157C58.7977 13.7335 59.2175 14.1532 59.7352 14.1532H62.1249V15.9449H59.7352C59.2175 15.9449 58.7977 16.3646 58.7977 16.8824C58.7977 17.4001 59.2175 17.8199 59.7352 17.8199H62.1249V19.6115H59.7352C59.2175 19.6115 58.7977 20.0312 58.7977 20.549C58.7977 21.0667 59.2175 21.4865 59.7352 21.4865H62.1249V23.2781H59.7352C59.2175 23.2781 58.7977 23.6979 58.7977 24.2156C58.7977 24.7334 59.2175 25.1531 59.7352 25.1531H62.1249V27.9601C62.1249 28.2211 61.9125 28.4335 61.6515 28.4335H13.142C12.6242 28.4335 12.2045 28.8532 12.2045 29.371C12.2045 29.8887 12.6242 30.3085 13.142 30.3085H31.061V38.1741H29.2637C28.746 38.1741 28.3262 38.5939 28.3262 39.1116V49.2195H22.509C21.2875 49.2195 20.2937 50.2132 20.2937 51.4347V51.9542H10.6956V50.7221C10.6956 49.7209 9.8811 48.9064 8.87985 48.9064H4.5406C3.53935 48.9064 2.72485 49.7209 2.72485 50.7221V55.0614C2.72485 56.0626 3.53935 56.8771 4.5406 56.8771H8.87985C9.8811 56.8771 10.6956 56.0626 10.6956 55.0614V53.8292H20.2936V54.3487C20.2936 55.5702 21.2874 56.564 22.5089 56.564H41.4879C42.7094 56.564 43.7031 55.5702 43.7031 54.3487V53.8292H53.3229V55.0614C53.3229 56.0626 54.1375 56.8771 55.1386 56.8771H59.4779C60.4791 56.8771 61.2936 56.0626 61.2936 55.0614V50.7221C61.2936 49.7209 60.4791 48.9064 59.4779 48.9064H55.1386C54.1374 48.9064 53.3229 49.7209 53.3229 50.7221V51.9542H43.7031V51.4347C43.7031 50.2132 42.7094 49.2195 41.4879 49.2195H35.6706V39.1116C35.6706 38.5939 35.2509 38.1741 34.7331 38.1741H32.9359V30.3085H61.6514C62.9462 30.3085 63.9997 29.255 63.9997 27.9601V9.47124C63.9999 8.17636 62.9464 7.12286 61.6515 7.12286ZM8.8206 55.0021H4.59985V50.7814H8.8206V55.0021ZM55.198 50.7814H59.4187V55.0021H55.198V50.7814ZM35.5949 51.0945H41.488C41.6756 51.0945 41.8282 51.2471 41.8282 51.4347V54.3486C41.8282 54.5362 41.6756 54.6889 41.488 54.6889H22.5089C22.3212 54.6889 22.1686 54.5362 22.1686 54.3486V51.4347C22.1686 51.2471 22.3212 51.0945 22.5089 51.0945H28.402C29.394 51.0945 30.2011 50.2874 30.2011 49.2952V40.0491H33.7956V49.2952C33.7957 50.2874 34.6029 51.0945 35.5949 51.0945Z"
       fill="white"
      />
      <path
       d="M10.3296 29.371C10.3296 28.8532 9.90987 28.4335 9.39213 28.4335H2.34838C2.08738 28.4335 1.875 28.2211 1.875 27.9601V9.47124C1.875 9.21024 2.08738 8.99786 2.34838 8.99786H44.9511C45.4689 8.99786 45.8886 8.57811 45.8886 8.06036C45.8886 7.54261 45.4689 7.12286 44.9511 7.12286H2.34838C1.0535 7.12286 0 8.17636 0 9.47124V27.9602C0 29.2551 1.0535 30.3086 2.34838 30.3086H9.39225C9.90987 30.3085 10.3296 29.8887 10.3296 29.371Z"
       fill="white"
      />
      <path
       d="M11.7812 13.0197H7.22783C6.71008 13.0197 6.29033 13.4394 6.29033 13.9572V16.0371H5.29883C4.78108 16.0371 4.36133 16.4568 4.36133 16.9746V23.4742C4.36133 23.9919 4.78108 24.4117 5.29883 24.4117H13.7102C14.228 24.4117 14.6477 23.9919 14.6477 23.4742V16.9746C14.6477 16.4568 14.228 16.0371 13.7102 16.0371H12.7187V13.9572C12.7187 13.4394 12.299 13.0197 11.7812 13.0197ZM12.7727 17.9121V22.5367H6.23633V17.9121H7.22783C7.74558 17.9121 8.16533 17.4923 8.16533 16.9746V14.8947H10.8437V16.9746C10.8437 17.4923 11.2635 17.9121 11.7812 17.9121H12.7727Z"
       fill="white"
      />
      <path
       d="M24.7346 13.0197H20.1812C19.6634 13.0197 19.2437 13.4394 19.2437 13.9572V16.0371H18.2522C17.7344 16.0371 17.3147 16.4568 17.3147 16.9746V23.4742C17.3147 23.9919 17.7344 24.4117 18.2522 24.4117H26.6636C27.1813 24.4117 27.6011 23.9919 27.6011 23.4742V16.9746C27.6011 16.4568 27.1813 16.0371 26.6636 16.0371H25.6721V13.9572C25.6721 13.4394 25.2523 13.0197 24.7346 13.0197ZM25.7261 17.9121V22.5367H19.1897V17.9121H20.1812C20.6989 17.9121 21.1187 17.4923 21.1187 16.9746V14.8947H23.7971V16.9746C23.7971 17.4923 24.2168 17.9121 24.7346 17.9121H25.7261Z"
       fill="white"
      />
      <path
       d="M37.6877 13.0197H33.1343C32.6166 13.0197 32.1968 13.4394 32.1968 13.9572V16.0371H31.2053C30.6876 16.0371 30.2678 16.4568 30.2678 16.9746V23.4742C30.2678 23.9919 30.6876 24.4117 31.2053 24.4117H39.6167C40.1344 24.4117 40.5542 23.9919 40.5542 23.4742V16.9746C40.5542 16.4568 40.1344 16.0371 39.6167 16.0371H38.6251V13.9572C38.6252 13.4394 38.2056 13.0197 37.6877 13.0197ZM38.6793 17.9121V22.5367H32.1428V17.9121H33.1343C33.6521 17.9121 34.0718 17.4923 34.0718 16.9746V14.8947H36.7502V16.9746C36.7502 17.4923 37.1699 17.9121 37.6877 17.9121H38.6793Z"
       fill="white"
      />
      <path
       d="M50.6411 13.0197H46.0877C45.5699 13.0197 45.1502 13.4394 45.1502 13.9572V16.0371H44.1587C43.6409 16.0371 43.2212 16.4568 43.2212 16.9746V23.4742C43.2212 23.9919 43.6409 24.4117 44.1587 24.4117H52.5701C53.0878 24.4117 53.5076 23.9919 53.5076 23.4742V16.9746C53.5076 16.4568 53.0878 16.0371 52.5701 16.0371H51.5786V13.9572C51.5786 13.4394 51.1588 13.0197 50.6411 13.0197ZM51.6326 17.9121V22.5367H45.0962V17.9121H46.0877C46.6054 17.9121 47.0252 17.4923 47.0252 16.9746V14.8947H49.7036V16.9746C49.7036 17.4923 50.1233 17.9121 50.6411 17.9121H51.6326Z"
       fill="white"
      />
     </g>
     <defs>
      <clipPath id="clip0">
       <rect width="64" height="64" fill="white" />
      </clipPath>
     </defs>
    </svg>
   </span>

   {/* Industrial networking */}
   <div className="box_text">
    <h2 className="box_text-header">Industrial Networking</h2>

    <Link
     to="products"
     className={`box_text-link ${style ? 'block' : 'hidden'}  right-0 left-10 `}
    >
     View Products
    </Link>
   </div>
  </div>
 )
}

export default IndustrialNetwork