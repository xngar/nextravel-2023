import React from "react";
import "./index.css";
import './App.css';
import Contactenos from './components/Contactenos';
import Footer from './components/Footer';
import { Menu } from './components/Menu';
import QuienesSomos from './components/QuienesSomos';
import { Slider } from './components/Slider';
import { getSlider, pedirMoneda, getBanners, getProgramMoreViews } from "./components/api/Apis";
import { useQuery } from "@tanstack/react-query";
import { HashLoader } from 'react-spinners';
import { obtenerToken } from "./components/api/ApiNextravel";

import Destinos from "./components/Destinos";
import ProgramsViews from './components/ProgramRandom';
function App() {

  //obtenemos el token del servicio de Nextravel.

  const tokenNextravel = useQuery({
    queryKey: ['tokenNextravel'],
    queryFn: () => obtenerToken()
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

  const destiny = useQuery({
    queryKey:['destiny'],
    queryFn: ()=> getBanners()
  }) ;

const programRandom = useQuery({
  queryKey:['more-views'],
  queryFn: ()=> getProgramMoreViews()
}) ;

  return (<>
    {
      carousel.isLoading ?
        <HashLoader
          color={'#d3761b'}
          loading={carousel.isLoading}
          size={70}
          aria-label="Loading Spinner"
          data-testid="loader"
          style={{ float: 'center' }}

        />
        :
        <div className="App">

          <Menu change={cambio} />
          <Slider items={carousel} cambio={cambio} />
          <QuienesSomos />
          <Destinos items={destiny} />
          <ProgramsViews Items={programRandom} change={cambio}/>
          <Contactenos token={tokenNextravel.data?.value} />
          <Footer />


        </div>
    }
  </>);
}

export default App;
