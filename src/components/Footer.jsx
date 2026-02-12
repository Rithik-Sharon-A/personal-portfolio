// src/components/Footer.jsx

import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer 
        className="py-5 position-relative"
        style={{
          background: '#000000',
          borderTop: '1px solid #1a1a1a',
          color: '#ffffff'
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
                       background: '#ffffff',
                       color: '#000000'
                     }}>
                  💻
                </div>
                <span className="h5 mb-0" style={{
                  color: '#ffffff',
                  fontWeight: 'bold'
                }}>
                  Rithik Sharon A
                </span>
              </div>
              <p style={{ color: '#bdbdbd', lineHeight: 1.6 }}>
                MERN Stack Developer specializing in Agentic AI and OpenAI APIs to build 
                scalable, responsive web applications.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-lg-4 col-md-6">
              <h5 className="mb-3" style={{ color: '#ffffff', fontWeight: '600' }}>
                Quick Links
              </h5>
              <ul className="list-unstyled">
                {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                  <li key={item} className="mb-2">
                    <a 
                      href={`#${item.toLowerCase()}`}
                      className="text-decoration-none"
                      style={{
                        color: '#bdbdbd',
                        transition: 'all 0.3s ease',
                        display: 'inline-block'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#ffffff';
                        e.target.style.transform = 'translateX(5px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = '#bdbdbd';
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
              <h5 className="mb-3" style={{ color: '#ffffff', fontWeight: '600' }}>
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
                    background: 'transparent',
                    border: '1px solid #ffffff',
                    fontSize: '1.3rem',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#ffffff';
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 0 25px rgba(255,255,255,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
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
                    background: 'transparent',
                    border: '1px solid #ffffff',
                    fontSize: '1.3rem',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#ffffff';
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 0 25px rgba(255,255,255,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
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
                    background: 'transparent',
                    border: '1px solid #ffffff',
                    fontSize: '1.3rem',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#ffffff';
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 0 25px rgba(255,255,255,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
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
          <div className="text-center mt-5 pt-4" style={{ borderTop: '1px solid #1a1a1a' }}>
            <p className="mb-0" style={{ color: '#bdbdbd' }}>
              © {currentYear} Rithik Sharon A. All rights reserved.
            </p>
            <p className="mb-0 mt-2" style={{ color: '#bdbdbd', fontSize: '0.9rem' }}>
              Built with React, Vite & Bootstrap
            </p>
          </div>
        </div>
      </footer>

    </>
  );
}

export default Footer;

