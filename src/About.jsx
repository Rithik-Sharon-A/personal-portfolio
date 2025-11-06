// src/About.jsx

import React from 'react';
import SectionHeader from './components/SectionHeader';
import SkillCard from './components/SkillCard';

function About() {
  const skillsData = [
    { title: 'Frontend', skills: ['React', 'Next.js', 'JavaScript', 'HTML/CSS', 'Redux'] },
    { title: 'Backend', skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs'] },
    { title: 'Tools', skills: ['Git', 'Vite', 'VS Code', 'Cursor AI'] }
  ];
  return (
    <section 
      id="about" 
      className="py-5 position-relative"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, var(--background-color) 0%, var(--secondary-bg) 100%)',
        color: 'var(--text-color)'
      }}
    >
      {/* Background decoration */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{pointerEvents: 'none'}}>
        <div className="position-absolute rounded-circle" style={{
          top: '25%',
          left: '20%',
          width: '384px',
          height: '384px',
          background: 'rgba(100, 108, 255, 0.1)',
          filter: 'blur(3rem)'
        }}></div>
        <div className="position-absolute rounded-circle" style={{
          bottom: '25%',
          right: '20%',
          width: '384px',
          height: '384px',
          background: 'rgba(59, 130, 246, 0.1)',
          filter: 'blur(3rem)'
        }}></div>
      </div>
      
      <div className="container position-relative" style={{zIndex: 10}}>
        <div className="row align-items-center">
          {/* About Text */}
          <div className="col-lg-6 pe-lg-5">
            <SectionHeader 
              title="About Me" 
              centered={false}
            />
            
            <p className="fs-5 mb-4" style={{color: 'var(--text-color)', opacity: 0.9, lineHeight: 1.8}}>
              I'm Rithik Sharon A, a passionate Full Stack Developer with a love for creating 
              innovative web solutions. I enjoy working with modern technologies and building 
              applications that make a difference.
            </p>
            
            <p className="fs-5 mb-5" style={{color: 'var(--text-color)', opacity: 0.9, lineHeight: 1.8}}>
              With expertise in both frontend and backend development, I bring ideas to life 
              through clean, efficient code and user-centered design. I'm always eager to learn 
              new technologies and take on challenging projects.
            </p>
            
            {/* Skills Section */}
            <div className="my-5">
              <h3 className="h2 fw-semibold mb-4" style={{color: 'var(--text-color)'}}>Skills & Technologies</h3>
              
              {skillsData.map((category) => (
                <SkillCard key={category.title} title={category.title} skills={category.skills} />
              ))}
            </div>
          </div>
          
          {/* About Image */}
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <div 
              className="d-flex flex-column justify-content-center align-items-center rounded-3 border-2 border-dashed"
              style={{
                width: '300px',
                height: '300px',
                background: 'linear-gradient(135deg, var(--secondary-bg), rgba(124, 58, 237, 0.1))',
                borderColor: 'rgba(124, 58, 237, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = 'var(--accent-color)';
                e.target.style.background = 'linear-gradient(135deg, var(--secondary-bg), rgba(124, 58, 237, 0.2))';
                e.target.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = 'rgba(124, 58, 237, 0.3)';
                e.target.style.background = 'linear-gradient(135deg, var(--secondary-bg), rgba(124, 58, 237, 0.1))';
                e.target.style.transform = 'scale(1)';
              }}
            >
              <div className="text-center" style={{color: 'var(--text-color)', opacity: 0.7}}>
                <span className="display-1 d-block mb-3">👨‍💻</span>
                <p className="fs-5 fw-medium mb-0">Your Photo Here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
