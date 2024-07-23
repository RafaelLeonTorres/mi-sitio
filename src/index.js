// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';  // Importa Bootstrap CSS
import './styles.css';
import './i18n';

// // Determina el entorno de ejecución
// const isProduction = process.env.NODE_ENV === 'production';

// // Selecciona el Router basado en el entorno
// const Routers = isProduction ? HashRouter : BrowserRouter;


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root') // Monta la aplicación en el elemento con id 'root'
);
