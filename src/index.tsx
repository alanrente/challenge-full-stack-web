import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import axios from 'axios';
import { Students } from 'pages/Students';

axios.defaults.baseURL = process.env.REACT_APP_API;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Students />
  </React.StrictMode>
);
