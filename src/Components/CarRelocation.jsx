import React, { useRef } from "react";
import img1 from "../../public/car1.jpg";
import img2 from "../../public/download (1).jpeg";
import img3 from "../../public/car3.avif";
import Navbar1 from "./Navbar1";
import video from "../../public/Screen Recording 2024-12-06 224010.mp4";

const CarRelocation = () => {
   const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
  };

  const path = window.location.pathname;
  return (
    <>
      {path==="/carRelocation" && <Navbar1 />}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800">
              Car Relocation Service
            </h1>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              Relocating your car safely and on time is our top priority. We
              ensure that your car is handled with care during the entire process,
              from loading to delivery.
            </p>
          </div>

          {/* Image with Text Section 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Secure Car Transport
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Whether it's a short move or a cross-country journey, we ensure
                your car is transported securely and promptly. We use modern
                carriers and advanced tracking technology to monitor every move.
              </p>
              <ul className="list-inside list-disc text-lg text-gray-600">
                <li>Fully insured for peace of mind</li>
                <li>Real-time tracking available</li>
                <li>Specialized carriers for safe transport</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img
                src={img1} // Replace with your own image URL
                alt="Secure Car Transport"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Image with Text Section 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-16">
            <div className="flex justify-center">
              <video
                ref={videoRef}
                width="500"
                muted
                autoPlay
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <source src={video} type="video/mp4" />
              </video>
            </div>
            <div className="text-left">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Safe and Professional Loading
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our expert team ensures that your car is loaded onto the carrier
                in the safest way possible, avoiding any damage during the
                process. We handle your vehicle with the utmost care.
              </p>
            </div>
          </div>

          {/* Image with Text Section 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-16">
            <div className="text-left">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Timely Delivery to Your Destination
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We understand the importance of timely deliveries. Our team makes
                sure that your car reaches its destination on time, every time,
                with constant updates on its journey.
              </p>
              <ul className="list-inside list-disc text-lg text-gray-600">
                <li>Guaranteed on-time delivery</li>
                <li>Flexible scheduling options</li>
                <li>Real-time updates throughout the journey</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img
                src={img3} // Replace with your own image URL
                alt="Car Delivery"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl p-0 font-semibold text-gray-800">
              Get Started with Your Car Relocation
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              Ready to move your car safely and on time? Our team is ready to
              assist you with all your car relocation needs. Contact us today to
              get started!
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="px-8 py-0 bg-orange-500 text-white text-lg rounded-lg hover:bg-orange-600 transition duration-300"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarRelocation;
