// src/components/SkillCard.jsx

import React from 'react';
import PropTypes from 'prop-types';
import SkillBadge from './SkillBadge';
import './SkillCard.css';

function SkillCard({ title, skills }) {
  return (
    <div className="skill-card card mb-4 border-0 shadow">
      <div className="card-body p-4">
        <h4 className="h5 fw-semibold mb-3" style={{color: 'var(--accent-color)'}}>
          {title}
        </h4>
        <div className="d-flex flex-wrap gap-2">
          {skills.map((skill) => (
            <SkillBadge key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SkillCard;
