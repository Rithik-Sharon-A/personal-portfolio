// src/About.jsx

import React from 'react';
import SectionHeader from './components/SectionHeader';
import SkillCard from './components/SkillCard';

function About() {
  const skillsData = [
    { title: 'Frontend', skills: ['React', 'Next.js', 'JavaScript', 'HTML/CSS', 'Redux'] },
    { title: 'Backend', skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs'] },
    { title: 'AI & Tools', skills: ['Agentic AI', 'OpenAI API', 'Git', 'Vite', 'Cursor AI'] }
  ];
  return (
    <section 
      id="about" 
      className="py-5 position-relative"
      style={{
        minHeight: '100vh',
        background: '#000000',
        color: '#ffffff'
      }}
    >
      
      <div className="container position-relative" style={{zIndex: 10}}>
        <div className="row justify-content-center">
          {/* About Text */}
          <div className="col-lg-10">
            <SectionHeader 
              title="About Me" 
              centered={true}
            />
            
            <p className="fs-5 mb-4 text-center" style={{color: '#bdbdbd', lineHeight: 1.8}}>
              MERN Stack Developer with a strong foundation in building scalable, responsive web 
              applications using React, Node.js, Express, and MongoDB. Specializing in Agentic AI and 
              OpenAI APIs to automate complex workflows and improve user experiences.
            </p>
            
            <p className="fs-5 mb-5 text-center" style={{color: '#bdbdbd', lineHeight: 1.8}}>
              With expertise in both frontend and backend development, I bring ideas to life 
              through clean, efficient code and user-centered design. I'm always eager to learn 
              new technologies and take on challenging projects.
            </p>
            
            {/* Skills Section */}
            <div className="my-5">
              <h3 className="h2 fw-semibold mb-4 text-center" style={{
                color: '#ffffff'
              }}>Skills & Technologies</h3>
              
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
