import React from "react";
import img1 from "../../public/blog1.jpg";
import img2 from "../../public/blog2.avif";
import img3 from "../../public/blog3.jpg";
import img4 from "../../public/blog4.jpg";
import Navbar1 from "./Navbar1";


const Blogs = () => {
    const path = window.location.pathname;
    return (
        <>
            {path==="/blog" && <Navbar1/>}
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-4 p-6">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">
          Explore Our Transport Blogs
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          Discover insights, tips, and stories about the transport industry.
          From logistics solutions to innovative transport strategies, explore
          our blog!
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
              Efficient Logistics in Modern Transport
            </h3>
            <p className="text-gray-600 mb-4">
              Learn how efficient logistics are transforming the transportation
              industry with advanced technologies and smarter solutions.
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
              Green Transport: The Future of Mobility
            </h3>
            <p className="text-gray-600 mb-4">
              Explore sustainable transportation solutions and their role in
              reducing the carbon footprint.
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
              Tackling Urban Transport Challenges
            </h3>
            <p className="text-gray-600 mb-4">
              A look into innovative solutions for urban transport issues,
              including congestion and infrastructure limitations.
            </p>
            <a href="#" className="text-orange-500 font-medium hover:underline">
              Read More
            </a>
          </div>
        </div>

        {/* Blog 4 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={img4}
            alt="Tech in Transport"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Technology Revolutionizing Transport
            </h3>
            <p className="text-gray-600 mb-4">
              Dive into how technology, from AI to IoT, is reshaping the
              transport sector for better efficiency and safety.
            </p>
            <button href="#" className="text-orange-500 font-medium hover:underline">
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 p-2">
          Stay Updated with Our Blog
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Subscribe to our blog and never miss an update on the latest trends
          and insights in the transport industry.
        </p>
        <button
          href="#"
          className="bg-orange-500 text-white text-lg px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-300"
        >
          Subscribe Now
        </button>
      </div>
            </div>
            </>
  );
};

export default Blogs;
