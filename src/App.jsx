// src/App.jsx

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './navbar';
import HeroSection from './HeroSection'; // Import the new component
import About from './About';
import Projects from './Projects';
import ChatbotPlaceholder from './ChatbotPlaceholder';

import './App.css';
import './index.css';

function App() {
  const theme = useSelector((state) => state.theme.value);

 useEffect(() => {
  // Apply theme colors instantly
  document.documentElement.style.setProperty('--background-color', theme === 'light' ? '#f5f5f5' : '#0f0f23');
  document.documentElement.style.setProperty('--text-color', theme === 'light' ? '#333333' : '#e0e0e0');
  document.documentElement.style.setProperty('--secondary-bg', theme === 'light' ? '#ffffff' : '#1a1a2e');
  document.documentElement.style.setProperty('--accent-color', theme === 'light' ? '#646cff' : '#7c3aed');
  // Navbar background with transparency - matching About page gradient
  document.documentElement.style.setProperty('--navbar-bg', theme === 'light' ? 'linear-gradient(135deg, rgba(245, 245, 245, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%)' : 'linear-gradient(135deg, rgba(15, 15, 35, 0.95) 0%, rgba(26, 26, 46, 0.95) 100%)');
}, [theme]);

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <HeroSection /> 
      <About />
      <Projects />
      <ChatbotPlaceholder />
    </div>
  );
}

export default App;