import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark shadow-sm py-3">
        <div className="container-fluid px-3 px-lg-5">
          {/* Logo + Brand */}
          <Link
            to="/"
            className="navbar-brand d-flex align-items-center gap-2 fs-2 nav-head"
          >
            <img src="/logo.jpg" alt="logo" height="75" width="75" />
            <h1 className="px-2 text-nowrap">
              Maha-Nanda
              <br />
              Healthcare
            </h1>
          </Link>

          {/* Toggle for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav links */}
          <div
            className="collapse navbar-collapse justify-content-between mt-3 mt-lg-0"
            id="mainNavbar"
          >
            <ul className="navbar-nav mx-auto gap-2 text-uppercase fw-semibold fs-5 text-center text-lg-start">
              <li className="nav-item nav-btn nav-bg">
                <Link className="nav-link text-primary nav-btn-custom" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item nav-btn">
                <Link className="nav-link text-primary" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item nav-btn">
                <Link className="nav-link text-primary" to="/team">
                  Team
                </Link>
              </li>
              <li className="nav-item nav-btn">
                <Link className="nav-link text-primary" to="/about">
                  About
                </Link>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="d-flex justify-content-center justify-content-lg-end">
              <Link
                to="/contact"
                className="btn btn-gradient-custom d-flex align-items-center justify-content-between gap-2 px-4 me-lg-5 py-2 fs-5"
                style={{ borderRadius: "100px", width: "250px" }}
              >
                <span className="fw-semibold mx-auto">GET IN TOUCH</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
