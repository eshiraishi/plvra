import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './style.css';

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);