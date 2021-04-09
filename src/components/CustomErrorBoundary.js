import React from 'react';
import GlobalErrorPage from '../pages/GlobalErrorPage';

class CustomErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error) {
    console.log('Error from componentDidCatch: ', error);
  }

  render() {
    if (this.state.hasError) {
      return <GlobalErrorPage />;
    }
    return this.props.children;
  }
}

export default CustomErrorBoundary;
