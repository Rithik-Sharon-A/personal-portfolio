// src/components/ProjectCard.jsx

import React from 'react';
import PropTypes from 'prop-types';
import './ProjectCard.css';

function ProjectCard({ project, featured = false }) {
  return (
    <div className={`project-card card h-100 border-0 shadow position-relative ${featured ? 'featured' : ''}`}>
      {/* Featured indicator */}
      {featured && (
        <div className="featured-indicator position-absolute top-0 start-0 w-100"></div>
      )}
      
      <div className="card-body p-4 text-center">
        <div className="mb-4">
          <div className="project-icon d-inline-block p-4 rounded-circle mb-3">
            {project.image}
          </div>
        </div>
        
        <h4 className={`fw-semibold mb-3 ${featured ? 'h4' : 'h5'}`} style={{color: 'var(--text-color)'}}>
          {project.title}
        </h4>
        <p className={`mb-4 ${featured ? '' : 'small'}`} style={{color: 'var(--text-color)', opacity: 0.8, lineHeight: 1.6}}>
          {project.description}
        </p>
        
        <div className={`d-flex flex-wrap justify-content-center ${featured ? 'gap-2' : 'gap-1'} mb-4`}>
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className={`tech-badge badge rounded-pill ${featured ? 'px-3 py-2' : 'px-2 py-1 small'}`}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className={`d-flex ${featured ? 'gap-3 justify-content-center' : 'flex-column gap-2'}`}>
          <a 
            href={project.github} 
            className={`btn-github btn ${featured ? 'btn-outline-secondary' : 'btn-outline-secondary btn-sm'} d-flex align-items-center ${featured ? 'gap-2' : 'justify-content-center gap-2'}`}
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span>📁</span>
            View Code
          </a>
          {project.live && project.live !== '#' && (
            <a 
              href={project.live} 
              className={`btn-live btn ${featured ? '' : 'btn-sm'} d-flex align-items-center ${featured ? 'gap-2' : 'justify-content-center gap-2'}`}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span>🌐</span>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    live: PropTypes.string,
  }).isRequired,
  featured: PropTypes.bool,
};

export default ProjectCard;
