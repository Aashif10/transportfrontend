import React, { useState } from "react";
// import Navbar from "../Components/Navbar";
import image from "../Truck/goooggoo.png";
import front from "../../public/front2.jpg"
import { Link, useNavigate } from "react-router-dom";


const SliderHome = () => {
  const Navigate = useNavigate();
  const phoneNumber = "+918527669072";
  const message = "Hello, I would like to inquiry about your services!";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return <div>
      <div className="bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-center items-center relative" style={{ // backgroundImage: `url('https://c1.wallpaperflare.com/preview/84/73/279/truck-lorry-transportation-logistics.jpg')`
          backgroundImage: `url(${front})` }}>
        {/* Logo */}
        <div className="absolute top-4 left-4">
          <img src={image} alt="Logo" className="h-20 w-auto" />
        </div>

        {/* Content */}
        <div className="bg-black bg-opacity-50 text-white p-6 rounded text-center">
          <h1 className="text-6xl font-bold mb-4">
            FAST, RELIABLE AND EFFICIENT
          </h1>
          <p className="text-3xl mb-6">
            Efficient and comfortable transportation services for all
          </p>
          <Link to="reservation">
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition" onClick={()=>Navigate("/reservation")}>
              Book Your Transportation Service
            </button>
          </Link>
        </div>

        {/* WhatsApp Button */}
        <div className="fixed bottom-7 right-6 z-50">
          <button className="bg-green-500 text-white rounded-full p-3 shadow-lg z-10 hover:bg-green-600 transition" onClick={() => window.open(whatsappURL, "_blank")}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="h-8 w-8" />
          </button>
        </div>
      </div>
    </div>;
};

export default SliderHome;
