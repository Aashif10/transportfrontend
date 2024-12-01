import React from "react";
import Navbar1 from "../Components/Navbar1";

const About2 = () => {
  return (
    <>
      <section className="about py-10 bg-gray-100" id="about">
        <Navbar1></Navbar1>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Section */}
            <div className="banner">
              <div className="top mb-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-black text-center lg:text-left">
                  Providing Good Service
                </h2>
              </div>
              <p className="mid text-black text-base sm:text-lg mb-4 lg:max-w-none w-full text-left">
               Good service is consistent, meeting or exceeding customer expectations. It builds trust, offering reliability and quality. Timely communication keeps customers informed, while attention to detail delivers value. Focused on satisfaction and continuous improvement, great service fosters lasting relationships and loyalty.
              </p>
            </div>

            {/* Image Section */}
            <div className="banner">
              <img
                src="2468382.jpg"
                className="rounded-xl w-full h-auto object-cover shadow-lg"
                alt="about"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About2;
