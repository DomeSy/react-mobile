import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'lib-flexible';
import '@style/common.css';
import reportWebVitals from './reportWebVitals';
import './mock'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
