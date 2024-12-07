import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import Routers from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
   
    <Routers/>
  </BrowserRouter>
);