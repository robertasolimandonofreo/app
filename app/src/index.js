import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';
import reportWebVitals from './reportWebVitals';
import faro from './faro';
import { FaroErrorBoundary } from '@grafana/faro-react';
import sentry from './sentry';

ReactDOM.render(
  <React.StrictMode>
    <FaroErrorBoundary>
      <Routes />
    </FaroErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
sentry();
faro();
reportWebVitals();