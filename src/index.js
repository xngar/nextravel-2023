import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ContextoGlobal from './components/contexto/contexto';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from './components/Footer';


const ruta = createBrowserRouter([{
  path: "/",
  element: <App />,
  path: "/footer",
  element: <Footer />
}])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <ContextoGlobal>
    <App />
  </ContextoGlobal>


);
