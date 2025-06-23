import React, { useState } from "react";
import "./../styles/Services.css";
import ServiceFAQ from "../components/ServiceFAQ.jsx";

const services = [
  {
    title: "General Dentistry",
    number: "01",
    desc: "Comprehensive care and maintenance of a patient's oral health, focusing on preventing, diagnosing, and treating a wide range of dental issues. It involves routine checkups, cleanings, fillings, ,RCT and other restorative procedures etc",
    img: "/Services/GeneralDentistry.jpg",
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
    desc: "Dental implants are artificial tooth roots, typically made of titanium, that are surgically placed into the jawbone to support a replacement tooth or teeth",
    img: "/Services/DentalImplants.jpg",
    icon: "🦷",
  },
  {
    title: "Root Canal Treatment",
    number: "04",
    desc: "It is a dental procedure to repair and save a badly damaged or infected tooth.",
    img: "/Services/RootCanal.jpg",
    icon: "🦷",
  },
  {
    title: "Crown & Bridges",
    number: "05",
    desc: "Crown is used to cover an existing tooth, a dental bridge is used to fill in the missing space caused by one or more lost teeth.",
    img: "/Services/CrownBridges.jpg",
    icon: "🦷",
  },
  {
    title: "Extraction",
    number: "06",
    desc: "Tooth extraction is a dental procedure to remove a tooth from its socket in the jawbone.",
    img: "/Services/Extraction.jpg",
    icon: "🦷",
  },
  {
    title: "Filling",
    number: "07",
    desc: "Filling is a restorative dental procedure used to repair teeth damaged by decay or trauma",
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
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

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
                  <div className="d-flex justify-content-between align-items-center">
                    <h2 className="card-title fw-bold text-white m-0">
                      {item.title}
                    </h2>
                    <button
                      className="toggle-btn"
                      onClick={() => toggleExpand(index)}
                    >
                      {expandedIndex === index ? "▲" : "▼"}
                    </button>
                  </div>

                  {expandedIndex === index && (
                    <div className="mt-3 service-expand-content">
                      <p className="card-text">{item.desc}</p>
                      <div className="text-center">
                        <a className="btn btn-primary" href="/contact">
                          Book Appointment
                        </a>
                      </div>
                    </div>
                  )}
                </div>
                <hr />
              </div>
            </div>
          ))}
        </div>
      </div>

      <ServiceFAQ />
    </div>
  );
};

export default Services;
