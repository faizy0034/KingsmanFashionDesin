import React, { useState, useEffect, useRef } from "react";
import "./Gallery.css";
import gallery1 from "../../assets/gallery1.webp";
import gallery2 from "../../assets/gallery2.webp";
import gallery3 from "../../assets/gallery3.webp";
import gallery4 from "../../assets/gallery4.webp";
import gallery5 from "../../assets/gallery5.webp";
import gallery6 from "../../assets/gallery6.webp";
import gallery7 from "../../assets/gallery7.webp";
import gallery8 from "../../assets/gallery8.webp";

const Gallery = () => {
  const images = [
    { src: gallery1, alt: "Bespoke suit fitting" },
    { src: gallery2, alt: "Luxury fabric swatches" },
    { src: gallery3, alt: "Tailor at work" },
    { src: gallery4, alt: "Custom shirt details" },
    { src: gallery5, alt: "Finished tailored suit" },
    { src: gallery6, alt: "Classic tuxedo" },
    { src: gallery7, alt: "Elegant dress shirt" },
    { src: gallery8, alt: "Tailored trousers" },
  ];

  const [currentIndex, setCurrentIndex] = useState(null);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const lightboxRef = useRef(null);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsFadingOut(false);
  };

  const closeLightbox = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setCurrentIndex(null);
    }, 300);
  };

  const showPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) showNext();
    if (touchStart - touchEnd < -50) showPrev();
  };

  // Keyboard controls & accessibility
  useEffect(() => {
    if (currentIndex !== null) {
      const handleKeyDown = (e) => {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") showPrev();
        if (e.key === "ArrowRight") showNext();
      };

      document.addEventListener("keydown", handleKeyDown);

      // Focus trap
      const focusableEls = lightboxRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableEls && focusableEls.length > 0) {
        focusableEls[0].focus();
      }

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [currentIndex]);

  return (
    <section className="gallery" id="gallery">
      <h2 className="section-title">Our Work</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            className="gallery-item"
            key={index}
            onClick={() => openLightbox(index)}
            role="button"
            tabIndex={0}
            aria-label={`View ${img.alt}`}
            onKeyDown={(e) => e.key === "Enter" && openLightbox(index)}
          >
            <img src={img.src} alt={img.alt} />
            <div className="overlay">
              <p>{img.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {currentIndex !== null && (
        <div
          className={`lightbox ${isFadingOut ? "fade-out" : "fade-in"}`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label={`Image ${currentIndex + 1} of ${images.length}`}
          ref={lightboxRef}
        >
          <button
            className="close-btn"
            onClick={closeLightbox}
            aria-label="Close image viewer"
          >
            ✕
          </button>
          <button
            className="prev-btn"
            onClick={showPrev}
            aria-label="Previous image"
          >
            ‹
          </button>
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="lightbox-img"
          />
          <button
            className="next-btn"
            onClick={showNext}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
