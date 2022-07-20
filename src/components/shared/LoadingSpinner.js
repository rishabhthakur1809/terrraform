import React from 'react';
import loader from '../img/loader.svg';

const LoadingSpinner = () => (
  <div className="loadingSpinner">
    <img src={loader} alt="Loading..." />
  </div>
);

export default LoadingSpinner;
