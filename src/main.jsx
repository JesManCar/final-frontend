import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
import { PetsProvider } from './context/petsContext';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <AuthProvider>
        <PetsProvider>
          <App />
        </PetsProvider>
      </AuthProvider>
    </BrowserRouter>
  </>
);
