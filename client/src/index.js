import React from 'react';
// library for react 
import ReactDOM from 'react-dom/client';
// package for running in browser
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// element root 

// render root elem and in it render app
root.render(
  <React.StrictMode>
    <App />
    {/* app component which was imported*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
