import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initJsStore } from './storage_service/idb_service';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

initJsStore();