import React from "react";
import { FaBox, FaGlobe, FaCar, FaMotorcycle } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import Navbar1 from "../Components/Navbar1";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaBox className="text-orange-500 text-5xl" />,
      title: "Single Container Service",
      description: "We’ve got all the supplies for your comfortable move.",
      link: "/single",
    },
    {
      id: 2,
      icon: <FaGlobe className="text-orange-500 text-5xl" />,
      title: "Movers & Packers",
      description: "We pack for people every day, so we’re quick and careful.",
      link: "/mover",
    },
    {
      id: 3,
      icon: <FaCar className="text-orange-500 text-5xl" />,
      title: "Car Relocation",
      description: "We pay attention to detail, so our trucks are spotless.",
      link: "/carRelocation",
    },
    {
      id: 4,
      icon: <FaMotorcycle className="text-orange-500 text-5xl" />,
      title: "Bike Relocation",
      description: "We are professionals and handle your stuff with care.",
      link: "/bike",
    },
  ];

  return (
    <div>
      <Navbar1 />
      <section className="py-16 mt-10 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">
              Our Moving Services
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We are a professional moving company created to move more than just
              your boxes. We’ll do it with pleasure.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                {/* Icon */}
                <div className="mb-4">
                  <Link to={service.link}>{service.icon}</Link>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-600 mt-2">{service.description}</p>

                {/* Arrow Button */}
                <div className="mt-4 flex justify-center">
                  <Link to={service.link}>
                    <button
                      aria-label={`Learn more about ${service.title}`}
                      className="w-10 h-10 flex items-center justify-center border-2 border-orange-500 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300"
                    >
                      <HiArrowRight className="text-xl" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
