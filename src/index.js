import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './CSS/fonts.css';
import './CSS/circles.css';
import './CSS/index.css';

console.log('Index.js chargé');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
