import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Импорт Router
import App from './App';
import { CartProvider } from './context/CartContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter> 
    <CartProvider>
      <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);