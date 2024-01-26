import React, { useEffect } from "react";
import "./index.css";
import './App.css';
import Contactenos from './components/Contactenos';
import Footer from './components/Footer';
import { Menu } from './components/Menu';
import QuienesSomos from './components/QuienesSomos';
import {Slider} from './components/Slider';
import {getSlider, pedirMoneda } from "./components/api/Apis";
import { useQuery } from "@tanstack/react-query";
import {HashLoader} from 'react-spinners';
import { obtenerToken } from "./components/api/ApiNextravel";

function App() {

  //obtenemos el token del servicio de Nextravel.

  const tokenNextravel = useQuery({
    queryKey: ['tokenNextravel'],
    queryFn: ()=> obtenerToken()
  })
console.log('Token en APP: ', tokenNextravel.data?.value)
  // pedimos el cambio
  const cambio = useQuery({
    queryKey: ["change"],
    queryFn: () => pedirMoneda()
  });
 
  // invocamos a los Slider de Turisclub
  const carousel = useQuery ({
    queryKey: ["slider"],
    queryFn: () => getSlider('USD')
  });

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
        <Slider items={carousel} />
        <QuienesSomos />
        <Contactenos token={tokenNextravel.data?.value}/>
        <Footer />
      </div>
      }
  </>);
}

export default App;
