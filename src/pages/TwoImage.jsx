import React from "react";

const TwoImage = () => {
  return (
    <>
      <section className="about py-2 bg-gray-100" id="about">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            {/* Image Section */}
            <div className="banner">
              <img
                src="6712821.jpg"
                className="rounded-xl w-full h-auto object-cover shadow-lg"
                alt="about"
              />
            </div>

            {/* Text Section */}
            <div className="banner">
              
              <div className="banner">
              <img
                src="2468382.jpg"
                className="rounded-xl w-full h-auto object-cover shadow-lg"
                alt="about"
              />
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TwoImage;
