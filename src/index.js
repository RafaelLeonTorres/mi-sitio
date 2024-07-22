// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';  // Importa Bootstrap CSS
import reportWebVitals from './reportWebVitals';
import './styles.css';
import './i18n';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root') // Monta la aplicación en el elemento con id 'root'
);
