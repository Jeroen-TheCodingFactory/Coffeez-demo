//importeer react
import React from 'react';
//importeer reactdom
import ReactDOM from 'react-dom/client';
//importeer app component
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);