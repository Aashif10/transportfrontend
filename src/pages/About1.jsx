import React from "react";

const About1 = () => {
  return (
    <>
      <section className="about py-10 bg-gray-100" id="about">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image Section */}
            <div className="banner">
              <img
                src="520872.jpg"
                className="rounded-xl w-full h-auto object-cover shadow-lg"
                alt="about"
              />
            </div>

            {/* Text Section */}
            <div className="banner">
              <div className="top mb-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-black text-center">
                  Choose a Good Car Transporter
                </h2>
              </div>
              <p className="mid text-black text-base sm:text-lg mb-4 lg:max-w-none w-full text-left ml-28">
                Choosing a good car transporter starts with checking their reputation through
                reviews and recommendations. Ensure the company is licensed and offers
                insurance for your vehicle during transit. Look for transporters with
                experience and reliable services, offering both open and enclosed carrier
                options. Compare prices, but be cautious of deals that seem unrealistically
                low. Opt for a company with clear communication and responsive customer
                support. A trustworthy transporter ensures your vehicle’s safety and timely
                delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About1;
