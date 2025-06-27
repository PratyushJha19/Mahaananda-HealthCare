import React from "react";
import "../styles/Contact.css";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

function Contact() {
  return (
    <section className="contact-wrapper">
      <p className="contact-label">CONTACT US</p>
      <h2 className="contact-title">
        Let’s Get in Touch
        <br />
        With Us
      </h2>

      <div className="contact-cards">
        <div className="contact-card phone">
          <div className="icon-circle phone">
            <FiPhone size={24} />
            <div className="contact-tag">Phone</div>
          </div>
          <p className="contact-info mt-2">+91 9760691646</p>
        </div>

        <div className="contact-card email">
          <div className="icon-circle email">
            <FiMail size={24} />
            <div className="contact-tag">Email</div>
          </div>
          <p className="contact-info mt-2">drvibhor2829@gmail.com</p>
        </div>

        <div className="contact-card location">
          <div className="icon-circle location">
            <FiMapPin size={24} />
            <div className="contact-tag">Address</div>
          </div>
          <p className="contact-info mt-2">
            Sajwan arcade, Indraprastha, Lane no.5 Ring road, Dehradun,
            Uttarakhand 248001
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
