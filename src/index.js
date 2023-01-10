import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './App.css'
import reportWebVitals from './reportWebVitals';
import  {Provider}  from 'react-redux'
import Store from './components/utils/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
    <App /></Provider>
  </React.StrictMode>
);

reportWebVitals();
