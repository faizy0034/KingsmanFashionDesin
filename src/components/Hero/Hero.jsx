import React from "react";
import "./Hero.css";

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Tailored to Perfection</h1>
        <p>Bespoke suits, precision cuts, and timeless elegance.</p>
        <button className="cta-btn" onClick={scrollToServices}>
          Explore Services
        </button>
      </div>
    </section>
  );
};

export default Hero;
