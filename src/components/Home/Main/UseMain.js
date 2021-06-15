import React from 'react'
import Blog from '../../assets/img/Blog.png'

const UseBodyText = () => {
 const BoxSvg = [
  <svg
   key="BoxSvg"
   width="32"
   height="28"
   viewBox="0 0 32 28"
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
  >
   <path
    d="M32 15.7437V16.4109V21.1268V26.3671C32 26.7976 31.6509 27.1467 31.2204 27.1467H0.779586C0.349099 27.1467 0 26.7976 0 26.3671V21.1268V16.4109V15.7437H14.033V16.5504C14.033 17.3359 14.6698 17.9727 15.4553 17.9727H16.5447C17.3302 17.9727 17.967 17.3359 17.967 16.5504V15.7437H32ZM0 14.1845V13.5738V9.91179V7.10793C0 6.67744 0.349099 6.32834 0.779586 6.32834H8.09351V5.09472C8.09351 2.75222 9.99258 0.853149 12.3351 0.853149H19.6648C22.0074 0.853149 23.9065 2.75222 23.9065 5.09488V6.3285H31.2204C31.6509 6.3285 32 6.6776 32 7.10808V9.91179V13.5738V14.1845H17.967V13.1722C17.967 12.3867 17.3302 11.7499 16.5447 11.7499H15.4553C14.6698 11.7499 14.033 12.3867 14.033 13.1722V14.1845H0ZM9.65268 6.32834H22.3473V5.09472C22.3473 3.61554 21.1439 2.41217 19.6649 2.41217H12.3351C10.8561 2.41217 9.65268 3.61554 9.65268 5.09472V6.32834Z"
    fill="#112875"
   />
  </svg>,
 ]

 const PeopleSvg = [
  <svg
   key="peoplesvg"
   width="32"
   height="28"
   viewBox="0 0 32 28"
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
  >
   <path
    d="M16 10.9144C19.003 10.9144 21.4375 8.47998 21.4375 5.47693C21.4375 2.47388 19.003 0.0394287 16 0.0394287C12.997 0.0394287 10.5625 2.47388 10.5625 5.47693C10.5625 8.47998 12.997 10.9144 16 10.9144Z"
    fill="#112875"
   />
   <path
    d="M27 10.9143C28.8985 10.9143 30.4375 9.37529 30.4375 7.47681C30.4375 5.57833 28.8985 4.03931 27 4.03931C25.1015 4.03931 23.5625 5.57833 23.5625 7.47681C23.5625 9.37529 25.1015 10.9143 27 10.9143Z"
    fill="#112875"
   />
   <path
    d="M5 10.9143C6.89848 10.9143 8.4375 9.37529 8.4375 7.47681C8.4375 5.57833 6.89848 4.03931 5 4.03931C3.10152 4.03931 1.5625 5.57833 1.5625 7.47681C1.5625 9.37529 3.10152 10.9143 5 10.9143Z"
    fill="#112875"
   />
   <path
    d="M8.38688 14.0013C7.03375 12.8926 5.80831 13.0394 4.24375 13.0394C1.90375 13.0394 0 14.9319 0 17.2575V24.0831C0 25.0931 0.824375 25.9144 1.83812 25.9144C6.21475 25.9144 5.6875 25.9936 5.6875 25.7256C5.6875 20.889 5.11462 17.3421 8.38688 14.0013Z"
    fill="#112875"
   />
   <path
    d="M17.4881 13.0643C14.7553 12.8364 12.38 13.067 10.3312 14.7581C6.90263 17.5043 7.56244 21.202 7.56244 25.7256C7.56244 26.9224 8.53619 27.9143 9.75119 27.9143C22.9438 27.9143 23.4689 28.3399 24.2512 26.6075C24.5078 26.0216 24.4374 26.2078 24.4374 20.6031C24.4374 16.1515 20.5829 13.0643 17.4881 13.0643Z"
    fill="#112875"
   />
   <path
    d="M27.7562 13.0394C26.183 13.0394 24.9643 12.8941 23.613 14.0012C26.8608 17.3172 26.3124 20.6222 26.3124 25.7256C26.3124 25.9952 25.8747 25.9144 30.0962 25.9144C31.1462 25.9144 31.9999 25.0637 31.9999 24.0181V17.2575C31.9999 14.9319 30.0962 13.0394 27.7562 13.0394Z"
    fill="#112875"
   />
  </svg>,
 ]

 const sideElements = [
  {
   svgIcon: BoxSvg,
   className: 'top-6',
   text: '2,000+ Products',
  },

  {
   svgIcon: PeopleSvg,
   className: 'top-36',
   text: '400 Customers',
  },

  {
   svgIcon: BoxSvg,
   className: 'top-64',
   text: '2,000+ Products',
  },

  {
   svgIcon: PeopleSvg,
   className: 'top-95 ',
   text: '400 Customers',
  },
 ]
 const allNews = [
  {
   img: Blog,
   header: 'Blog Heading',
   text:
    'The latest ERPSv2 network ring design is more compatible with commercial communication equipment and can achieve flexible network expansion. ',
   link: 'heading',
  },
  {
   img: Blog,
   header: 'Blog Heading',
   text:
    'The latest ERPSv2 network ring design is more compatible with commercial communication equipment and can achieve flexible network expansion. ',
   link: 'heading',
  },
  {
   img: Blog,
   header: 'Blog Heading',
   text:
    'The latest ERPSv2 network ring design is more compatible with commercial communication equipment and can achieve flexible network expansion. ',
   link: 'heading',
  },
  {
   img: Blog,
   header: 'Blog Heading',
   text:
    'The latest ERPSv2 network ring design is more compatible with commercial communication equipment and can achieve flexible network expansion. ',
   link: 'heading',
  },
  {
   img: Blog,
   header: 'Blog Heading',
   text:
    'The latest ERPSv2 network ring design is more compatible with commercial communication equipment and can achieve flexible network expansion. ',
   link: 'heading',
  },
  {
   img: Blog,
   header: 'Blog Heading',
   text:
    'The latest ERPSv2 network ring design is more compatible with commercial communication equipment and can achieve flexible network expansion. ',
   link: 'heading',
  },
  {
   img: Blog,
   header: 'Blog Heading',
   text:
    'The latest ERPSv2 network ring design is more compatible with commercial communication equipment and can achieve flexible network expansion. ',
   link: 'heading',
  },
  {
   img: Blog,
   header: 'Blog Heading',
   text:
    'The latest ERPSv2 network ring design is more compatible with commercial communication equipment and can achieve flexible network expansion. ',
   link: 'heading',
  },
  {
   img: Blog,
   header: 'Blog Heading',
   text:
    'The latest ERPSv2 network ring design is more compatible with commercial communication equipment and can achieve flexible network expansion. ',
   link: 'heading',
  },
  {
   img: Blog,
   header: 'Blog Heading',
   text:
    'The latest ERPSv2 network ring design is more compatible with commercial communication equipment and can achieve flexible network expansion. ',
   link: 'heading',
  },
  {
   img: Blog,
   header: 'Blog Heading',
   text:
    'The latest ERPSv2 network ring design is more compatible with commercial communication equipment and can achieve flexible network expansion. ',
   link: 'heading',
  },
  {
   img: Blog,
   header: 'Blog Heading',
   text:
    'The latest ERPSv2 network ring design is more compatible with commercial communication equipment and can achieve flexible network expansion. ',
   link: 'heading',
  },
 ]
 const ReadArticleSvg = [
  <svg
   width="11"
   height="12"
   viewBox="0 0 11 12"
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
  >
   <g clip-path="url(#clip0)">
    <path
     d="M10.874 5.91374C10.8738 5.91361 10.8737 5.91346 10.8736 5.91333L8.62838 3.67896C8.46018 3.51157 8.18812 3.51219 8.0207 3.68042C7.85329 3.84862 7.85394 4.12068 8.02214 4.28808L9.52957 5.78821H0.429688C0.192371 5.78821 0 5.98058 0 6.21789C0 6.45521 0.192371 6.64758 0.429688 6.64758H9.52954L8.02216 8.14771C7.85396 8.31511 7.85331 8.58717 8.02072 8.75537C8.18815 8.92361 8.46023 8.92419 8.6284 8.75683L10.8736 6.52246C10.8737 6.52233 10.8738 6.52218 10.874 6.52205C11.0423 6.35408 11.0417 6.08115 10.874 5.91374Z"
     fill="#112875"
    />
   </g>
   <defs>
    <clipPath id="clip0">
     <rect
      width="11"
      height="11"
      fill="white"
      transform="translate(0 0.717773)"
     />
    </clipPath>
   </defs>
  </svg>,
 ]

 function SampleNextArrow(props) {
  const { className,  onClick } = props
  return (
   <div className={className} onClick={onClick}>
    <svg
     width="43"
     height="44"
     viewBox="0 0 43 44"
     fill="none"
     xmlns="http://www.w3.org/2000/svg"
    >
     <g filter="url(#filter0_d)">
      <circle cx="21.5" cy="22.2178" r="18.5" fill="white" />
     </g>
     <g clipPath="url(#clip0)">
      <path
       d="M25.1283 22.1569L19.1621 16.1907C18.9646 16 18.6498 16.0054 18.4591 16.2029C18.273 16.3956 18.273 16.7011 18.4591 16.8937L24.0738 22.5085L18.4591 28.1232C18.2649 28.3173 18.2649 28.6321 18.4591 28.8262C18.6532 29.0203 18.9679 29.0203 19.1621 28.8262L25.1283 22.86C25.3224 22.6658 25.3224 22.3511 25.1283 22.1569Z"
       fill="#979797"
      />
     </g>
     <defs>
      <filter
       id="filter0_d"
       x="0"
       y="0.717773"
       width="43"
       height="43"
       filterUnits="userSpaceOnUse"
       color-interpolation-filters="sRGB"
      >
       <feFlood flood-opacity="0" result="BackgroundImageFix" />
       <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
       />
       <feOffset />
       <feGaussianBlur stdDeviation="1.5" />
       <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
       />
       <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow"
       />
       <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow"
        result="shape"
       />
      </filter>
      <clipPath id="clip0">
       <rect
        width="12.9206"
        height="12.9206"
        fill="white"
        transform="translate(15.333 16.0511)"
       />
      </clipPath>
     </defs>
    </svg>
   </div>
  )
 }

 function SamplePrevArrow(props) {
  const { className, onClick } = props
  return (
   <div className={className} onClick={onClick}>
    <svg
     width="43"
     height="44"
     viewBox="0 0 43 44"
     fill="none"
     xmlns="http://www.w3.org/2000/svg"
    >
     <g filter="url(#filter0_d)">
      <circle r="18.5" transform="matrix(-1 0 0 1 21.5 22.2178)" fill="white" />
     </g>
     <g clipPath="url(#clip0)">
      <path
       d="M17.8707 22.1569L23.837 16.1907C24.0345 16 24.3492 16.0054 24.54 16.2029C24.7261 16.3956 24.7261 16.7011 24.54 16.8937L18.9252 22.5085L24.54 28.1232C24.7341 28.3173 24.7341 28.6321 24.54 28.8262C24.3458 29.0203 24.0311 29.0203 23.837 28.8262L17.8707 22.86C17.6766 22.6658 17.6766 22.3511 17.8707 22.1569Z"
       fill="#979797"
      />
     </g>
     <defs>
      <filter
       id="filter0_d"
       x="0"
       y="0.717773"
       width="43"
       height="43"
       filterUnits="userSpaceOnUse"
       color-interpolation-filters="sRGB"
      >
       <feFlood flood-opacity="0" result="BackgroundImageFix" />
       <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
       />
       <feOffset />
       <feGaussianBlur stdDeviation="1.5" />
       <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
       />
       <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow"
       />
       <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow"
        result="shape"
       />
      </filter>
      <clipPath id="clip0">
       <rect
        width="12.9206"
        height="12.9206"
        fill="white"
        transform="matrix(-1 0 0 1 27.666 16.0511)"
       />
      </clipPath>
     </defs>
    </svg>
   </div>
  )
 }

 return {
  sideElements,
  allNews,
  SampleNextArrow,
  SamplePrevArrow,
  ReadArticleSvg
 }
}

export default UseBodyText
