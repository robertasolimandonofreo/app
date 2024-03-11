import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
import reportWebVitals from './reportWebVitals';
import faro from './Faro';
import { FaroErrorBoundary } from '@grafana/faro-react';

ReactDOM.render(
  <React.StrictMode>
    <FaroErrorBoundary>
      <Routes />
    </FaroErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
faro();
reportWebVitals();