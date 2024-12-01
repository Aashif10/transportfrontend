import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
 import success from "../../public/Editable_PSD_truck_mockup___Premium_AI-generated_image-removebg-preview.png"
const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(
    () => {
      const timeoutId = setInterval(() => {
        setCountdown(preCount => {
          if (preCount === 1) {
            clearInterval(timeoutId);
            navigate("/");
          }
          return preCount - 1;
        });
      }, 1000); // Reduced to 1000ms for 1-second countdown
      return () => clearInterval(timeoutId);
    },
    [navigate]
  );

  return (
    <section className="notFound flex items-center  justify-center min-h-screen bg-gray-100">
      <div className="container text-center">
        <img
          src={success}
          alt="Success"
          className="mx-auto w-full max-w-md h-auto"
        />
        <h1 className="mb-4  font-semibold text-gray-800">
          Redirecting to Home in {countdown} seconds...
        </h1>
        <Link
          to="/"
          className="mt-4 inline-flex items-center"
        >
          Back to Home <HiOutlineArrowNarrowRight className="ml-1" />
        </Link>
      </div>
    </section>
  );
};

export default Success;
