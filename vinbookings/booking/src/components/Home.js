
import * as React from 'react';
import "./Home.css";

import { useState,useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Home = () => {
  const sliderImages = [
    {
      url: "",
    },
    {
      url: "https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-101613184/101613184.jpg",
    },
    {
      url: "https://kannada.cdn.zeenews.com/kannada/sites/default/files/2023/03/02/288292-kannada-movie.png",
    },
    {
      url: "https://static.toiimg.com/thumb/msid-103612838,width-1070,height-580,imgsize-85560,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    },
    {
      url: "https://images.ottplay.com/images/tovino-thomas-and-nimisha-sajayan-0.jpg",
    },
  ];
  const [activeImageNum, setCurrent] = useState(0);
  const length = sliderImages.length;
  const nextSlide = () => {
    setCurrent(activeImageNum === length - 1 ? 0 : activeImageNum + 1);
  };
  const prevSlide = () => {
    setCurrent(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
  };

  if (!Array.isArray(sliderImages) || sliderImages.length <= 0) {
    return null;
  }
  return (
    <div >
      <div className='hi'>
        
        <form className="regis">
        <h1>
         ABOUT US
        </h1>
        <h2>
       
A booking website allows clients to reserve and book various types of serv
ices or activities with your business.15
Is booking com a US site?
Booking.com B.V. (the company behind Booking.com™) is registered a
nd based in Amsterdam, the Netherlands ("Booking.com", "we", "us" or "our"), 
from where it renders an online accommodation reservation service (the "Service") on
An About Us page is a section on a website that provides information about a company, organization, or individual. It is an opportunity to tell your brand’s story, share your vision, history, values, and achievements, and introduce team members. This is where you build trust and credibility with customers.
        </h2>
        </form>
      
       
      </div>
    </div>
    
      );
}
      export default Home