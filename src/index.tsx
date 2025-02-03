import React from 'react';
import ReactDOM from 'react-dom/client';  // Notice this change
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);  // Use createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
