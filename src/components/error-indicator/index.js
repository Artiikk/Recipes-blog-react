import React from 'react';

import './_error-indicator.scss';
import icon from '../../assets/error.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator justify-content-center">
      <img src={icon} alt="error icon"/>
      <span>Unfortunately something has gone terribly wrong...</span>
      <span>(Please try ro refresh your page)</span>
    </div>
  );
}

export default ErrorIndicator;
