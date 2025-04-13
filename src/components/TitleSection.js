// src/components/HeroSection.js
import React from 'react';
import { FaChevronDown } from 'react-icons/fa'; // npm install react-icons

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="overlay">
        <h1>DROPSHIP FASTENERS</h1>
        <h2>Fasteners Delivered, Hassle-Free</h2>
      </div>
      <div className="caret" onClick={scrollToContact}>
        <FaChevronDown />
      </div>
    </section>
  );
};

export default HeroSection;
