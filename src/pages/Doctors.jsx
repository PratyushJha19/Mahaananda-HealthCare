import React, { useState } from "react";
import "../styles/Doctors.css";

const doctors = [
  {
    name: "Dr. Vibhor Kukreti",
    specialization: "Dental Surgeon",
    image: "/Doc2.jpg",
    color: "#f57c00",
    description:
      "BDS Senior Consultant dental surgeon: shri  mahant indresh hospital. Ex covid medical officer",
  },
  {
    name: "Dr. Anjali Mishra",
    specialization: "General Dentistry",
    image: "/Doc1.jpg",
    color: "#009688",
    description:
      "BDS, Ex dental surgeon PMMM hospital(Gov.of NCT of Delhi). Ex dental surgeon model eye  hospital (new delhi)",
  },
  {
    name: "Dr. Harmeet Manocha",
    specialization: "Orthodontics",
    image: "/Doc2.jpg",
    color: "#ff9800",
    description: "BDS, MDS. Consultant Orthodontist",
  },
];

function Doctors() {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded((prev) => (prev === index ? null : index));
  };

  return (
    <div className="page-wrapper">
      <section className="doctor-section page-cover">
        <p className="doctor-label pb-2">Team of</p>
        <h2 className="doctor-heading">
          Doctors that Brightens
          <br />
          Your Smile
        </h2>

        <div className="doctor-grid">
          {doctors.map((doc, index) => (
            <div className="doctor-card" key={index}>
              <img src={doc.image} alt={doc.name} className="doctor-img" />
              <h3 className="doctor-name">{doc.name}</h3>
              <p className="doctor-speciality">{doc.specialization}</p>

              <button
                className="expand-btn"
                onClick={() => toggleExpand(index)}
              >
                {expanded === index ? "Hide Details" : "Show Details"}
              </button>

              {expanded === index && (
                <p className="doctor-description">{doc.description}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Doctors;
