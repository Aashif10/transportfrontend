import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">
          <span className="text-black">AR</span>
          <span className="text-red-500">AUTO</span>
          <span className="text-black">TRANSPORTS</span>
        </h1>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex space-x-8 text-lg font-medium">
        <Link to={"/"} className="hover:text-orange-500">
          Home
        </Link>
        <Link to={"/"} className="hover:text-orange-500">
          Services
        </Link>
        <Link to={"/"} className="hover:text-orange-500">
          Checklist
        </Link>
        <Link to={"/"} className="hover:text-orange-500">
          Blog 
        </Link>
        <Link to={"/reservation"} className="text-black hover:text-orange-500 font-semibold">
          Contacts
        </Link>
      </div>

      {/* Contact & Button */}
      <div className="flex items-center space-x-6">
        <div className="flex items-center text-lg">
          <FiPhoneCall className="text-orange-500 text-2xl" />
          <span className="ml-2 text-gray-700 font-medium">
            +91-9953253431
          </span>
        </div>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition">
          Contact
        </button>
      </div>
    </nav>;
};

export default Navbar1;
