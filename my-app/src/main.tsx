import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx';
import Home from './pages/Home.tsx';
import Sobre from './pages/Sobre.tsx';
import Faq from './pages/Faq.tsx';
import Contato from './pages/Contato.tsx';
import Integrantes from './pages/Integrantes.tsx';
import Simulador from './pages/Simulador.tsx';
import Dashboard from './pages/Dashboard.tsx';

const router = createBrowserRouter([
  {
    path: '/', 
    element: <App />, 
    children: [
      {path: '/', element: <Home />},
      {path: '/sobre', element: <Sobre />},
      {path: '/faq', element: <Faq />},
      {path: '/contato', element: <Contato />},
      {path: '/integrantes', element: <Integrantes />},
      {path: '/simulador', element: <Simulador />},
      {path: '/dashboard', element: <Dashboard />}
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
<StrictMode>
    <RouterProvider router={router} />
</StrictMode>,
);