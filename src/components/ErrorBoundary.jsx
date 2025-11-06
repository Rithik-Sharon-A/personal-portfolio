// src/components/ErrorBoundary.jsx

import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-fallback" style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
          background: 'var(--background-color)',
          color: 'var(--text-color)'
        }}>
          <div className="text-center" style={{maxWidth: '600px'}}>
            <h1 className="display-1 mb-4">😕</h1>
            <h2 className="h2 mb-3">Oops! Something went wrong</h2>
            <p className="lead mb-4" style={{opacity: 0.8}}>
              We're sorry for the inconvenience. The application encountered an unexpected error.
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="text-start p-3 rounded" style={{
                background: 'var(--secondary-bg)',
                border: '1px solid rgba(100, 108, 255, 0.2)',
                marginBottom: '1rem'
              }}>
                <summary className="cursor-pointer mb-2">Error Details</summary>
                <pre style={{
                  fontSize: '0.875rem',
                  overflow: 'auto',
                  margin: 0,
                  color: '#ff6b6b'
                }}>
                  {this.state.error.toString()}
                  {this.state.errorInfo && this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
            <button 
              className="btn btn-lg"
              onClick={() => window.location.href = '/'}
              style={{
                background: 'linear-gradient(135deg, var(--accent-color), #ff6b6b)',
                color: 'white',
                border: 'none',
                padding: '0.75rem 2rem'
              }}
            >
              Return to Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
