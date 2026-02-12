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
      className="hero-section d-flex justify-content-center align-items-center text-center position-relative"
      style={{
        background: 'radial-gradient(circle at center, rgba(255,255,255,0.06), transparent 60%), #000000',
        minHeight: '100vh'
      }}
    >
      {/* Hero Content */}
      <div className="position-relative hero-content">
        <h1 className="display-1 fw-bold mb-0 hero-name" style={{
          color: '#ffffff',
          textShadow: '0 0 30px rgba(255,255,255,0.35)'
        }}>
          RITHIK SHARON A
        </h1>
        <p className="fs-3 fw-light mt-3 hero-role" style={{
          color: '#bdbdbd'
        }}>
          MERN Stack Developer
        </p>
        <button 
          onClick={handleResumeDownload}
          className="btn btn-outline-light btn-lg mt-4 px-4 py-3 text-decoration-none hero-cta"
          style={{
            border: '2px solid #ffffff',
            background: 'transparent',
            color: '#ffffff',
            borderRadius: '8px',
            fontWeight: '600',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#ffffff';
            e.target.style.color = '#000000';
            e.target.style.borderColor = '#ffffff';
            e.target.style.boxShadow = '0 0 25px rgba(255,255,255,0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.color = '#ffffff';
            e.target.style.borderColor = '#ffffff';
            e.target.style.boxShadow = 'none';
          }}
        >
          Download Resume
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
