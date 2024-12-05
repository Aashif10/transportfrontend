import React from "react";
import img1 from "../../public/bike1.webp"
import img2 from "../../public/bike2.webp"
import img3 from "../../public/bike3.webp"
import img4 from "../../public/bike4.jpg"

const Bike = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">
          Bike Relocation Service
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          Our bike relocation service is designed to offer you peace of mind
          when moving your precious motorcycle from one place to another.
        </p>
      </div>

      {/* 1st Section: Introduction */}
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex-1">
          <img
            src={img1} // Replace with your own image URL
            alt="Bike Relocation"
            className="rounded-lg shadow-lg w-full md:w-4/5 mx-auto"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            We offer a reliable and efficient bike relocation service that
            guarantees safe and timely delivery. We understand how important
            your bike is, so we treat it with the utmost care, ensuring it
            arrives at the destination in perfect condition.
          </p>
          <ul className="text-lg text-gray-600 list-disc list-inside space-y-3">
            <li>Safe and secure bike transportation</li>
            <li>On-time delivery guaranteed</li>
            <li>Real-time tracking for peace of mind</li>
            <li>Affordable and transparent pricing</li>
          </ul>
        </div>
      </div>

      {/* 2nd Section: Transport Process */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Our Transport Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <img
                src={img2} // Replace with your own image URL
                alt="Bike Pickup"
                className="rounded-full w-24 h-24 object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Pickup</h3>
            <p className="text-gray-600 text-center">
              We pick up your bike from the location of your choice, ensuring
              safe and secure loading.
            </p>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <img
                src={img3} // Replace with your own image URL
                alt="Transport"
                className="rounded-full w-24 h-24 object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Transport
            </h3>
            <p className="text-gray-600 text-center">
              Your bike is transported in a specialized, secure vehicle,
              ensuring maximum safety throughout the journey.
            </p>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <img
                src={img4} // Replace with your own image URL
                alt="Delivery"
                className="rounded-full w-24 h-24 object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Delivery
            </h3>
            <p className="text-gray-600 text-center">
              We deliver your bike safely to the destination, ensuring the
              highest level of care during unloading.
            </p>
          </div>
        </div>
      </div>

      {/* 3rd Section: Testimonials */}
      <div className="mt-16 bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          What Our Customers Say
        </h2>
        <div className="flex flex-wrap justify-center space-x-6">
          <div className="max-w-xs bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg text-gray-600 italic mb-4">
              "The service was excellent! My bike arrived on time, and in
              perfect condition!"
            </p>
            <h4 className="text-xl font-semibold text-gray-800">John D.</h4>
          </div>
          <div className="max-w-xs bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg text-gray-600 italic mb-4">
              "I was really impressed by the professionalism and care they took
              with my bike."
            </p>
            <h4 className="text-xl font-semibold text-gray-800">Emily R.</h4>
          </div>
          <div className="max-w-xs bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg text-gray-600 italic mb-4">
              "Affordable pricing and great customer support. Highly recommend!"
            </p>
            <h4 className="text-xl font-semibold text-gray-800">Mark T.</h4>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Ready to Relocate Your Bike?
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Contact us today to get started with our safe and reliable bike
          relocation service.
        </p>
        <a
          href="#"
          className="bg-orange-500 text-white text-lg px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-300"
        >
          Get a Free Quote
        </a>
      </div>
    </div>
  );
};

export default Bike;
