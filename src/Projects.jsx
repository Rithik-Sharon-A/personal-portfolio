// src/Projects.jsx

import React from 'react';
import SectionHeader from './components/SectionHeader';
import ProjectCard from './components/ProjectCard';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects, skills, and professional experience with smooth animations.",
      technologies: ["React", "CSS3", "Framer Motion", "Vite"],
      image: "💼",
      github: "https://github.com/ececoderithik/personal-blog.git",  // Update with your actual repo name
      live: "#",
      featured: true
    },
    {
      id: 2,
      title: "Career Digital Twin",
      description: "Build and deploy your own Agent to represent you to potential future employers. An AI-powered digital representation that showcases your skills and experience.",
      technologies: ["AI/ML", "Python", "OpenAI", "Agent Framework"],
      image: "🤖",
      github: "https://github.com/ececoderithik/career-digital-twin",  // Update with your actual repo name
      live: "#",
      featured: true
    }
    // Uncomment these projects when ready to display them
    // {
    //   id: 3,
    //   title: "SDR Agent",
    //   description: "An instant business application: create Sales Representatives that craft and send professional emails. Automate your sales outreach with AI-powered agents.",
    //   technologies: ["AI Agents", "Email Automation", "Sales CRM", "Python"],
    //   image: "📧",
    //   github: "#",
    //   live: "#",
    //   featured: false
    // },
    // {
    //   id: 4,
    //   title: "Deep Research Agent",
    //   description: "Make your own version of the essential Agentic use case: a team of Agents that carry out extensive research on any topic you choose.",
    //   technologies: ["Multi-Agent Systems", "Research Automation", "Web Scraping", "AI"],
    //   image: "🔍",
    //   github: "#",
    //   live: "#",
    //   featured: false
    // },
    // {
    //   id: 5,
    //   title: "Stock Picker Agent",
    //   description: "Build a Stock Picker Agent in minutes with CrewAI—automate your search for investment gems! AI-powered financial analysis and stock recommendations.",
    //   technologies: ["CrewAI", "Financial Analysis", "Stock Market", "Python"],
    //   image: "📈",
    //   github: "#",
    //   live: "#",
    //   featured: false
    // }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section 
      id="projects" 
      className="py-5"
      style={{
        background: 'linear-gradient(135deg, var(--secondary-bg) 0%, var(--background-color) 100%)',
        minHeight: '100vh'
      }}
    >
      <div className="container">
        {/* Projects Header */}
        <SectionHeader 
          title="My Projects" 
          subtitle="Here are some of the projects I've worked on. Each project represents a learning journey and showcases different aspects of full-stack development."
          centered={true}
        />

        {/* Featured Projects */}
        <div className="mb-5">
          <h3 className="h2 fw-semibold text-center mb-5 position-relative" style={{color: 'var(--text-color)'}}>
            Featured Projects
            <span className="position-absolute bottom-0 start-50 translate-middle-x rounded" style={{
              width: '60px',
              height: '3px',
              background: 'linear-gradient(135deg, var(--accent-color), #ff6b6b)'
            }}></span>
          </h3>
          <div className="row g-4 mb-5">
            {featuredProjects.map(project => (
              <div key={project.id} className="col-xl-6">
                <ProjectCard project={project} featured={true} />
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects - Uncomment when ready to display */}
        {/* <div className="mb-5">
          <h3 className="h2 fw-semibold text-center mb-5 position-relative" style={{color: 'var(--text-color)'}}>
            Other Projects
            <span className="position-absolute bottom-0 start-50 translate-middle-x rounded" style={{
              width: '60px',
              height: '3px',
              background: 'linear-gradient(135deg, var(--accent-color), #ff6b6b)'
            }}></span>
          </h3>
          <div className="row g-4">
            {otherProjects.map(project => (
              <div key={project.id} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow" style={{
                  background: 'var(--secondary-bg)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  transition: 'all 0.3s ease'
                }}>
                  <div className="card-body p-4 text-center">
                    <div className="mb-4">
                      <div className="d-inline-block p-3 rounded-circle mb-3" style={{
                        fontSize: '2.5rem',
                        background: 'linear-gradient(135deg, var(--accent-color), #ff6b6b)'
                      }}>
                        {project.image}
                      </div>
                    </div>
                    
                    <h4 className="h5 fw-semibold mb-3" style={{color: 'var(--text-color)'}}>{project.title}</h4>
                    <p className="mb-4 small" style={{color: 'var(--text-color)', opacity: 0.8, lineHeight: 1.6}}>{project.description}</p>
                    
                    <div className="d-flex flex-wrap justify-content-center gap-1 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="badge px-2 py-1 rounded-pill small"
                          style={{
                            background: 'rgba(100, 108, 255, 0.1)',
                            color: 'var(--accent-color)',
                            border: '1px solid rgba(100, 108, 255, 0.2)',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = 'var(--accent-color)';
                            e.target.style.color = 'white';
                            e.target.style.transform = 'scale(1.05)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = 'rgba(100, 108, 255, 0.1)';
                            e.target.style.color = 'var(--accent-color)';
                            e.target.style.transform = 'scale(1)';
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="d-flex flex-column gap-2">
                      <a 
                        href={project.github} 
                        className="btn btn-outline-secondary btn-sm d-flex align-items-center justify-content-center gap-2"
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{transition: 'all 0.3s ease'}}
                        onMouseEnter={(e) => {
                          e.target.style.background = '#333';
                          e.target.style.color = 'white';
                          e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'transparent';
                          e.target.style.color = 'var(--text-color)';
                          e.target.style.transform = 'translateY(0)';
                        }}
                      >
                        <span>📁</span>
                        Code
                      </a>
                      <a 
                        href={project.live} 
                        className="btn btn-sm d-flex align-items-center justify-content-center gap-2"
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{
                          background: 'linear-gradient(135deg, var(--accent-color), #ff6b6b)',
                          color: 'white',
                          border: '1px solid var(--accent-color)',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'translateY(-2px)';
                          e.target.style.boxShadow = '0 5px 15px rgba(100, 108, 255, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = 'none';
                        }}
                      >
                        <span>🌐</span>
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Call to Action */}
        <div className="text-center p-5">
          <div className="card border-0 shadow" style={{
            background: 'var(--secondary-bg)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div className="card-body p-5">
              <p className="fs-5 mb-4" style={{color: 'var(--text-color)', opacity: 0.8, lineHeight: 1.6}}>
                Interested in seeing more of my work? Check out my GitHub profile for additional projects and contributions.
              </p>
              <a 
                href="https://github.com/ececoderithik" 
                className="btn btn-lg d-inline-flex align-items-center gap-3"
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-color), #ff6b6b)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '15px 30px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 10px 25px rgba(100, 108, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                View All Projects on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
