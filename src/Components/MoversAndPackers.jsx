import React from "react";
import img1 from "../../public/mover.jpg";
import img2 from "../../public/parking.jpg";
import img3 from "../../public/parker.jpg";
import Navbar1 from "./Navbar1";
const MoversAndPackers = () => {
  const path = window.location.pathname;
  return (
  <>
    {path==="/mover" && <Navbar1></Navbar1>}
    <div className="container mx-auto px-4 py-8 mt-6">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 p-2">
          Movers & Packers Service
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Our Movers & Packers service ensures that your belongings are safely
          packed and relocated with utmost care.
        </p>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={img1} // Replace with your image
            alt="Packing"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Efficient Packing
            </h3>
            <p className="text-gray-600 mt-2">
              We carefully pack your items using the best materials to ensure
              they remain safe during transit.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={img2} // Replace with your image
            alt="Moving"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Safe Transport
            </h3>
            <p className="text-gray-600 mt-2">
              Our specialized vehicles ensure that your belongings are
              transported safely and securely to their destination.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={img3} // Replace with your image
            alt="Unpacking"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Unpacking & Setup
            </h3>
            <p className="text-gray-600 mt-2">
              We help unpack and set up your items in your new home or office,
              ensuring everything is in the right place.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Content */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Why Choose Our Movers & Packers Service?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-xl font-semibold text-gray-800">
              Professional Team
            </h4>
            <p className="text-gray-600 mt-2">
              Our trained and professional team ensures that your belongings are
              in safe hands.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-xl font-semibold text-gray-800">
              Affordable Pricing
            </h4>
            <p className="text-gray-600 mt-2">
              We offer competitive pricing without compromising on the quality
              of service.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-xl font-semibold text-gray-800">
              On-time Delivery
            </h4>
            <p className="text-gray-600 mt-2">
              We guarantee timely delivery to your new location, no matter the
              distance.
            </p>
          </div>
        </div>
      </div>
      </div>
      </>
  );
};

export default MoversAndPackers;
