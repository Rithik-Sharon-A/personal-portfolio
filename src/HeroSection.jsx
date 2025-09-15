// src/HeroSection.jsx

import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-name">RITHIK</h1>
        <h1 className="hero-name-bold">SHARON A</h1>
        <p className="hero-subtitle">
          Full Stack Developer
        </p>
        <a href="#resume" className="hero-cta">
          Resume
        </a>
      </div>
    </section>
  );
}

export default HeroSection;