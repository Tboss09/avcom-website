import Logo from '../../assets/img/logo2.png'
import LadyWithALaptop from '../../assets/img/avatar01.png'
import { Link } from 'react-router-dom'
import UseBodyText from './UseMain'

const BodyText = () => {
 const { sideElements } = UseBodyText()
 return (
  <div className="main_content ">
   <div className="relative ">
    {sideElements.map(({ svgIcon, className, text }) => (
     <div className={`fixedElement   ${className}`} key={className}>
      <span className="">{svgIcon}</span>
      <p className=" leading-tight">{text}</p>
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
    {/* Here goes a image of a lady holding a book */}

    <div className="content_with_img  flex items-center">
     <div>
      <img
       src={LadyWithALaptop}
       alt="A lady standing holding a laptop"
       className="object-contain w-96 h-80 "
      />
     </div>
     {/* Overlay text */}
     <div className="content_with_img_text   ">
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
   </div>
  </div>
 )
}

export default BodyText
