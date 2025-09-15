// src/Navbar.jsx

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./redux/themeSlice";
import "./Navbar.css";

// Navigation links configuration
const navigationLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" }
];

// Theme toggle button configuration
const themeConfig = {
  light: { icon: "🌙", label: "Dark" },
  dark: { icon: "🌞", label: "Light" }
};

function Navbar() {
  // Redux state and actions
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  // Event handlers
  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  // Render navigation links
  const renderNavigationLinks = () => {
    return navigationLinks.map((link) => (
      <a key={link.href} href={link.href} className="nav-link">
        {link.label}
      </a>
    ));
  };

  // Get current theme configuration
  const currentTheme = themeConfig[theme];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left Section - Logo */}
        <div className="navbar-left">
          <div className="navbar-logo">
            <div className="logo-icon">💻</div>
            <span className="logo-text">My Digital Space</span>
          </div>
        </div>

        {/* Center Section - Navigation Links */}
        <div className="navbar-center">
          <div className="navbar-links">
            {renderNavigationLinks()}
          </div>
        </div>
        
        {/* Right Section - Theme Toggle & Actions */}
        <div className="navbar-right">
          <div className="navbar-actions">
            <button
              className="theme-toggle-btn"
              onClick={handleThemeToggle}
              aria-label={`Switch to ${currentTheme.label.toLowerCase()} theme`}
            >
              <span className="theme-icon">{currentTheme.icon}</span>
              <span className="theme-label">{currentTheme.label}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;