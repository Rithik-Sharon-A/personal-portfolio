// src/Projects.jsx

import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects, skills, and professional experience with smooth animations.",
      technologies: ["React", "CSS3", "Framer Motion", "Vite"],
      image: "💼",
      github: "#",
      live: "#",
      featured: true
    },
    {
      id: 2,
      title: "Career Digital Twin",
      description: "Build and deploy your own Agent to represent you to potential future employers. An AI-powered digital representation that showcases your skills and experience.",
      technologies: ["AI/ML", "Python", "OpenAI", "Agent Framework"],
      image: "🤖",
      github: "#",
      live: "#",
      featured: true
    },
    {
      id: 3,
      title: "SDR Agent",
      description: "An instant business application: create Sales Representatives that craft and send professional emails. Automate your sales outreach with AI-powered agents.",
      technologies: ["AI Agents", "Email Automation", "Sales CRM", "Python"],
      image: "📧",
      github: "#",
      live: "#",
      featured: false
    },
    {
      id: 4,
      title: "Deep Research Agent",
      description: "Make your own version of the essential Agentic use case: a team of Agents that carry out extensive research on any topic you choose.",
      technologies: ["Multi-Agent Systems", "Research Automation", "Web Scraping", "AI"],
      image: "🔍",
      github: "#",
      live: "#",
      featured: false
    },
    {
      id: 5,
      title: "Stock Picker Agent",
      description: "Build a Stock Picker Agent in minutes with CrewAI—automate your search for investment gems! AI-powered financial analysis and stock recommendations.",
      technologies: ["CrewAI", "Financial Analysis", "Stock Market", "Python"],
      image: "📈",
      github: "#",
      live: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">My Projects</h2>
          <p className="projects-subtitle">
            Here are some of the projects I've worked on. Each project represents 
            a learning journey and showcases different aspects of full-stack development.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="featured-projects">
          <h3 className="section-subtitle">Featured Projects</h3>
          <div className="featured-grid">
            {featuredProjects.map(project => (
              <div key={project.id} className="project-card featured-card">
                <div className="project-image">
                  <div className="project-icon">{project.image}</div>
                </div>
                <div className="project-content">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} className="project-link github-link" target="_blank" rel="noopener noreferrer">
                      <span className="link-icon">📁</span>
                      Code
                    </a>
                    <a href={project.live} className="project-link live-link" target="_blank" rel="noopener noreferrer">
                      <span className="link-icon">🌐</span>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="other-projects">
          <h3 className="section-subtitle">Other Projects</h3>
          <div className="projects-grid">
            {otherProjects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <div className="project-icon">{project.image}</div>
                </div>
                <div className="project-content">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} className="project-link github-link" target="_blank" rel="noopener noreferrer">
                      <span className="link-icon">📁</span>
                      Code
                    </a>
                    <a href={project.live} className="project-link live-link" target="_blank" rel="noopener noreferrer">
                      <span className="link-icon">🌐</span>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="projects-cta">
          <p className="cta-text">
            Interested in seeing more of my work? Check out my GitHub profile for additional projects and contributions.
          </p>
          <a href="https://github.com/ececoderithik" className="cta-button" target="_blank" rel="noopener noreferrer">
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
