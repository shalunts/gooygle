import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ResultContextProvider } from './context/ResultContextProvider';
import App from './App';
import './global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ResultContextProvider>
    <Router>
      <App />
    </Router>
  </ResultContextProvider>
);
