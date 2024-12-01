import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <address className="text-center font-semibold text-xl m-0 p-2">
        Add, Shop No,15 Carterpuri Road Near Maruti Trolla Parking
        Gurgaon(Haryana) 122001{" "}
      </address>
      <div className="responsive-map mt-4">
        {/* Added margin-top here */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.7661920578335!2d77.01485948152524!3d28.486587128171823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19dce333960f%3A0x5294f355eedfd67d!2s15%2C%20Carterpuri%20Rd%2C%20Block%20E%2C%20Ashok%20Vihar%2C%20Ashok%20Vihar%20Phase%20III%20Extension%2C%20Gurugram%2C%20Haryana%20122006!5e0!3m2!1sen!2sin!4v1732724375803!5m2!1sen!2sin"
          width="100%"
          height="350"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0"
        />
      </div>
      <footer className="bg-gray-700 text-white">
        <div className="container mx-auto p-2">
          <div className="banner flex justify-between items-center border-b pb-2 mb-2">
            <div className="left font-semibold">Md Arif</div>
            <div className="left w-40 h-40 flex justify-center items-center">
              <img
                src="/goooggoo.png"
                alt="Company Logo"
                className="object-contain h-full"
              />
            </div>
            <div className="right text-right">
              <p className="m-0 text-white">Gurgaon</p>
              <p className="m-0 text-white">Open 24*7</p>
            </div>
          </div>
          <div className="contact-info text-center mt-4">
            <p className="m-0 text-lg font-medium">Contact Information</p>
            <p className="m-0">Mobile: +91-9953253431</p>
            <p className="m-0">Office: +91-8527669072</p>
            <p className="m-0">Email: argroupstransports.in@gmail.com</p>
          </div>
          <div className="banner flex justify-between items-center mt-4">
            <div className="left" />
            <div className="left-0 bottom-0 text-center text-sm">
              <p className="m-0 text-gray-700 hover:text-gray-900">
                All Rights Reserved by AashifCode
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
