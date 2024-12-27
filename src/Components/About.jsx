import React from "react";
import img2 from "../../public/biked.jpeg";
import img1 from "../../public/about2.jpeg";
import img3 from "../../public/about3.jpeg";

import Navbar1 from "./Navbar1";


const Blogs = () => {
    const path = window.location.pathname;
    return (
        <>
            {path==="/about" && <Navbar1/>}
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-4">
      {/* Heading Section */}
      <div className="text-center mb-12 p-6">
        <h1 className="text-4xl font-bold text-gray-800">
          About Us Transports
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
         Transportation is not just about moving from one place to another; it's about connecting lives, ideas, and dreams, turning distance into opportunity
        </p>
      </div>

      {/* Blog Posts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Blog 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={img1}
            alt="Efficient Logistics"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Reliable Car Transport Services
            </h3>
            <p className="text-gray-600 mb-4">
              Trust us to handle your car with care! Our secure and dependable transport solutions ensure your vehicle arrives safely, no matter the distance
            </p>
            <a href="#" className="text-orange-500 font-medium hover:underline">
              Read More
            </a>
          </div>
        </div>

        {/* Blog 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={img2}
            alt="Green Transport"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Bike Transportation Solutions
            </h3>
            <p className="text-gray-600 mb-4">
              Ride worry-free, we’ve got your bike covered! Our specialized transport services ensure your motorcycle is delivered securely and on time
            </p>
            <a href="#" className="text-orange-500 font-medium hover:underline">
              Read More
            </a>
          </div>
        </div>

        {/* Blog 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={img3}
            alt="Urban Transport Challenges"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Hassle-Free Relocation
            </h3>
            <p className="text-gray-600 mb-4">
              Relocate with ease and confidence! Our seamless transportation services ensure your vehicles reach their destination safely, on time, and without any stress.
            </p>
            <a href="#" className="text-orange-500 font-medium hover:underline">
              Read More
            </a>
          </div>
        </div>
          </div>
      </div>
    
            </>
  );
};

export default Blogs;
