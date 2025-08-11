import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      icon: "✂️",
      title: "Bespoke Tailoring",
      description: "Custom-made suits with perfect fit and timeless style."
    },
    {
      icon: "🧵",
      title: "Alterations & Repairs",
      description: "Expert adjustments to make your garments look brand new."
    },
    {
      icon: "👔",
      title: "Shirt & Trouser Fittings",
      description: "Precision fittings for unmatched comfort and elegance."
    }
  ];

  return (
    <section className="services" id="services">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
