import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


import ContextGlobal from './components/contexto/contexto'; // contexto 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // rutas, links
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"; // manejador de consultar a api's
import { Areas } from './Pages/Areas';
import { Programas } from './Pages/Programas';
import { Programa } from './Pages/Programa';


const ruta = createBrowserRouter([
  {
  path: "/",
  element: <App />
 },
 {
  path: "/Areas/:IdArea",
  element: <Areas />
 },
 {
  path: "/Programas/:IdArea/:Id",
  element: <Programas />
 },
 {
  path: "/Programa/:IdPrograma",
  element: <Programa />
 }
])

const client = new QueryClient();



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


<ContextGlobal>
    <QueryClientProvider client={client}>
    <RouterProvider router={ruta}>
      <App />
      </RouterProvider>
    </QueryClientProvider>
  </ContextGlobal>

);
