// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white">
      <div className="pharmacy-header">
        <h3>Pharmacy Services</h3>
        <hr />
      </div>
      <div className="image-container">
        <img src="image1.jpg" alt="Image 1" />
        <img src="image2.jpg" alt="Image 2" />
        <img src="image3.jpg" alt="Image 3" />
        <img src="image4.jpg" alt="Image 4" />
        <img src="image5.jpg" alt="Image 5" />
      </div>
      <div className="pharmacy-header">
        <h3>Our Store</h3>
        <hr />
      </div>
      <div className="two-column-container">
        <div className="column">
          <h4>Google Maps</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.5938211539165!2d-123.09260932314983!3d49.24618967138742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548674071520488f%3A0x8143e092a129002c!2sP%20%26%20A%20Pharmacy%20Ltd!5e0!3m2!1sen!2sca!4v1689990632405!5m2!1sen!2sca"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <p>Google Maps Caption</p>
        </div>
        <div className="column">
          <img src="image.jpg" alt="Image" />
          <p>Image Caption</p>
        </div>
      </div>
      <div className="section-wrapper">
        <section id="section1">
          <h5>Address</h5>
          <p>4336 Fraser St.</p>
          <p>Vancouver, B.C. V6S 1B2</p>
        </section>
        <section id="section2">
          <h5>Opening Hours</h5>
          <p>Monday: 10am- 6pm</p>
          <p>Tuesday: 10am- 6pm</p>
          <p>Wednesday: 10am- 6pm</p>
          <p>Thursday: 10am- 6pm</p>
          <p>Friday: 10am- 6pm</p>
          <p>Saturday: 10am- 5pm</p>
          <p>Sunday: Closed</p>
        </section>
        <section id="section3">
          <h5>Contact Us</h5>
          <p>Tel: 604-876-4424</p>
          <p>Fax: 778-876-4424</p>
          <p>WhatsApp: 604-786-8238</p>
          <p>Email: papharmacy663@gmail.com</p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
