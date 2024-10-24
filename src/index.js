import React from 'react';
import ReactDOM from 'react-dom/client'; // Change this import
import App from './App';
import { unregister } from './utils/serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot instead of render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Call the unregister function to disable service worker (for development)
unregister();