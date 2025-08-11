import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Tunde A.",
    feedback:
      "Kingsman Tailors gave me the best fitting suit I've ever had. Highly recommend!",
  },
  {
    name: "Amaka O.",
    feedback:
      "Professional, reliable, and the quality is top-notch. My go-to tailor now.",
  },
  {
    name: "Chinedu M.",
    feedback:
      "Amazing craftsmanship and attention to detail. I always get compliments.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-list">
        {testimonials.map(({ name, feedback }, index) => (
          <div key={index} className="testimonial-item">
            <p className="feedback">"{feedback}"</p>
            <p className="client-name">- {name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
