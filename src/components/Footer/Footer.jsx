import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Info */}
        <div className="footer-section contact-info">
          <h3>Contact Us</h3>
          <p>123 Kingsman Street, Lagos, Nigeria</p>
          <p>Phone: +234 801 234 5678</p>
          <p>Email: info@kingsmantailors.ng</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Social Media */}
        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            {/* WhatsApp */}
            <a
              href="https://wa.me/2348012345678"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="social-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="currentColor"
              >
                <path d="M380.9 97.1C339-17.5 184.1-40 108.7 30.5 48.4 82.3 32.3 170.3 49.7 229.9c-3.8 14.2-14.2 46-6.6 66.5 6.5 18.1 38.2 69 97.8 103.6 44.8 25.1 88.1 28 111.8 28.7 56.2 1.5 94.1-43.7 100.4-89.3 6.3-44.9-24.6-87.4-53.2-114.6zM248 392c-49 0-88.7-42.8-88.7-95.5 0-52.7 39.7-95.5 88.7-95.5s88.7 42.8 88.7 95.5c0 52.7-39.7 95.5-88.7 95.5z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="currentColor"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9 0 63.6 51.3 114.9 114.9 114.9 63.6 0 114.9-51.3 114.9-114.9 0-63.6-51.3-114.9-114.9-114.9zM224.1 337c-39.7 0-72-32.3-72-72s32.3-72 72-72 72 32.3 72 72-32.3 72-72 72zm146.4-194.7c0 14.9-12.1 27-27 27s-27-12.1-27-27 12.1-27 27-27 27 12.1 27 27zM398.8 80c-1.7-35.3-9.9-66.8-36.3-93.2-26.5-26.5-58-34.7-93.2-36.3-29.2-1.4-73.2-1.4-102.4 0-35.3 1.7-66.8 9.9-93.2 36.3-26.5 26.5-34.7 58-36.3 93.2-1.4 29.2-1.4 73.2 0 102.4 1.7 35.3 9.9 66.8 36.3 93.2 26.5 26.5 58 34.7 93.2 36.3 29.2 1.4 73.2 1.4 102.4 0 35.3-1.7 66.8-9.9 93.2-36.3 26.5-26.5 34.7-58 36.3-93.2 1.4-29.2 1.4-73.2 0-102.4zM398.8 80z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                fill="currentColor"
              >
                <path d="M279.14 288l14.22-92.66h-88.91V134.91c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72V195.3H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Kingsman Tailors. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
