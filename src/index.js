import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Footer from './components/Footer';



import ContextoGlobal from './components/contexto/contexto'; // contexto 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // rutas, links
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"; // manejador de consultar a api's


const ruta = createBrowserRouter([{
  path: "/",
  element: <App />,
  path: "/footer",
  element: <Footer />
}])

const cliente = new QueryClient();



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <ContextoGlobal>
    <QueryClientProvider client={cliente}>
      <App />
    </QueryClientProvider>
  </ContextoGlobal>


);
