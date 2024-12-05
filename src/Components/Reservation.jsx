import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { LuPhoneCall } from "react-icons/lu";
import "../App.css";
import Navbar1 from "../Components/Navbar1";

const Reservation = () => {
  const path = window.location.pathname;
  const form = useRef();
  const navigate = useNavigate();

  const [isSuccess, setIsSuccess] = useState(false);

  const handleReservation = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_spd0cja", "template_f9bshyo", form.current, {
        publicKey: "5k8eHRGbcejoAsdY-",
      })
      .then(
        () => {
          toast.success("Book Your Details successfully!");
          setIsSuccess(true);
          setTimeout(() => {
            navigate("/success");
          }, 2000);
        },
        (error) => {
          toast.error("Wrong Data filled Try Again!");
        }
      );
  };

  return (
    <>
      {path === "/contact" && <Navbar1 />}

      <section className="reservation px-4 py-8" id="reservation">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Section */}
            <div>
              <h1 className="text-gray-300 font-semibold text-lg md:text-xl mt-0">
                Moving Services
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500 p-2 mt-0">
                Full-Service
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500 p-2 mt-0">
                Moving Company
              </h1>
              <p className="text-base md:text-xl mt-0">
                We help people move their vehicles from one place to another
                place.
              </p>
              <p className="text-base md:text-xl mt-0">
                We provide all-inclusive services for transfer like bike, car,
                and other vehicles.
              </p>
              <p className="text-base md:text-xl mt-0">
                No matter where you are going across the country, we have got
                you covered. We move people every day, so we are fast, efficient
                and careful.
              </p>
              <div className="flex items-center mt-6">
                <button className="text-sm md:text-lg p-3 bg-black hover:bg-orange-500 transition rounded-full text-white">
                  Discover More
                </button>
                <div className="flex items-center ml-4">
                  <LuPhoneCall className="text-orange-500 text-2xl" />
                  <span className="text-orange-500 text-xl ml-2">
                    9953253431
                  </span>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="reservation_form_box bg-white p-6 rounded-lg shadow-lg">
              <h1 className="text-xl font-bold mt-0">BOOKING DETAILS</h1>
              <p className="text-gray-600 mb-4 mt-0">
                For Further Questions, Please Call
              </p>
              <form ref={form} onSubmit={handleReservation} autoComplete="off">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    name="from_firstname"
                    className="p-2 border rounded"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="from_lastname"
                    className="p-2 border rounded"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="p-2 border rounded"
                    name="from_email"
                    required
                  />
                  <input
                    type="number"
                    placeholder="Phone"
                    className="p-2 border rounded"
                    name="from_number"
                    required
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="date"
                    className="p-2 border rounded w-full"
                    placeholder="Date"
                    name="from_date"
                    required
                  />
                </div>
                <div className="mt-4">
                  <select
                    name="from_time"
                    className="p-2 border outline-none rounded w-full"
                    required
                  >
                    <option value="Select Vehicles" disabled selected>
                      Select vehicles
                    </option>
                    <option value="None">None</option>
                    <option value="Car Relocation">Car Relocation</option>
                    <option value="bike Relocation">Bike Relocation</option>
                    <option value="Single Container Service">
                      Single Container service
                    </option>
                    <option value="Movers & Parkers">Mover & parker</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 items-center">
                  <input
                    type="text"
                    placeholder="From"
                    className="p-2 border rounded"
                    name="from_source"
                    required
                  />
                  <FaArrowRightArrowLeft className="text-xl text-gray-600 mx-auto" />
                  <input
                    type="text"
                    placeholder="To"
                    className="p-2 border rounded"
                    name="from_destination"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full mt-6 p-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-lg"
                >
                  BOOK NOW{" "}
                  <HiOutlineArrowNarrowRight className="inline ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reservation;
