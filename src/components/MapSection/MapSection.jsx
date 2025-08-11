import React from "react";
import "./MapSection.css";

const MapSection = () => {
  return (
    <section className="map-section" id="location">
      <h2 className="section-title">Find Us</h2>
      <p className="map-description">
        Visit us at our tailoring shop for your bespoke fitting experience.
      </p>

      {/* Google Maps Embed */}
      <div className="map-container" role="region" aria-label="Map showing our shop location">
        <iframe
          title="Kingsman Tailors Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.187356129!2d-122.40137768468047!3d37.79361737975673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064e7dfac3b%3A0x4bdfb4dfde1b1a1a!2sTailor%20Shop!5e0!3m2!1sen!2sus!4v1692999999999"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="map-info">
        <p><strong>Address:</strong> 123 Kingsman Street, London, UK</p>
        <p><strong>Phone:</strong> +44 123 456 789</p>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=123+Kingsman+Street+London"
          target="_blank"
          rel="noopener noreferrer"
          className="directions-btn"
        >
          Get Directions
        </a>
      </div>
    </section>
  );
};

export default MapSection;
