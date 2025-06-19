import React from "react";
import "./../styles/Services.css";
import ServiceFAQ from "../components/ServiceFAQ.jsx";

const services = [
  {
    title: "General Dentistry",
    number: "01",
    desc: "Solution to fill empty spaces resulting from the loss of one or more teeth.",
    img: "/Services/GeneralDentistry.jpg", // Place this in public folder or adjust the path
    icon: "🦷",
  },
  {
    title: "Dental X-Ray",
    number: "02",
    desc: "Provide nutrients to grow healthy, dentists play a role in fertilizing the patient's dental and oral health.",
    img: "/Services/DentalXray.jpg",
    icon: "🦷",
  },
  {
    title: "Implant",
    number: "03",
    desc: "Professionals who handle a variety of general dental and oral care needs.",
    img: "/Services/DentalImplants.jpg",
    icon: "🦷",
  },
  {
    title: "Root Canal Treatment",
    number: "04",
    desc: "Focuses on detecting and treating dental caries or cavities that can affect overall oral health.",
    img: "/Services/RootCanal.jpg",
    icon: "🦷",
  },
  {
    title: "Crown & Bridges",
    number: "05",
    desc: "Focuses on detecting and treating dental caries or cavities that can affect overall oral health.",
    img: "/Services/CrownBridges.jpg",
    icon: "🦷",
  },
  {
    title: "Extraction",
    number: "06",
    desc: "Focuses on detecting and treating dental caries or cavities that can affect overall oral health.",
    img: "/Services/Extraction.jpg",
    icon: "🦷",
  },
  {
    title: "Filling",
    number: "07",
    desc: "Focuses on detecting and treating dental caries or cavities that can affect overall oral health.",
    img: "/Services/Fillings.jpg",
    icon: "🦷",
  },
  {
    title: "Scaling",
    number: "08",
    desc: "Focuses on detecting and treating dental caries or cavities that can affect overall oral health.",
    img: "/Services/Scaling.jpg",
    icon: "🦷",
  },
  {
    title: "Bleaching (Whitening)",
    number: "09",
    desc: "Focuses on detecting and treating dental caries or cavities that can affect overall oral health.",
    img: "/Services/Whitening.jpg",
    icon: "🦷",
  },
  {
    title: "Braces",
    number: "10",
    desc: "Focuses on detecting and treating dental caries or cavities that can affect overall oral health.",
    img: "/Services/Braces.jpg",
    icon: "🦷",
  },
];

const Services = () => {
  return (
    <div>
      <h1 className="text-center ser-head">
        Professional Care, <br />
        Bright Smiles
      </h1>
      <div className="container py-5">
        <div className="row g-4">
          {services.map((item, index) => (
            <div className="col-md-6" key={index}>
              <div className="card service-card border-0 shadow-sm">
                <div className="position-relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="card-img-top rounded-4"
                  />
                  <div className="icon-circle position-absolute top-0 start-0 translate-middle">
                    {item.icon}
                  </div>
                </div>
                <div className="card-body">
                  <h2 className="card-title fw-bold text-white">
                    {item.title}
                  </h2>
                  <p className="card-text">{item.desc}</p>
                  <div className="d-flex justify-content-between align-items-center"></div>
                </div>
                <hr />
              </div>
            </div>
          ))}
        </div>
      </div>

      <ServiceFAQ></ServiceFAQ>
    </div>

    //  <a
    //   href="#"
    //   className="text-primary fw-semibold text-decoration-none"
    // >
    //   Learn More →
    // </a>
    // <span className="text-muted fw-bold">{item.number}</span>
  );
};

export default Services;
