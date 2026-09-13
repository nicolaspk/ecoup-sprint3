const router = createBrowserRouter([
{
    path: '/',
    element: <App />,
children: [
     
      { index: true, element: <Home /> },
      { path: 'sobre', element: <Sobre /> },
      { path: 'faq', element: <Faq /> },
      { path: 'contato', element: <Contato /> },
      { path: 'integrantes', element: <Integrantes /> },
      { path: 'simulador', element: <Simulador /> },
      { path: 'dashboard', element: <Dashboard /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
<StrictMode>
<RouterProvider router={router} />
  </StrictMode>
);