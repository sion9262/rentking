import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Footer from './Footer';
import Header from './Header';
import Search from './search';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />    
    <Search />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);