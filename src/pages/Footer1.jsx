import React from "react";

const Footer1 = () => {
  return <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Wrapper for all sections */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Contact Section */}
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p>Shop no 15, Maruti Trolla Parking</p>
            <p>Carterpuri Road, Gurgaon, Haryana - 122001</p>
            <p className="mt-2">Phone: +919953253431</p>
            <p className="mt-2">
              E-mail: <a href="mailto:info@bookmytransports.in" className="text-blue-600 hover:underline">
                argroupstransports.in@gmail.com
              </a>
            </p>
          </div>

          {/* Opening Hours Section */}
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-4">Opening Hours</h3>
            <div className="space-y-2">
              <div>
                <p className="font-medium">Monday - Thursday</p>
                <p>10:00 - 22:00</p>
              </div>
              <div className="mt-4">
                <p className="font-medium">Friday - Sunday</p>
                <p>11:00 - 20:00</p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="flex">
            {/* <h3 className="text-lg font-bold mb-4  text-center"></h3> */}
            <div className="w-full">
              <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.7661920578335!2d77.01485948152524!3d28.486587128171823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19dce333960f%3A0x5294f355eedfd67d!2s15%2C%20Carterpuri%20Rd%2C%20Block%20E%2C%20Ashok%20Vihar%2C%20Ashok%20Vihar%20Phase%20III%20Extension%2C%20Gurugram%2C%20Haryana%20122006!5e0!3m2!1sen!2sin!4v1732724375803!5m2!1sen!2sin" width="100%" height="200" style={{ border: 0 }} allowFullScreen="" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </footer>;
};

export default Footer1;
