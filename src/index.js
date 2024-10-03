// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import App from './App';
import './styles.css';

const rootElement = document.getElementById('root'); // Get the root element
const root = ReactDOM.createRoot(rootElement); // Create a root using createRoot

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
