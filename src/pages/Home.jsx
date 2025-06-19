import React from "react";
import "./../styles/Home.css";
import ReviewCarousel from "../components/ReviewCarousel.jsx"; // Adjust path if different

const services = [
  "General Dentistry",
  "Dental Crowns & Bridges",
  "Dental Fillings",
  "Root Canal",
  "Cosmetic Dentistry",
  "Veneers",
  "Dental Implants",
  "Orthodontic Treatment",
  "Tooth Extractions",
  "Gum Treatment",
];

const Home = () => {
  return (
    <div>
      <div className="home-head">
        <section className="hero-section d-flex flex-column align-items-center text-center">
          <h1 className="hero-title">
            <span className="gradient-text">Gorgeous Smile for</span> <br />
            <span className="gradient-text">a Brighter Life</span>
          </h1>

          <button className="hero-btn mt-4">SEE OUR DOCTORS</button>

          <div className="hero-content d-flex justify-content-between mt-5 position-relative">
            {/* Left Card */}
            <div className="hero-card text-start">
              <img src="Doc1.jpg" alt="Doctor 1" className="doctor-img" />
              {/* <div className="doc-badge">
              <i className="fas fa-tooth"></i>
            </div> */}
              <p className="card-text">
                Hi, Welcome to{" "}
                <span className="text-highlight">Mahaananda Healthcare</span>
              </p>
              {/* <div className="badge-group">
              <span className="badge">Preventive Care</span>
              <span className="badge">Modern Dentistry</span>
            </div> */}
            </div>

            {/* Right Card */}
            <div className="hero-card text-end">
              <img src="Doc2.jpg" alt="Doctor 2" className="doctor-img" />
              {/* <div className="doc-badge">
              <i className="fas fa-tooth"></i>
            </div> */}
              <p className="card-text">
                Professionalism & Attention
                <br />
                Since 2025
              </p>
              {/* <div className="badge-group">
              <span className="badge">Modern Dentistry</span>
            </div> */}
            </div>
          </div>
        </section>
      </div>

      <div className="slider-container">
        <div className="slider-track">
          {[...services, ...services].map((service, index) => (
            <React.Fragment key={index}>
              <div className={`pill ${index % 2 === 0 ? "blue" : "green"}`}>
                {service.toUpperCase()}
              </div>
              {/* <div className="separator">*</div> */}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="sec-3">
        <div className="sec-3-head">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="text-center">
                  One of the best dental clinic in Dehradun
                </h1>
              </div>

              <div className="col-md-6">
                <p className="sec-3-txt">
                  Mahaanda healthcare is the top healthcare dental clinic in
                  dehradun..We provide comprehensive family oral Healthcare
                  services at affordable prices. Our clinic offers a wide range
                  of oral health services, including Implant, RCT,extraction,
                  Filling, Bleaching(teeth whitening) Smile designing and many
                  more.Utilizing cutting-edge technology and a strong commitment
                  to excellence, we ensure your well-being is our top priority.
                  From preventive care to advanced treatments, we offer
                  everything you need under one roof. Choose mahaannda
                  healthcare for quality care in the heart of Dehradun where
                  your oral health always comes first.
                </p>
              </div>
            </div>
          </div>

          <h1 className="text-center pt-4 pb-5 gradient-text-2">
            We are Professionally <br />
            Dedicated to Ensuring <br />
            Your <span>Oral Health</span> <br />
            to Maintain a <span>Healthy Smile</span>
          </h1>
          <div className="container">
            <div className="row"></div>
          </div>
        </div>
      </div>

      <div className="sec-4">
        <div className="sec-4-head text-center">
          <h1>Feedback from our Smiling Patients</h1>
          <ReviewCarousel />
        </div>
      </div>
    </div>
  );
};

export default Home;
