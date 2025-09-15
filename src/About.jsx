// src/About.jsx

import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">About Me</h2>
            <p className="about-description">
              I'm Rithik Sharon A, a passionate Full Stack Developer with a love for creating 
              innovative web solutions. I enjoy working with modern technologies and building 
              applications that make a difference.
            </p>
            <p className="about-description">
              With expertise in both frontend and backend development, I bring ideas to life 
              through clean, efficient code and user-centered design. I'm always eager to learn 
              new technologies and take on challenging projects.
            </p>
            
            <div className="skills-section">
              <h3 className="skills-title">Skills & Technologies</h3>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Frontend</h4>
                  <div className="skill-tags">
                    <span className="skill-tag">React</span>
                    <span className="skill-tag">Next.js</span>
                    <span className="skill-tag">JavaScript</span>
                    <span className="skill-tag">HTML/CSS</span>
                    <span className="skill-tag">Redux</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4>Backend</h4>
                  <div className="skill-tags">
                    <span className="skill-tag">Node.js</span>
                    <span className="skill-tag">Express</span>
                    <span className="skill-tag">MongoDB</span>
                    <span className="skill-tag">REST APIs</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4>Tools</h4>
                  <div className="skill-tags">
                    <span className="skill-tag">Git</span>
                    <span className="skill-tag">Vite</span>
                    <span className="skill-tag">VS Code</span>
                    <span className="skill-tag">Cursor AI </span>
                    
                  </div>
                </div>
              </div>
            </div>

          
          </div>
          
          <div className="about-image">
            <div className="image-placeholder">
              <div className="placeholder-content">
                <span className="placeholder-icon">👨‍💻</span>
                <p>Your Photo Here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
