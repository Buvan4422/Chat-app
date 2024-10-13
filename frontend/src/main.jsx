import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { AuthConProvider } from './context/AuthContext.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthConProvider>
        <App />
      </AuthConProvider>
    </BrowserRouter>
  </StrictMode>
);
