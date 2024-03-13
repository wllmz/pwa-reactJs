import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/serviceWorker.js', { scope: '/' }).then(function(registration) {
      console.log('Le service worker a été enregistré avec succès avec le scope: ', registration.scope);
    }, function(err) {
      console.log('Échec de lenregistrement du service worker:', err);
    });
  });
}

reportWebVitals();
