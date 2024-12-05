import React from "react";
import img1 from "../../public/single.jpg";
import img2 from "../../public/single1.webp";
import img3 from "../../public/single2.webp";
import img4 from "../../public/single4.jpg";
const Single = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Single Container Truck Service
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Our Single Container Truck Service ensures safe and timely delivery
            of your valuable goods. We specialize in transporting your items in
            secure containers, providing peace of mind throughout the entire
            process.
          </p>
        </div>

        {/* Images and Content */}
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
          <div className="md:w-1/2">
            <img
              src={img1} // Replace with your own image URL
              alt="Single Container Service"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="md:w-1/2 flex flex-col justify-center space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">
              What We Offer
            </h3>
            <p className="text-lg text-gray-600">
              We understand the importance of transporting your goods safely.
              Our Single Container Service guarantees that your items are packed
              securely, preventing any damage during transit. Whether it's
              furniture, electronics, or fragile items, we've got you covered.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-600">
              <li>Safe and Secure Transport</li>
              <li>Timely Delivery to Your Destination</li>
              <li>Affordable Rates for All Budgets</li>
              <li>Specialized Containers for Fragile Items</li>
            </ul>
          </div>
        </div>

        {/* Additional Images */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <img
              src={img2}
              alt="Container Loading"
              className="w-full rounded-lg shadow-lg"
            />
            <p className="text-center text-gray-600 mt-2">
              Secure Loading Process
            </p>
          </div>
          <div>
            <img
              src={img3}
              alt="Container in Transit"
              className="w-full rounded-lg shadow-lg"
            />
            <p className="text-center text-gray-600 mt-2">In-Transit Safety</p>
          </div>
          <div>
            <img
              src={img4}
              alt="Unloading the Container"
              className="w-full rounded-lg shadow-lg"
            />
            <p className="text-center text-gray-600 mt-2">
              Efficient Unloading
            </p>
          </div>
        </div>

        {/* Footer/Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            Ready to Move?
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Contact us now to schedule your Single Container Truck Service and
            get your belongings delivered safely and on time!
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="px-8 py-3 bg-orange-500 text-white text-lg rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
