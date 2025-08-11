import React from "react";
import "./About.css";
import aboutImg from "../../assets/images/hero.webp"; // Replace with your image

// SVG icons (inline so no external library needed)
const icons = {
  fit: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" width="20" height="20">
      <path d="M12 2L15 8H9L12 2ZM4 22V10H20V22H4ZM10 14V18H14V14H10Z" />
    </svg>
  ),
  fabric: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" width="20" height="20">
      <path d="M4 4H20V20H4V4ZM6 6V18H18V6H6Z" />
    </svg>
  ),
  detail: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" width="20" height="20">
      <circle cx="12" cy="12" r="10" stroke="gold" strokeWidth="2" fill="none"/>
      <path d="M8 12H16" stroke="gold" strokeWidth="2" />
    </svg>
  ),
  speed: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" width="20" height="20">
      <path d="M12 3a9 9 0 0 1 9 9c0 5-4 9-9 9s-9-4-9-9 4-9 9-9Zm0 3v6l4 2" />
    </svg>
  )
};

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImg} alt="Kingsman Tailors" />
        </div>
        <div className="about-text">
          <h2>About Kingsman Tailors</h2>
          <p>
            At Kingsman Tailors, we believe a well-tailored suit is more than just
            clothing — it’s a statement of confidence and elegance. With decades
            of craftsmanship passed down through generations, we combine
            traditional tailoring with modern style to create garments that
            perfectly fit you.
          </p>

          <div className="why-choose-us">
            <h3>Why Choose Us</h3>
            <ul>
              <li>{icons.fit} Perfect Custom Fit for Every Client</li>
              <li>{icons.fabric} Premium Quality Fabrics & Materials</li>
              <li>{icons.detail} Attention to Detail in Every Stitch</li>
              <li>{icons.speed} Fast Turnaround Without Compromising Quality</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
