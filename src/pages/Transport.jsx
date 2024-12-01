import React from "react";

const Transport = () => {
  return <div className="relative bg-gray-900 text-white">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://w0.peakpx.com/wallpaper/893/784/HD-wallpaper-sterling-truck-transport-graphy.jpg')" }} /> 
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-4 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
          FAST, RELIABLE AND EFFICIENT
        </h1>
        <p className="mt-4 text-lg sm:text-xl">
          Efficient and comfortable transportation services for all
        </p>
        <button className="mt-6 px-6 py-3 text-lg font-medium text-gray-900 bg-yellow-400 rounded-md hover:bg-yellow-500">
          Book Your Transportation Service
        </button>
      </div>
    </div>;
};

export default Transport;
