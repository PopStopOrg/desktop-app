import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client'; // Notice this change
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot
root.render(_jsx(React.StrictMode, { children: _jsx(App, {}) }));
