// src/Navbar.jsx

import React from "react";

// Navigation links configuration
const navigationLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{
      background: '#000000',
      borderBottom: '1px solid #1a1a1a',
      zIndex: 999
    }}>
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#home" style={{fontSize: '1.5rem', fontWeight: 'bold'}}>
          <div className="me-2 d-flex align-items-center justify-content-center rounded" 
               style={{
                 width: '32px',
                 height: '32px',
                 background: '#ffffff',
                 color: '#000000',
                 fontSize: '0.85rem',
                 fontWeight: 'bold'
               }}>RS</div>
          <span style={{
            color: '#ffffff',
            fontWeight: 'bold'
          }}>
            My Digital Space
          </span>
        </a>

        {/* Mobile toggle button */}
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            background: 'transparent',
            border: 'none',
            padding: '4px 8px',
            borderRadius: '8px',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#1a1a1a';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
          }}
        >
          <div className="hamburger-icon" style={{
            width: '24px',
            height: '18px',
            position: 'relative',
            transform: 'rotate(0deg)',
            transition: '0.3s ease-in-out',
            cursor: 'pointer'
          }}>
            <span style={{
              display: 'block',
              position: 'absolute',
              height: '2px',
              width: '100%',
              background: 'var(--accent-color)',
              borderRadius: '1px',
              opacity: 1,
              left: 0,
              transform: 'rotate(0deg)',
              transition: '0.25s ease-in-out',
              top: '0px'
            }}></span>
            <span style={{
              display: 'block',
              position: 'absolute',
              height: '2px',
              width: '100%',
              background: 'var(--accent-color)',
              borderRadius: '1px',
              opacity: 1,
              left: 0,
              transform: 'rotate(0deg)',
              transition: '0.25s ease-in-out',
              top: '8px'
            }}></span>
            <span style={{
              display: 'block',
              position: 'absolute',
              height: '2px',
              width: '100%',
              background: 'var(--accent-color)',
              borderRadius: '1px',
              opacity: 1,
              left: 0,
              transform: 'rotate(0deg)',
              transition: '0.25s ease-in-out',
              top: '16px'
            }}></span>
          </div>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {navigationLinks.map((link) => (
              <li key={link.href} className="nav-item">
                <a 
                  href={link.href} 
                  className="nav-link text-decoration-none px-3 py-2 rounded"
                  style={{
                    color: '#ffffff', 
                    transition: 'all 0.3s ease',
                    fontSize: '1rem',
                    fontWeight: '500',
                    borderBottom: '2px solid transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderBottom = '2px solid #ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderBottom = '2px solid transparent';
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;