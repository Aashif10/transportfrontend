import React from "react";
import img1 from "../../public/bike1.webp";
import img2 from "../../public/bike2.webp";
import img3 from "../../public/bike3.webp";
import img4 from "../../public/bike4.jpg";
import Navbar1 from "./Navbar1";

const Bike = () => {
  const path = window.location.pathname;
  return (
    <>
      {path==="/bike" && <Navbar1/>}
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-4">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 p-2">
          Bike Relocation Service
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          Relocate your bike with confidence. Our reliable service ensures your
          motorcycle arrives safely, securely, and on time.
        </p>
      </div>

      {/* Transport Process Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Our Transport Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Pickup */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-full max-w-sm aspect-square rounded-lg overflow-hidden shadow-lg">
              <img
                src={img2}
                alt="Pickup"
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mt-6">
              Pickup
            </h3>
            <p className="text-gray-600 mt-4">
              We pick up your bike from your preferred location, ensuring secure
              and professional loading.
            </p>
          </div>

          {/* Transport */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-full max-w-sm aspect-square rounded-lg overflow-hidden shadow-lg">
              <img
                src={img3}
                alt="Transport"
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mt-6">
              Transport
            </h3>
            <p className="text-gray-600 mt-4">
              Your bike is transported in specialized, secure vehicles to ensure
              maximum safety during transit.
            </p>
          </div>

          {/* Delivery */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-full max-w-sm aspect-square rounded-lg overflow-hidden shadow-lg">
              <img
                src={img4}
                alt="Delivery"
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mt-6">
              Delivery
            </h3>
            <p className="text-gray-600 mt-4">
              We deliver your bike to its destination with utmost care, ensuring
              safe unloading.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Ready to Relocate Your Bike?
        </h2>
        <p className="text-lg text-gray-600 mb-6 ">
          Contact us today for a free quote and experience seamless bike
          relocation.
        </p>
        <button
          href="#"
          className="bg-orange-500 text-white text-lg px-6 py-2 rounded-lg hover:bg-orange-600 shadow-lg transition duration-300 p-4"
        >
          Get a Free Quote
        </button>
      </div>
      </div>
      </>
  );
};

export default Bike;
