import Logo from '../../assets/img/logo2.png'
import LadyWithALaptop from '../../assets/img/avatar01.png'
import { Link } from 'react-router-dom'

const BodyText = () => {

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
       

 return (
  <div className="main_content ">
   <div className="relative ">
    {sideElements.map(({ svgIcon, className, text }) => (
     <div className={`fixedElement   ${className}`} key={className}>
      <span className="">{svgIcon}</span>
      <p className="">{text}</p>
     </div>
    ))}
   </div>
   <div className="content  w-10/12 ml-auto h-full">
    <div className="logo mb-6">
     <Link to="/">
      <img src={Logo} alt="Company's Logo" />
     </Link>
    </div>

    <div className="text">
     <h3 className="content_header">Building better life through industry</h3>
     <p className="content_text">
      We started AVCOMM in 2015 with the mission of helping manufacturers,
      energy producers, public service companies, and transportation agencies to
      communicate better with their industrial equipment. Now more than ever, it
      is imperative that we receive feedback from our machines so that we can
      eliminate waste, optimize production, and conserve resources.
     </p>
    </div>

    <div className="content_with_img  flex items-center">
     <div>
      <img
       src={LadyWithALaptop}
       alt="A lady standing holding a laptop"
       className="object-contain w-96 h-80 "
      />
     </div>
     {/* Overlay text */}
     <div className="content_with_img_text  ">
      <h4>Our solutions</h4>
      <p>
       Our solutions systemize communication between human and machine. This
       allows important data to be available to operators for making more
       informed decisions.
      </p>
      <Link to="/solutions">Learn more</Link>
     </div>
    </div>
    {/* Here goes a image of a lady holding a book */}

    {/* Here goes a image of a lady holding a book */}
   </div>
  </div>
 )
}

export default BodyText
