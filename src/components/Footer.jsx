// src/components/Footer.jsx

import React, { useState, useEffect } from 'react';

function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer 
        className="py-5 position-relative"
        style={{
          background: 'linear-gradient(135deg, var(--secondary-bg) 0%, var(--background-color) 100%)',
          borderTop: '1px solid rgba(124, 58, 237, 0.2)',
          color: 'var(--text-color)'
        }}
      >
        <div className="container">
          <div className="row g-4">
            {/* Brand Section */}
            <div className="col-lg-4">
              <div className="d-flex align-items-center mb-3">
                <div className="me-2 d-flex align-items-center justify-content-center rounded" 
                     style={{
                       width: '40px',
                       height: '40px',
                       background: 'linear-gradient(135deg, var(--accent-color), #ff6b6b)',
                       boxShadow: '0 2px 8px rgba(124, 58, 237, 0.3)'
                     }}>
                  💻
                </div>
                <span className="h5 mb-0" style={{
                  background: 'linear-gradient(135deg, var(--accent-color), #ff6b6b)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: 'bold'
                }}>
                  Rithik Sharon A
                </span>
              </div>
              <p style={{ color: 'var(--text-color)', opacity: 0.8, lineHeight: 1.6 }}>
                MERN Stack Developer specializing in Agentic AI and OpenAI APIs to build 
                scalable, responsive web applications.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-lg-4 col-md-6">
              <h5 className="mb-3" style={{ color: 'var(--text-color)', fontWeight: '600' }}>
                Quick Links
              </h5>
              <ul className="list-unstyled">
                {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                  <li key={item} className="mb-2">
                    <a 
                      href={`#${item.toLowerCase()}`}
                      className="text-decoration-none"
                      style={{
                        color: 'var(--text-color)',
                        opacity: 0.8,
                        transition: 'all 0.3s ease',
                        display: 'inline-block'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = 'var(--accent-color)';
                        e.target.style.opacity = '1';
                        e.target.style.transform = 'translateX(5px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = 'var(--text-color)';
                        e.target.style.opacity = '0.8';
                        e.target.style.transform = 'translateX(0)';
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect Section */}
            <div className="col-lg-4 col-md-6">
              <h5 className="mb-3" style={{ color: 'var(--text-color)', fontWeight: '600' }}>
                Connect
              </h5>
              <div className="d-flex flex-wrap gap-3">
                <a 
                  href="https://github.com/Rithik-Sharon-A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: '45px',
                    height: '45px',
                    background: 'rgba(124, 58, 237, 0.1)',
                    border: '1px solid rgba(124, 58, 237, 0.3)',
                    fontSize: '1.3rem',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'var(--accent-color)';
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 5px 15px rgba(124, 58, 237, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(124, 58, 237, 0.1)';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                  title="GitHub"
                >
                  💻
                </a>
                <a 
                  href="https://www.linkedin.com/in/rithik-sharon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: '45px',
                    height: '45px',
                    background: 'rgba(124, 58, 237, 0.1)',
                    border: '1px solid rgba(124, 58, 237, 0.3)',
                    fontSize: '1.3rem',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'var(--accent-color)';
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 5px 15px rgba(124, 58, 237, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(124, 58, 237, 0.1)';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                  title="LinkedIn"
                >
                  💼
                </a>
                <a 
                  href="mailto:rithiksharon.a@gmail.com"
                  className="d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: '45px',
                    height: '45px',
                    background: 'rgba(124, 58, 237, 0.1)',
                    border: '1px solid rgba(124, 58, 237, 0.3)',
                    fontSize: '1.3rem',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'var(--accent-color)';
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 5px 15px rgba(124, 58, 237, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(124, 58, 237, 0.1)';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                  title="Email"
                >
                  📧
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-5 pt-4" style={{ borderTop: '1px solid rgba(124, 58, 237, 0.1)' }}>
            <p className="mb-0" style={{ color: 'var(--text-color)', opacity: 0.7 }}>
              © {currentYear} Rithik Sharon A. All rights reserved.
            </p>
            <p className="mb-0 mt-2" style={{ color: 'var(--text-color)', opacity: 0.6, fontSize: '0.9rem' }}>
              Built with React, Vite & Bootstrap
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center position-fixed"
          style={{
            bottom: '30px',
            left: '5px',
            width: '52px',
            height: '52px',
            background: 'transparent',
            border: 'none',
            boxShadow: 'none',
            zIndex: 997,
            transition: 'all 0.3s ease',
            fontSize: '1.55rem',
            fontWeight: 700,
            color: 'transparent',
            backgroundImage: 'linear-gradient(135deg, #c7b8ff, #8f7cff, #ff7ac3)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 3px 10px rgba(0,0,0,0.7)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-5px)';
            e.target.style.textShadow = '0 4px 14px rgba(0,0,0,0.8)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.textShadow = '0 3px 10px rgba(0,0,0,0.7)';
          }}
          title="Back to top"
          aria-label="Back to top"
        >
          ⇧
        </button>
      )}
    </>
  );
}

export default Footer;

