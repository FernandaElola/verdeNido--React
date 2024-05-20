import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Define los estilos globales
const globalStyles = `
  body {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-style: normal;
    margin: 0;
    padding: 0;
    background-color: var(--color-claro);
  }
`;

// Agrega los estilos globales al head del documento
const styleElement = document.createElement('style');
styleElement.innerHTML = globalStyles;
document.head.appendChild(styleElement);

//Renderiza la app React
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
