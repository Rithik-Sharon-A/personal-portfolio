// src/Contact.jsx

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import SectionHeader from './components/SectionHeader';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');
    
    // EmailJS Configuration - Replace these with your actual EmailJS credentials
    const serviceId = 'service_lby321k';
    const templateId = 'template_emr9qek';
    const publicKey = 'MXL3_m2VBE-p1sWFa';
    
    // Template parameters that match your EmailJS template
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Rithik Sharon A',
    };
    
    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again or email me directly at rithiksharon.a@gmail.com');
      
      // Clear error message after 7 seconds
      setTimeout(() => {
        setStatus('');
        setErrorMessage('');
      }, 7000);
    }
  };

  return (
    <section 
      id="contact" 
      className="contact-section py-5"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, var(--background-color) 0%, var(--secondary-bg) 100%)',
      }}
    >
      <div className="container">
        <SectionHeader 
          title="Get In Touch" 
          subtitle="Have a question or want to work together? Feel free to reach out!"
          centered={true}
        />

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow" style={{
              background: 'var(--secondary-bg)',
              border: '1px solid rgba(100, 108, 255, 0.1)'
            }}>
              <div className="card-body p-5">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="form-label" style={{color: 'var(--text-color)'}}>
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control contact-input"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="form-label" style={{color: 'var(--text-color)'}}>
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control contact-input"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label" style={{color: 'var(--text-color)'}}>
                      Message
                    </label>
                    <textarea
                      className="form-control contact-input"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Your message..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-lg w-100 contact-submit-btn"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>

                  {status === 'success' && (
                    <div className="alert alert-success mt-3 mb-0" role="alert">
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}
                  
                  {status === 'error' && (
                    <div className="alert alert-danger mt-3 mb-0" role="alert">
                      Error: {errorMessage}
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="row mt-5 g-4">
              <div className="col-md-4">
                <div className="text-center contact-info-card">
                  <div className="contact-icon mb-3">@</div>
                  <h5 style={{color: 'var(--text-color)'}}>Email</h5>
                  <a href="mailto:rithiksharon.a@gmail.com" style={{color: 'var(--accent-color)', textDecoration: 'none'}}>
                  rithiksharon.a@gmail.com
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center contact-info-card">
                  <div className="contact-icon mb-3">in</div>
                  <h5 style={{color: 'var(--text-color)'}}>LinkedIn</h5>
                  <a href="https://www.linkedin.com/in/rithik-sharon/" target="_blank" rel="noopener noreferrer" style={{color: 'var(--accent-color)', textDecoration: 'none'}}>
                    Rithik Sharon A
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center contact-info-card">
                  <div className="contact-icon mb-3">{'<>'}</div>
                  <h5 style={{color: 'var(--text-color)'}}>GitHub</h5>
                  <a href="https://github.com/Rithik-Sharon-A" target="_blank" rel="noopener noreferrer" style={{color: 'var(--accent-color)', textDecoration: 'none'}}>
                    @Rithik-Sharon-A
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;


