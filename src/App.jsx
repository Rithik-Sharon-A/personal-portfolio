// src/App.jsx

import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './navbar';
import HeroSection from './HeroSection';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './components/Footer';
import ChatbotWidget from './components/ChatbotWidget';

import './index.css';

function App() {
  return (
    <ErrorBoundary>
      <div className="dark" style={{minHeight: '100vh'}}>
        <Navbar />
        <HeroSection /> 
        <About />
        <Projects />
        <Contact />
        <Footer />
        <ChatbotWidget />
      </div>
    </ErrorBoundary>
  );
}

export default App;