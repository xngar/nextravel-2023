<<<<<<< HEAD
import React, { useState, useEffect, isValidElement } from "react";
=======
import React, { useEffect } from "react";
>>>>>>> mario
import "./index.css";
import './App.css';
import Contactenos from './components/Contactenos';
import Footer from './components/Footer';
import { Menu } from './components/Menu';
import QuienesSomos from './components/QuienesSomos';
import { Slider } from './components/Slider';
import { getSlider, pedirMoneda } from "./components/api/Apis";
import { useQuery } from "@tanstack/react-query";
<<<<<<< HEAD
import { HashLoader } from 'react-spinners';

function App() {
  const [loading, setLoading] = useState(false);
=======
import {HashLoader} from 'react-spinners';
import { obtenerToken } from "./components/api/ApiNextravel";
import { Areas } from "./Pages/Areas";
// import {Destinos} from './Pages/Destinos';
import {Programas} from './Pages/Programas';
import { Programa } from "./Pages/Programa";
function App() {
>>>>>>> mario

  //obtenemos el token del servicio de Nextravel.

  const tokenNextravel = useQuery({
    queryKey: ['tokenNextravel'],
    queryFn: ()=> obtenerToken()
  })

  // pedimos el cambio
  const cambio = useQuery({
    queryKey: ["change"],
    queryFn: () => pedirMoneda()
  });

  // invocamos a los Slider de Turisclub
  const carousel = useQuery({
    queryKey: ["slider"],
    queryFn: () => getSlider('USD')
  });
<<<<<<< HEAD
  console.log('Valor de Carousel: ', carousel.data)
  console.log('Valor del Loading: ', loading);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000)

  }, [])

  return (<>
    {
      loading ?
        <HashLoader
          color={'#d3761b'}
          loading={loading}
          size={70}
          aria-label="Loading Spinner"
          data-testid="loader"
          style={{ float: 'center' }}

        />
        :
        <div className="App">
          <Menu change={cambio} />
          <Slider items={carousel} />
          <QuienesSomos />
          <Contactenos />
          <Footer />
        </div>
    }
=======

  useEffect(()=>{}, [])

 return (<>
      {
        carousel.isLoading ? 
        <HashLoader
        color={'#d3761b'}
        loading={carousel.isLoading}
        size={70}
        aria-label="Loading Spinner"
        data-testid="loader"
        style={{float:'center'}}
        
      />
        :
        <div className="App">
      
      <Menu change={cambio}/>
        <Slider items={carousel} cambio={cambio} />
        <QuienesSomos />
        <Contactenos token={tokenNextravel.data?.value}/>
        <Footer />
       

      </div>
      }
>>>>>>> mario
  </>);
}

export default App;
