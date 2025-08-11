import React, { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We specialize in bespoke tailoring, alterations, and custom designs for all occasions.",
  },
  {
    question: "How long does it take to complete a suit?",
    answer:
      "Typically, a bespoke suit takes 2-3 weeks from measurement to final fitting.",
  },
  {
    question: "Do you offer fittings?",
    answer:
      "Yes! We provide multiple fittings to ensure the perfect fit for every garment.",
  },
  {
    question: "Can I bring my own fabric?",
    answer:
      "Absolutely. We welcome clients to bring their own fabrics for custom orders.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") toggleFAQ(index);
            }}
            role="button"
            aria-expanded={activeIndex === index}
            aria-controls={`faq-answer-${index}`}
            id={`faq-question-${index}`}
          >
            <h3>{item.question}</h3>
            <p id={`faq-answer-${index}`} className="faq-answer">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
