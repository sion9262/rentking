import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Footer from './Footer';
import Header from './Header';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Header />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
