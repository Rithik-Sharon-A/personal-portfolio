// src/HeroSection.jsx

import React from 'react';

function HeroSection() {
  const handleResumeDownload = async () => {
    try {
      const response = await fetch('/Rithik Sharon A.pdf');
      if (!response.ok) throw new Error('Resume not found');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Rithik_Sharon_A_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Resume download failed:', error);
      // Fallback to direct link
      window.open('/Rithik Sharon A.pdf', '_blank');
    }
  };

  return (
    <section 
      id="home" 
      className="hero-section d-flex justify-content-center align-items-center text-center text-white position-relative"
    >
      {/* Hero Content */}
      <div className="position-relative hero-content">
        <h1 className="display-1 fw-bold mb-0 hero-name">
          RITHIK SHARON A
        </h1>
        <p className="fs-3 fw-light mt-3 hero-role">
          MERN Stack Developer
        </p>
        <button 
          onClick={handleResumeDownload}
          className="btn btn-outline-light btn-lg mt-4 px-4 py-3 text-decoration-none hero-cta"
          style={{
            border: '2px solid white',
            background: 'transparent',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'white';
            e.target.style.color = 'black';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.color = 'white';
          }}
        >
          Download Resume
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
