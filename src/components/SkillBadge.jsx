// src/components/SkillBadge.jsx

import React from 'react';
import PropTypes from 'prop-types';
import './SkillBadge.css';

function SkillBadge({ skill }) {
  return (
    <span className="skill-badge badge px-3 py-2 rounded-pill">
      {skill}
    </span>
  );
}

SkillBadge.propTypes = {
  skill: PropTypes.string.isRequired,
};

export default SkillBadge;

