import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Browser, Routes, Route, BrowserRouter} from "react-router-dom"; 
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      </BrowserRouter>
      <App />
    </React.StrictMode>, 
  document.getElementById('root')
);

reportWebVitals();