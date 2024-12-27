import React, { useState, useEffect } from "react";
import Navbar1 from "./Navbar1";
import { Link } from "react-router-dom";
import img1 from "../../public/img0.jpeg"
import img2 from "../../public/Premium Photo _ Truck on highway road with red container, transportation concept_,import,export logistic industrial Transporting.jpeg"
import img3 from "../../public/img2.jpeg"
import img0 from "../../public/photo.jpeg"
import img4 from "../../public/img3.jpeg"
import img5 from "../../public/img5.jpeg"
import img6 from "../../public/img7.jpeg"
import img7 from "../../public/img8.jpeg"
import img8 from "../../public/urdu.jpeg"
import img9 from "../../public/Auto hauler.jpeg"

const slides = [
  {
    image: img1,
    quote: "Fast, Reliable, and Efficient Transportation Services."
  },
  {
    image: img2,
    quote: "Safety and Comfort Combined for Your Journey."
  },
  {
    image: img3,
    quote: "Every Mile with Excellence, Just for You."
  },
  {
    image: img4,
    quote: "Luxury Meets Mobility – Travel in Style."
  },
  {
    image: img0,
    quote: "Making Your Journey Effortless and Memorable."
  },
  {
    image: img5,
    quote: "Every vehicle carries dreams, destinations, and stories"
  },
  {
    image:img6,
    quote: "Travel far, explore new horizons"
  },
  {
    image: img7,
    quote: "ransport connects us, beyond boundaries"
  },
  {
    image: img8,
    quote: "Every journey starts with a single step"
  },
   {
    image: img9,
    quote: "Connections made through transport, journeys unite people"
  }
];

function HomeSlide() {
  const [current, setCurrent] = useState(0);
  const path = window.location.pathname;
   const phoneNumber = "+918527669072";
  const message = "Hello, I would like to inquiry about your services!";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  // Autoplay: Change slide every 3 seconds
  useEffect(
    () => {
      const timer = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(timer);
    },
    [current]
  );

  // Move to the next slide
  function nextSlide() {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  }

  // Move to the previous slide
  function prevSlide() {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  }

  return (
    <>
      {path=="/"&& <Navbar1/>}
    <div className="slider relative w-full h-screen overflow-hidden">
      {/* Left Arrow */}
      <div
        className="left-arrow absolute top-1/2 left-5 transform -translate-y-1/2  hover:bg-gray-400 hover:text-white p-2 rounded-lg cursor-pointer z-10"
        onClick={prevSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>

      {/* Slides */}
      {slides.map(
        (slide, index) =>
          current === index &&
          <div
            key={slide.image}
            className="slide flex justify-center text-center items-center w-full h-full relative"
          >
            {/* Image */}
            <img
              className="w-[1360px] h-full "
              src={slide.image}
              alt={`Slide ${index + 1}`}
            />

            {/* Overlay Content */}
            <div className="absolute   inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold p-3 mb-4">
                {slide.quote}
              </h1>
              <p className="text-xl md:text-xl mt-0 mb-4">
                Efficient and comfortable transportation services for all.
              </p>
                <Link to="/contact">
                   <button className="mt-4 px-6 py-3 mb-16 bg-orange-500 hover:bg-orange-400 text-white  rounded-lg">
                Book Your Tranportation Services
              </button>
             </Link>
            </div>
          </div>
      )}

      {/* Right Arrow */}
      <div
        className="right-arrow absolute top-1/2 right-5 transform -translate-y-1/2  hover:text-white p-2 rounded-lg cursor-pointer z-10"
        onClick={nextSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
        </div>
         <div className="fixed flex bottom-7  right-6 z-50">
          <div className="bg-gray-200 rounded p-2 mt-2 shadow-lg">
            <p className="font-thin ">NEED HELP? </p>
            <p>CHAT WITH US</p>
            </div>
          <button className=" text-white rounded-full p-2  z-10  transition" onClick={() => window.open(whatsappURL, "_blank")}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="h-12 w-12 bg-transparent " />
          </button>
        </div>
      </div>
      </>
  );
}

export default HomeSlide;
