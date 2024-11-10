"use client";

import { useState } from "react";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleAlert = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Thank You for your response!");
    console.log("Button clicked");

    // Clear all input fields
    setFullName("");
    setEmail("");
    setPhoneNumber("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="contact-section">
  <h1 className="contact-title">Contact</h1>

  <div className="contact-content">
    <div className="contact-info">
      <div className="info-item">
        <FaPhone className="icon" />
        <p className="info-text">+92 319-352479</p>
      </div>

      <div className="info-item">
        <MdEmail className="icon" />
        <p className="info-text">Zohaibmemon1515@gmail.com</p>
      </div>

      <div className="info-item">
        <FaLocationArrow className="icon" />
        <p className="info-text">Memon society, Qasimabad, Hyderabad</p>
      </div>
    </div>

    <div className="contact-form">
      <form onSubmit={handleAlert} className="form">
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="input-field"
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
        <div className="flex-inputs">
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="input-field"
          />
        </div>
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="textarea-field"
        ></textarea>
        <div className="submit-btn-container">
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

  );
};

export default Contact;
