import React from 'react';
import ReactDOM from 'react-dom';
import TopHead from './TopHeader/TopHeader'
import App from './App'
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <TopHead />
  </BrowserRouter>,
  document.getElementById('header')
);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('container')
);