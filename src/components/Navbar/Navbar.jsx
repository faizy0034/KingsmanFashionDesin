import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        {/* Scissors SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="icon"
        >
          <path
            fill="currentColor"
            d="M343.5 288c-26.2 0-49.5 15-60.9 36.9L227 260.4c7.1-10.8 11-23.8 11-37.4s-4-26.6-11-37.4l55.6-64.5c11.4 21.9 34.7 36.9 60.9 36.9 38.6 0 70-31.4 70-70s-31.4-70-70-70-70 31.4-70 70c0 9.3 1.8 18.2 5 26.3l-59.3 68.7c-7.6-4.6-16.6-7.3-26.3-7.3-27.6 0-50 22.4-50 50s22.4 50 50 50c9.7 0 18.7-2.7 26.3-7.3l59.3 68.7c-3.2 8.1-5 17-5 26.3 0 38.6 31.4 70 70 70s70-31.4 70-70-31.4-70-70-70z"
          />
        </svg>
        Kingsman Tailors
      </div>

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
