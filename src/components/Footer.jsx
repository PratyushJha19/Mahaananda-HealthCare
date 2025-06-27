import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="">
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#0f172a" }}
      >
        <h1 className="foot-head text-center">Your Smile, Our Passion</h1>
        <div className="container p-4 pb-0">
          <section className>
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h3 className="text-uppercase mb-4 fw-bold">
                  Maha-Nanda Healthcare
                </h3>
                <p className="">
                  <Link to={"/"} className="foot-btn">
                    Home
                  </Link>
                </p>
                <p className="">
                  <Link to={"/contact"} className="foot-btn">
                    Contact
                  </Link>
                </p>
                <p className="">
                  <Link to={"/about"} className="foot-btn">
                    About
                  </Link>
                </p>
                <p className="">
                  <Link to={"/services"} className="foot-btn">
                    Services
                  </Link>
                </p>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold">
                  Working Hours
                </h5>
                <p>
                  Monday to Saturday <br />
                  9:00 AM to 1:00 PM <br />
                  4:00 PM to 8:00 PM <br />
                  Sundays - Off
                </p>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold">
                  Contact
                </h5>
                <p>
                  <i className="fas fa-home mr-3" /> Sajwan arcade,
                  Indraprastha, Lane no.5 Ring road, Dehradun,
                  Uttarakhand 248001
                </p>
                <p>
                  <i className="fas fa-envelope mr-3" /> drvibhor2829@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3" /> +91 9760691646
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold">
                  Socials
                </h5>
                <Link
                  className="btn btn-primary btn-floating m-1 text-white ms-4 social-btn"
                  style={{ backgroundColor: "#3b5998" }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-facebook-f" />
                </Link>{" "}
                <br />
                <Link
                  className="btn btn-primary btn-floating m-1 text-white ms-4 social-btn"
                  style={{ backgroundColor: "#ac2bac" }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-instagram" />
                </Link>{" "}
                <br />
                <Link
                  className="btn btn-primary btn-floating m-1 text-white ms-4 social-btn"
                  style={{ backgroundColor: "#0082ca" }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-linkedin-in" />
                </Link>{" "}
                <br />
              </div>
            </div>
          </section>
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2025 Copyright:{" "}
          <span className="fw-700">Maha-Nanda Healthcare</span> <br />
          Made by Pratyush Jha
        </div>
      </footer>
    </div>
  );
};

export default Footer;
