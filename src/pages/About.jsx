import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>"Safe, efficient, and reliable – car transporters!"</p>
            </div>
            <p className="mid">
              A car transporter is a specialized vehicle or service designed to safely and efficiently transport cars from one location to another. Car transporters are essential in the automotive industry for manufacturers, dealerships, auction houses, and individuals moving vehicles across distances. Here's why car transporters are a good option
            </p>
            <Link to={"/"}>
              Explore Menu
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about1.avif" className="rounded-xl" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;