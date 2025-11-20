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
        <div className="row justify-content-center">
          {/* About Text */}
          <div className="col-lg-10">
            <SectionHeader 
              title="About Me" 
              centered={true}
            />
            
            <p className="fs-5 mb-4 text-center" style={{color: 'var(--text-color)', opacity: 0.9, lineHeight: 1.8}}>
              I'm Rithik Sharon A, a passionate Full Stack Developer with a love for creating 
              innovative web solutions. I enjoy working with modern technologies and building 
              applications that make a difference.
            </p>
            
            <p className="fs-5 mb-5 text-center" style={{color: 'var(--text-color)', opacity: 0.9, lineHeight: 1.8}}>
              With expertise in both frontend and backend development, I bring ideas to life 
              through clean, efficient code and user-centered design. I'm always eager to learn 
              new technologies and take on challenging projects.
            </p>
            
            {/* Skills Section */}
            <div className="my-5">
              <h3 className="h2 fw-semibold mb-4 text-center" style={{color: 'var(--text-color)'}}>Skills & Technologies</h3>
              
              {skillsData.map((category) => (
                <SkillCard key={category.title} title={category.title} skills={category.skills} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
