import React, { useState } from "react";
import { FiPhoneCall, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../../public/AR.png";

const Navbar1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = "+918527669072";
  const message = "Hello, I would like to inquire about your services!";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="flex items-center z-10 justify-between px-2 py-0 bg-white w-full text-center">
      {/* Logo */}
      <div className="flex items-center text-center mt-2">
        <img src={logo} className="w-12 h-12 mr-2" alt="Logo" />
        <h1 className="text-xl md:text-2xl font-bold ">
          <span className="text-black" />
          <span className="text-red-600">AUTO</span>
          <span className="text-black">TRANSPORT</span>
        </h1>
      </div>

      {/* Hamburger Menu for Small Screens */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl text-orange-500 focus:outline-none"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Nav Links (Desktop) */}
      <div className="hidden md:flex space-x-8 text-lg mt-2 font-semibold text-center items-center justify-center">
        <Link to="/" className="hover:text-orange-500 no-underline">
          Home
        </Link>
        <Link to="/services" className="hover:text-orange-500 no-underline">
          Services
        </Link>
        <Link to="/about" className="hover:text-orange-500 no-underline">
          About Us
        </Link>
        <Link to="/blog" className="hover:text-orange-500 no-underline">
          Blog
        </Link>
        <Link to="/contact" className="hover:text-orange-500 no-underline">
          Contact
        </Link>
      </div>

      {/* Contact & Button */}
      <div className="hidden md:flex items-center space-x-6 justify-center">
        <div className="flex items-center text-lg">
          <FiPhoneCall className="text-orange-500 text-2xl mt-2" />
          <span className="ml-2 mt-2 text-gray-700 font-medium">+91-9953253431</span>
        </div>
        <button
          className="bg-green-500 text-white rounded-full px-4 py-2 mt-2 hover:bg-green-600 transition"
          onClick={() => window.open(whatsappURL, "_blank")}
        >
          WhatsApp
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen &&
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center space-y-4 md:hidden z-20">
          <Link
            to="/"
            onClick={handleLinkClick}
            className="text-lg hover:text-orange-500 no-underline"
          >
            Home
          </Link>
          <Link
            to="/services"
            onClick={handleLinkClick}
            className="text-lg hover:text-orange-500 no-underline"
          >
            Services
          </Link>
          <Link
            to="/about"
            onClick={handleLinkClick}
            className="text-lg hover:text-orange-500 no-underline"
          >
            About Us
          </Link>
          <Link
            to="/blog"
            onClick={handleLinkClick}
            className="text-lg hover:text-orange-500 no-underline"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            onClick={handleLinkClick}
            className="text-lg hover:text-orange-500 no-underline"
          >
            Contact
          </Link>
        </div>}
    </nav>
  );
};

export default Navbar1;
