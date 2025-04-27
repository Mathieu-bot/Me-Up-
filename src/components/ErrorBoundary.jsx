import React, { Component } from 'react';
import ErrorPopup from './ui/ErrorPopup';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can log the error to an error reporting service here
    console.error('Uncaught error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="relative">
          {this.props.children}
          <ErrorPopup
            type="error"
            message="Oups ! Une erreur inattendue est survenue. Veuillez réessayer plus tard."
            onClose={() => this.setState({ hasError: false })}
          />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
