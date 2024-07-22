// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';  // Importa Bootstrap CSS
import './styles.css';
import './i18n';

// Determina si estamos en un entorno de producción
const isProduction = process.env.NODE_ENV === 'production';

// Usa HashRouter en producción y BrowserRouter en desarrollo
const Router = isProduction ? HashRouter : BrowserRouter;

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root') // Monta la aplicación en el elemento con id 'root'
);
