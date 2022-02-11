import React from 'react';
import ReactDOM from 'react-dom';
import TopHead from './TopHeader/TopHeader'
import App from './App'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);