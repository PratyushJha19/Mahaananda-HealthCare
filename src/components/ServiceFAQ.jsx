// ServiceFAQ.jsx
import React, { useState } from "react";
import "../styles/ServiceFAQ.css"; // create and style this file as needed

const faqData = [
  {
    category: "General Services",
    questions: [
      "What dental services do you provide?",
      "What are the options for replacing missing teeth?",
      "Do you provide emergency dental services?",
      "Do you offer cosmetic dentistry services like teeth whitening or veneers?",
    ],
  },
  {
    category: "Appointments",
    questions: [
      "Do I need a consultation before certain procedures?",
      "What happens if I need to reschedule or cancel my appointment?",
      "Do you accept walk-ins, or is it appointment-only?",
    ],
  },
  {
    category: "Technology and Techniques",
    questions: [
      "Do you use the latest technology for diagnosis and treatment?",
      "Are your treatments pain-free or minimally invasive?",
      "How do you ensure patient safety during procedures?",
    ],
  },
];

const ServiceFAQ = () => {
  const [expanded, setExpanded] = useState({});

  const toggle = (catIndex, qIndex) => {
    setExpanded((prev) => {
      const key = `${catIndex}-${qIndex}`;
      return {
        ...prev,
        [key]: !prev[key],
      };
    });
  };

  return (
    <section className="faq-section mb-2">
      <div className="container">
        <h1 className="text-center mb-5 fw-bold">
          Frequently asked <br /> question about services
        </h1>

        <div className="row gy-4">
          {faqData.map((category, catIndex) => (
            <div className="col-md-6" key={catIndex}>
              <div className="faq-box p-4 rounded-4 shadow-sm bg-white">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h2 className="fw-bold mb-0">{category.category}</h2>
                  {/* <span className="faq-star">✱</span> */}
                </div>

                {category.questions.map((question, qIndex) => {
                  const key = `${catIndex}-${qIndex}`;
                  return (
                    <div
                      key={key}
                      className="faq-question py-3 border-bottom"
                      onClick={() => toggle(catIndex, qIndex)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <h6 className="mb-0 fw-semibold">{question}</h6>
                        <span className="faq-toggle-icon">
                          {expanded[key] ? "✕" : "+"}
                        </span>
                      </div>
                      <div
                        className="faq-answer-wrapper"
                        style={{
                          maxHeight: expanded[key] ? "200px" : "0",
                          overflow: "hidden",
                          transition: "max-height 0.4s ease",
                        }}
                      >
                        <p className="text-muted mt-2 mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique.
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;
