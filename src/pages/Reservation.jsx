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
  const form = useRef();
  const navigate = useNavigate();

  const [isSuccess, setIsSuccess] = useState(false); // State to track form submission success

  const handleReservation = e => {
    e.preventDefault();
    emailjs
      .sendForm("service_spd0cja", "template_f9bshyo", form.current, {
        publicKey: "5k8eHRGbcejoAsdY-"
      })
      .then(
        () => {
          toast.success("Book Your Details successfully!");
          setIsSuccess(true); // Set success state to true
          setTimeout(() => {
            navigate("/success"); // Redirect to success page after 2 seconds
          }, 2000);
        },
        error => {
          toast.error("Wrong Data filled Try Again!");
        }
      );
  };

  return <section className="reservation padding-4" id="reservation">
      <Navbar1 />

      <div className="container">
        {/* Home Button */}
        {/* <div className="home-button-container mt-10">
          <button id="home-button" className="px-4 py-2 text-black  rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all hover:bg-orange-600 sm:text-sm md:text-lg lg:text-xl" onClick={() => navigate("/")}>
            HOME <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </button>
        </div> */}

        <div className="mt-6  ml-4">
          <h1 className="text-gray-300 mt-4 ml-2 font-semibold">
            Moving Services
          </h1>
          <h1 className="text-6xl font-bold text-orange-500 p-2">
            Full-Service
          </h1>
          <h1 className="text-6xl font-bold text-orange-500 p-2">
            Moving Company
          </h1>
          <p className="mt-2 text-2xl">
            We help to people to move their vehicles from one place to another
            place.
          </p>
          <span className="mt-2 text-2xl">
            We provide all-inclusive services for transper like bike,Car and
            other vehicles.
          </span>
          <p className="mt-4 text-2xl ">
            No matter where you are going across the country, We have got you
          </p>
          <span className="mt-2 text-2xl">
            covered. we move for people every day,so we are fast,efficient and
            careful
          </span>
          <div className="flex mt-4 ">
            <button className="text-xl p-3 mt-4 bg-black transition hover:bg-orange-500 rounded-full text-white">
              Discover More
            </button>
            <h2 className="text-4xl text-orange-500 mt-7 ml-2">
              <LuPhoneCall />
            </h2>
            <h2 className="text-2xl text-orange-500 mt-7 ml-2">
              +919953253431
            </h2>
          </div>
        </div>
        <div className="banner">
          <div className="reservation_form_box mr-4">
            <h1>BOOKING DETAILS</h1>
            <p>For Further Questions, Please Call</p>
            <form ref={form} onSubmit={handleReservation} autoComplete="off">
              <div>
                <input type="text" placeholder="First Name" name="from_firstname" required />
                <input type="text" placeholder="Last Name" name="from_lastname" required />
              </div>
              <div>
                <input type="email" placeholder="Email" className="email_tag" name="from_email" required />
                <input type="number" placeholder="Phone" name="from_number" required />
              </div>
              <div>
                <input type="date" placeholder="Date" name="from_date" required />
                <select name="from_time" id="options" required>
                  <option value="" disabled selected>
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
              <div className="flex items-center space-x-4">
                <input type="text" placeholder="From" className="border p-2 w-full" name="from_source" required />
                <span className="text-black font-medium mt-2">
                  <FaArrowRightArrowLeft />
                </span>
                <input type="text" placeholder="To" className="border p-2 w-full" name="from_destination" required />
              </div>

              <button id="button" type="submit">
                BOOK NOW <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};

export default Reservation;
