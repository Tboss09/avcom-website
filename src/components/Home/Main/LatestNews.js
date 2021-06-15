import Slider from 'react-slick'
import React from 'react'
import { Link } from 'react-router-dom'
import uniqid from 'uniqid'
import UseBodyText from './UseMain'

const LatestNews = () => {
 const { allNews, SamplePrevArrow, SampleNextArrow, ReadArticleSvg } =
  UseBodyText()

 const settings = {
  arrows: true,
  swipeToSlide: true,
  pauseOnHover: true,
  infinite: true,
  speed: 500,
  autoPlay: true,
  cssEase: 'linear',
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  autoPlaySpeed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
   {
    breakpoint: 1024,
    settings: {
     slidesToShow: 2,
     slidesToScroll: 2,
     infinite: true,
     dots: true,
    },
   },
   {
    breakpoint: 600,
    settings: {
     slidesToShow: 2,
     slidesToScroll: 2,
     initialSlide: 2,
    },
   },
   {
    breakpoint: 480,
    settings: {
     slidesToShow: 1,
     slidesToScroll: 1,
    },
   },
  ],
 }
 return (
  <div className="  w-10/12 mx-auto mt-16 ">
   <h4 className="text-4xl pb-2 font-roboto">Latest Industry News</h4>

   <Slider {...settings} className=" slider relative overflow-hidden ">
    {allNews.map(({ img, header, text, link }) => (
     <div className="latestNews_news  rounded" key={uniqid()}>
      <img
       src={img}
       alt="Blog Caption  "
       className="object-cover h-52 w-full rounded-t "
      />
      <div>
       <h2>{header}</h2>
       <p>{text}</p>
      </div>
      <div className="pt-4 text-base">
       <Link
        to={link}
        className="text-center font-secondary flex relative text-btn text-base   h-2 "
       >
        Read article
        <span className="pl-3 relative top-1">{ReadArticleSvg}</span>
       </Link>
      </div>
     </div>
    ))}
   </Slider>
  </div>
 )
}

export default LatestNews
