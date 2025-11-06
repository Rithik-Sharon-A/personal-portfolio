// src/components/SectionHeader.jsx

import React from 'react';
import PropTypes from 'prop-types';
import './SectionHeader.css';

function SectionHeader({ title, subtitle, centered = true }) {
  return (
    <div className={`section-header mb-5 ${centered ? 'text-center' : ''}`}>
      <h2 className="section-title display-4 fw-bold mb-4 position-relative">
        {title}
        <span className="section-underline position-absolute bottom-0 rounded"></span>
      </h2>
      {subtitle && (
        <p className="section-subtitle fs-5 mx-auto" style={{color: 'var(--text-color)', opacity: 0.9, lineHeight: 1.8}}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  centered: PropTypes.bool,
};

export default SectionHeader;
