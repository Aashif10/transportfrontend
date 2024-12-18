import React, { useState } from "react";
import front from "../../public/front2.jpg";
import { Link } from "react-router-dom";
import Navbar1 from "./Navbar1";

const SliderHome = () => {
  const path = window.location.pathname;
  const phoneNumber = "+918527669072";
  const message = "Hello, I would like to inquiry about your services!";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return <div>
    <>
      {path==="/" && <Navbar1/>}
      <div className="bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-center items-center relative" style={{ // backgroundImage: `url('https://c1.wallpaperflare.com/preview/84/73/279/truck-lorry-transportation-logistics.jpg')`
          backgroundImage: `url(${front})` }}>
        {/* Logo */}

        {/* Content */}
        <div className="bg-black bg-opacity-50 text-white p-6 rounded text-center">
          <h1 className="text-6xl font-bold mb-4">
            FAST, RELIABLE AND EFFICIENT
          </h1>
          <p className="text-3xl mb-6">
            Efficient and comfortable transportation services for all
          </p>
          <Link to="/contact">
            <button className="bg-white  text-black hover:text-black px-6 py-2 rounded transition">
              Book Your Transportation Service
            </button>
          </Link>
        </div>

        {/* WhatsApp Button */}
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
    </div>;
};

export default SliderHome;
