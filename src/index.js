import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Header from './components/shared/Header';
import { BrowserRouter } from 'react-router-dom';

// react-router-dom - framework que cuida das rotas
// renderiza o nosso componente principal nna div root
// BrowserRouter - necessario para fazer as rotas funcionarem atraves do componente <Router></Router>

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);