// src/App.jsx

import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './navbar';
import HeroSection from './HeroSection';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import ChatbotPlaceholder from './chatbot/ChatbotPlaceholder';

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
        <ChatbotPlaceholder />
      </div>
    </ErrorBoundary>
  );
}

export default App;